import client from "part:@sanity/base/client";

export default {
  name: "article",
  title: "Article",
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
      name: "series",
      title: "Series",
      description: "Optional",
      type: "reference",
      to: [{ type: "series" }],
      weak: false,
    },
    {
      name: "numInCollection",
      title: "Number of Post in Collection",
      description: "Optional",
      type: "number",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "nextBestActionUrl",
      title: "URL for next best action",
      description: "Defaults to next article in series",
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
