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
    }
  ]
}

export default home;