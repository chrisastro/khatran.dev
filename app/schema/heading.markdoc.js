import Markdoc from "@markdoc/markdoc";

// Or replace this with your own function
function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    const id = generateID(children, attributes);

    return new Markdoc.Tag(
      `h${node.attributes["level"]}`,
      { ...attributes, id },
      children,
    );
  },
};
