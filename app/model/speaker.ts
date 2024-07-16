import * as contentful from "contentful";

interface Speaker {
  contentTypeId: "speaker";
  fields: {
    name: contentful.EntryFieldTypes.Text;
    profilePhoto: contentful.EntryFieldTypes.AssetLink;
    description: contentful.EntryFieldTypes.Text;
    x: contentful.EntryFieldTypes.Text;
    linkedin: contentful.EntryFieldTypes.Text;
    priority: contentful.EntryFieldTypes.Number;
  };
}

export default Speaker;
