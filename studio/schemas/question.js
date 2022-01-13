import { EditIcon } from "@sanity/icons";

export default {
  name: "question",
  title: "Question",
  type: "document",
  icon: EditIcon,
  fields: [
    {
      name: "questionTitle",
      title: "Question Title",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
  ],

};
