export default {
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      name: "image",
      title: "Header image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return selection;
    },
  },
};
