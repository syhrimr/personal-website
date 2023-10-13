const personalProject = {
  name: "personalProject",
  title: "Personal Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "github",
      title: "Github",
      type: "url"
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "alt", title: "Alternative Text", type: "string" },
      ]
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block" }
      ]
    },
    {
      name: "techs",
      title: "Tech Stacks",
      type: "array",
      of: [
        { type: "string" }
      ]
    }
  ]
}

export default personalProject