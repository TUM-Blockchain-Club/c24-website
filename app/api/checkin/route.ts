import { NextRequest, NextResponse } from "next/server";

const EVENTBRITE_API_KEY = process.env.EVENTBRITE_API_KEY;
const API_PASSCODE = process.env.API_PASSCODE;
const EVENT_ID = process.env.EVENT_ID;

interface CheckInRequest {
  barcode: string;
}

interface EventbriteAttendee {
  id: string;
  barcodes: { barcode: string }[];
  checked_in: boolean;
}

interface EventbriteResponse {
  attendees: EventbriteAttendee[];
  pagination: {
    page_count: number;
  };
}

interface CheckInResponse {
  wasAlreadyCheckedIn: boolean;
}

export const OPTIONS = async (req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json({}, { status: 200 });
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
    };

    return NextResponse.json(response, { status: 200 });
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
  const limit = 50; // Adjust based on your needs

  while (true) {
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/events/${EVENT_ID}/attendees/?page=${page}&page_size=${limit}`,
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
