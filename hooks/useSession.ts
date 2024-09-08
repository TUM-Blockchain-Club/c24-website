import Session from "@/model/session";
import Speaker from "@/model/speaker";
import { findAssetURL } from "@/hooks/useSpeaker";

export const useSession = async (): Promise<Session[]> => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID!;
  const environment = process.env.CONTENTFUL_ENV!;
  const url = new URL(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries`,
  );

  let sessions: Session[] = [];
  let skipCounter = 0;

  do {
    url.search = new URLSearchParams({
      content_type: "session",
      access_token: process.env.CONTENTFUL_ACCESS_TOKEN!,
      order: "fields.startTime",
      skip: skipCounter + "",
    }).toString();

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: process.env.CONTENTFUL_ACCESS_TOKEN!,
      },
    });

    const jsonRes = await res.json();
    const { total } = jsonRes;

    sessions = sessions.concat(
      jsonRes.items?.map((item: any): Session => {
        return {
          title: item.fields.title,
          track: item.fields.track,
          type: item.fields.type,
          startTime: item.fields.startTime,
          endTime: item.fields.endTime,
          room: item.fields.room,
          description: item.fields.description,
          isSpecialSession: item.fields.isSpecialSession,
          registrationLink: item.fields.registrationLink,
          speakers: item.fields.speakers?.map(
            (speaker: {
              sys: { type: string; linkType: string; id: string };
            }): undefined | Speaker => {
              const speakerEntry = jsonRes.includes.Entry.find(
                (entry: any) => entry.sys.id == speaker.sys.id,
              );

              if (!speakerEntry) {
                return undefined;
              }

              return {
                name: speakerEntry.fields.name,
                description: speakerEntry.fields.description,
                profilePhoto: findAssetURL(
                  jsonRes.includes.Asset,
                  speakerEntry.fields.profilePhoto.sys.id,
                ),
                url: speakerEntry.fields.url,
                urlType: speakerEntry.fields.urlType,
                priority: speakerEntry.fields.priority,
              };
            },
          ),
        };
      }),
    );

    // Stop iterating if the current response count is not bounded by maximum (100)
    if (total === 0) {
      break;
    } else {
      console.log("Paginating session");
      skipCounter += 100;
    }
  } while (true);

  if (!sessions) {
    console.log("Sessions is undefined");
  }

  return sessions ?? [];
};
