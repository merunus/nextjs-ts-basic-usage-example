import { THeadingProps } from "../types";

const Heading: React.FC<THeadingProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
