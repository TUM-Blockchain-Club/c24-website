import * as contentful from "contentful";
import Speaker from "@/app/model/speaker";

export const useSpeaker = async (
  count?: number,
): Promise<contentful.EntryCollection<Speaker>> => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  return client.getEntries<Speaker>({
    content_type: "speaker",
    order: ["fields.priority", "sys.createdAt"],
    ...(count ? { limit: count } : {}),
  });
};
