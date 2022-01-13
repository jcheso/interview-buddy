import { UserIcon } from "@sanity/icons";

export default {
  name: "role",
  title: "Role",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
