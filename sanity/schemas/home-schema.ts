const home = {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "bannerType",
      title: "Banner Type",
      type: "string",
      initialValue: "intro",
      options: {
        list: [
          { title: "Introduction",  value: "intro" },
          { title: "Work Experiences", value: "work" }
        ]
      }
    },
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "titlePosition",
      title: "Title Position",
      type: "string",
      initialValue: "left",
      options: {
        list: [
          { title: "Left",    value: "left" },
          { title: "Center",  value: "center" },
          { title: "Right",   value: "right" }
        ]
      }
    },
    {
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }: any) => document?.bannerType !== "intro",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "ctaButton",
      title: "CTA Button",
      type: "object",
      fields: [
        { name: "text", title: "Text",  type: "string" },
        { name: "url",  title: "URL",   type: "url" }
      ]
    },
    {
      name: "work",
      title: "Work Experiences",
      type: "array",
      hidden: ({ document }: any) => document?.bannerType !== "work",
      of: [
        {
          type: "reference",
          to: [
            { type: "work" }
          ]
        }
      ]
    }
  ]
}

export default home;