import * as contentful from "contentful";
import Speaker from "@/app/model/speaker";

export const useSpeaker = async (
  priority?: number,
): Promise<contentful.EntryCollection<Speaker>> => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  return client.getEntries<Speaker>({
    content_type: "speaker",
    ...(priority ? { "fields.priority": priority } : {}),
  });
};
