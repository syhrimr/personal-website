const personalProject = {
  name: "personalProject",
  title: "Personal Project",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content"
    },
    {
      name: "seo",
      title: "SEO"
    }
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "content"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      group: "content"
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      group: "content"
    },
    {
      name: "github",
      title: "Github",
      type: "url",
      group: "content"
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "alt", title: "Alternative Text", type: "string" }
      ],
      group: "content"
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "array",
      of: [{ type: "block" }],
      group: "content"
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      group: "content"
    },
    {
      name: "techs",
      title: "Tech Stacks",
      type: "array",
      of: [{ type: "string" }],
      group: "content"
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo"
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "string",
      group: "seo"
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "string",
      group: "seo"
    },
    {
      name: "seoSlug",
      title: "SEO Slug",
      type: "slug",
      group: "seo"
    },
    {
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      group: "seo"
    }
  ]
};

export default personalProject;
