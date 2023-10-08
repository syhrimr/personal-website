const header = {
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "navbar",
      title: "Navigation Bar",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "navbar" }
          ]
        }
      ]
    }
  ]
}

export default header;