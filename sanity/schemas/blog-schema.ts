const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO"
    }
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
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
      ]
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
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