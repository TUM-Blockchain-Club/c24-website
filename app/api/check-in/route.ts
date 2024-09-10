export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "nodejs";
export const maxDuration = 30;

import { NextRequest, NextResponse } from "next/server";

const EVENTBRITE_API_KEY = process.env.EVENTBRITE_API_KEY;
const API_PASSCODE = process.env.API_PASSCODE;
const EVENT_ID = process.env.EVENT_ID;

interface CheckInRequest {
  barcode: string;
}

export interface EventbriteAttendee {
  id: string;
  profile: {
    email: string;
    name: string;
  };
  ticket_class_name: string;
  barcodes: { barcode: string }[];
  checked_in: boolean;
}

interface EventbriteResponse {
  attendees: EventbriteAttendee[];
  pagination: {
    page_count: number;
  };
}

export interface CheckInResponse
  extends Omit<EventbriteAttendee, "checked_in" | "barcodes"> {
  wasAlreadyCheckedIn: boolean;
}

export const OPTIONS = async (req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  );
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  // Check authentication
  const authHeader = req.headers.get("authorization");
  if (
    !authHeader ||
    !authHeader.startsWith("Bearer ") ||
    authHeader.split(" ")[1] !== API_PASSCODE
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { barcode }: CheckInRequest = await req.json();

  if (!barcode) {
    return NextResponse.json({ error: "Missing barcode" }, { status: 400 });
  }

  if (!EVENT_ID) {
    return NextResponse.json(
      { error: "Event ID not configured" },
      { status: 500 },
    );
  }

  try {
    // Step 1: Find attendee by barcode
    const attendee = await findAttendeeByBarcode(barcode);
    if (!attendee) {
      return NextResponse.json(
        { error: "Attendee not found" },
        { status: 404 },
      );
    }

    // Step 2: Check in the attendee
    const checkInResult = await checkInAttendee(
      attendee.id,
      attendee.checked_in,
    );

    const response: CheckInResponse = {
      wasAlreadyCheckedIn: checkInResult.wasAlreadyCheckedIn,
      id: attendee.id,
      profile: {
        name: attendee.profile.name,
        email: attendee.profile.email,
      },
      ticket_class_name: attendee.ticket_class_name,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

async function findAttendeeByBarcode(
  barcode: string,
): Promise<EventbriteAttendee | null> {
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/events/${EVENT_ID}/attendees/?page=${page}`,
      {
        headers: { Authorization: `Bearer ${EVENTBRITE_API_KEY}` },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: EventbriteResponse = await response.json();
    const attendee = data.attendees.find((a) =>
      a.barcodes.some((b) => b.barcode === barcode),
    );
    if (attendee) {
      return attendee;
    }

    if (data.pagination.page_count === page) {
      break; // No more pages
    }

    page++;
  }

  return null; // Attendee not found
}

async function checkInAttendee(
  attendeeId: string,
  isAlreadyCheckedIn: boolean,
): Promise<{ wasAlreadyCheckedIn: boolean }> {
  if (isAlreadyCheckedIn) {
    return { wasAlreadyCheckedIn: true };
  }

  const checkInTime = new Date().toISOString();

  const response = await fetch(
    `https://www.eventbriteapi.com/v3/events/${EVENT_ID}/attendees/${attendeeId}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${EVENTBRITE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checked_in: true,
        checked_in_time: checkInTime,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return { wasAlreadyCheckedIn: false };
}
