import client from "part:@sanity/base/client";

export default {
  name: "post",
  title: "Post",
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
        slugify: (str) => str.replaceAll(" ", "-").toLowerCase(),
        source: async (doc) => {
          if (!doc.collection) {
            return doc.title;
          }

          const collection = await client.getDocument(doc.collection._ref);
          return `${collection.slug.current}/${doc.title}`;
        },
      },
    },
    {
      name: "collection",
      title: "Collection",
      type: "reference",
      to: [{ type: "collection" }],
      weak: false,
    },
    {
      name: "numInCollection",
      title: "Number of Post in Collection",
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
