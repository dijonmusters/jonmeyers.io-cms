import client from "part:@sanity/base/client";

export default {
  name: "lesson",
  title: "Lesson",
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
      name: "course",
      title: "Course",
      description: "Optional",
      type: "reference",
      to: [{ type: "course" }],
      weak: false,
    },
    {
      name: "numInCourse",
      description: "Optional",
      title: "Number of Video in Course",
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
