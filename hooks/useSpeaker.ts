import Speaker from "@/model/speaker";

export const findAssetURL = (
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

  let speakers: Speaker[] = [];
  let skipCounter = 0;

  do {
    url.search = new URLSearchParams({
      content_type: "speaker",
      access_token: process.env.CONTENTFUL_ACCESS_TOKEN!,
      order: "fields.priority,fields.name",
      skip: skipCounter + "",
      ...(count && { limit: count + "" }),
    }).toString();

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: process.env.CONTENTFUL_ACCESS_TOKEN!,
      },
    });

    const jsonRes = await res.json();
    const { total } = jsonRes;

    speakers = speakers.concat(
      jsonRes.items?.map((item: any): Speaker => {
        return {
          name: item.fields.name,
          description: item.fields.description,
          profilePhoto: findAssetURL(
            jsonRes.includes.Asset,
            item.fields.profilePhoto.sys.id,
          ),
          url: item.fields.url,
          urlType: item.fields.urlType,
          priority: item.fields.priority,
        };
      }),
    );

    // Stop iterating if the current response count is not bounded by maximum (100)
    if (total === 0) {
      break;
    } else {
      console.log("Paginating speaker");
      skipCounter += 100;
    }
  } while (!count);

  if (!speakers) {
    console.log("Speakers is undefined");
  }

  return speakers ?? [];
};
