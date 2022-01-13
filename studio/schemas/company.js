import { StarIcon } from "@sanity/icons";

export default {
  name: "company",
  title: "Company",
  type: "document",
  icon: StarIcon,
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
  ],
};
