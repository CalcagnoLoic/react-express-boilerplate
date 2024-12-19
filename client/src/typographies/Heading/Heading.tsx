import { Headings } from "../../definitions";

const Heading = ({ kind, content, css }: Headings) => {
  switch (kind) {
    case "h1":
      return <h1 className={css}>{content}</h1>;
    case "h2":
      return <h2 className={css}>{content}</h2>;
    case "h3":
      return <h3 className={css}>{content}</h3>;
    default:
      return null;
  }
};

export default Heading;
