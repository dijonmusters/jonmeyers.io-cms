import client from "part:@sanity/base/client";
import course from "./course";

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
      name: "positionInCourse",
      description: "Optional",
      title: "Position in Course",
      type: "number",
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
    {
      name: "nextBestActionTitle",
      title: "Next best action",
      description: "Defaults to next lesson in course",
      type: "text",
    },
    {
      name: "nextBestActionUrl",
      title: "Next best action URL",
      description: "Defaults to next lesson in course",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
      course: "course.title",
      positionInCourse: "positionInCourse",
    },
    prepare(selection) {
      const { title, course, positionInCourse } = selection;

      if (!course) {
        return { title };
      }

      return {
        title: `${positionInCourse}. ${title}`,
        subtitle: course,
      };
    },
  },
};
