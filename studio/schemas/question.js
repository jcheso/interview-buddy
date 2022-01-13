import { EditIcon } from "@sanity/icons";

export default {
  name: "question",
  title: "Question",
  type: "document",
  icon: EditIcon,
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "reference",
      to: [{ type: "industry" }],
    },
    {
      name: "role",
      title: "Role",
      type: "reference",
      to: [{ type: "role" }],
    },
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "company" }],
    },
  ],
};
