import Session from "@/app/model/session";

export const useSession = async (): Promise<Session[]> => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID!;
  const environment = process.env.CONTENTFUL_ENV!;
  const url = new URL(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries`,
  );
  url.search = new URLSearchParams({
    content_type: "session",
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN!,
    order: "fields.startTime",
  }).toString();

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: process.env.CONTENTFUL_ACCESS_TOKEN!,
    },
  });

  const jsonRes = await res.json();

  const sessions = jsonRes.items?.map((item: any): Session => {
    return {
      title: item.fields.title,
      track: item.fields.track,
      type: item.fields.type,
      startTime: item.fields.startTime,
      endTime: item.fields.endTime,
      room: item.fields.room,
      description: item.fields.description,
      speakers: item.fields.speakers,
    };
  });

  if (!sessions) {
    console.log("Sessions is undefined");
  }

  return sessions ?? [];
};
