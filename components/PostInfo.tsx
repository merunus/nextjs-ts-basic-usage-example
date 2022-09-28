import { Post } from "../types";
import Heading from "./Heading";

type TPostInfoProps = {
  post: Post;
};

const PostInfo: React.FC<TPostInfoProps> = ({ post }) => {
  return (
    <>
      <Heading tag="h2" text={post.title} />
      <Heading tag="h4" text={post.body} />
    </>
  );
};

export default PostInfo;
