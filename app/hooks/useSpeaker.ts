import Speaker from "@/app/model/speaker";

const findAssetURL = (
  assetsArray: any[],
  assetId: string,
): string | undefined => {
  const asset = assetsArray.find((assetObj) => assetObj.sys.id == assetId);

  return asset ? `https:${asset.fields.file.url}` : undefined;
};

export const useSpeaker = async (count?: number): Promise<Speaker[]> => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID!;
  const environment = process.env.CONTENTFUL_ENV!;
  const url = new URL(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries`,
  );
  url.search = new URLSearchParams({
    content_type: "speaker",
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN!,
    order: "fields.priority,fields.name",
    ...(count && { limit: count + "" }),
  }).toString();

  console.log("URL: " + url);

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: process.env.CONTENTFUL_ACCESS_TOKEN!,
    },
  });

  console.log(res.headers);
  console.log(res.status);
  console.log(res.body);

  const jsonRes = await res.json();

  const speakers = jsonRes.items?.map((item: any): Speaker => {
    return {
      name: item.fields.name,
      description: item.fields.description,
      profilePhoto: findAssetURL(
        jsonRes.includes.Asset,
        item.fields.profilePhoto.sys.id,
      ),
      linkedin: item.fields.linkedin,
      x: item.fields.x,
      priority: item.fields.priority,
    };
  });

  if (!speakers) {
    console.log("Speakers is undefined");
  }

  return speakers ?? [];
};
