export default {
  name: "collection",
  title: "Collection",
  type: "document",
  fields: [
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
    },
    {
      name: "posts",
      title: "Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return selection;
    },
  },
};
