const work = {
  name: "work",
  title: "Work Experience",
  type: "document",
  fields: [
    {
      name: "role",
      title: "Role",
      type: "string"
    },
    {
      name: "company",
      title: "Company",
      type: "string"
    },
    {
      name: "companyIcon",
      title: "Company Icon",
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
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
        calendarTodayLabel: "Today"
      }
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
        calendarTodayLabel: "Today"
      }
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "techStacks",
      title: "Tech Stacks",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }]
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "project" }
          ]
        }
      ]
    }
  ]
}

export default work;