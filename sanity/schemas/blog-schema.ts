const blog = {
  name: "blog",
  title: "Blog",
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
      name: "name",
      title: "Name",
      type: "string",
      group: "content"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      group: "content"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ],
      group: "content"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "caption", title: "Caption", type: "string" },
            { name: "alt", title: "Alternative Text", type: "string" },
          ]
        },
        { type: "code" }
      ],
      group: "content"
    },
    {
      name: 'seoTitle', 
      title: 'SEO Title', 
      type: 'string', 
      group: 'seo'
    },
    {
      name: 'seoKeywords', 
      title: 'SEO Keywords', 
      type: 'string', 
      group: 'seo'
    },
    {
      name: 'seoSlug', 
      title: 'SEO Slug', 
      type: 'slug', 
      group: 'seo'
    },
    {
      name: 'seoImage', 
      title: 'SEO Image', 
      type: 'image', 
      group: 'seo'
    },
  ]
}

export default blog;