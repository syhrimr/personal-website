const navbar = {
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string"
    },
    {
      name: "url",
      title: "URL",
      type: "string"
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      initialValue: "nav",
      options: {
        list: [
          { title: "Navigation", value: "nav" },
          { title: "Social Media", value: "sns" }
        ]
      }
    },
    {
      name: "snsType",
      title: "Social Media",
      type: "string",
      hidden: ({ document }: any) => document?.type !== "sns",
      initialValue: "linkedin",
      options: {
        list: [
          { title: "LinkedIn", value: "linkedin" },
          { title: "Twitter", value: "twitter" },
          { title: "Github", value: "github" },
          { title: "Notion", value: "notion" }
        ]
      }
    }
  ]
}

export default navbar;