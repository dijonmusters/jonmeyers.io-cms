export default {
  name: "talk",
  title: "Talk",
  type: "document",
  fields: [
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
    },
    {
      name: "createdAt",
      title: "Created At",
      description: "Used for sorting not publishing",
      type: "date",
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
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "string",
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
