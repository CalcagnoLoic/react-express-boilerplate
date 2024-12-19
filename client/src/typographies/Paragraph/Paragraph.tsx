import { Paragraphs } from "../../definitions";

const Paragraph = ({ kind, content, css }: Paragraphs) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;
    case "span":
      return <span className={css}>{content}</span>;
    default:
      return null;
  }
};

export default Paragraph;
