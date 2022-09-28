import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { posts: data },
    };
  } catch (error) {
    console.log(error);
  }
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="this is posts page" />;
      <ul>
        {posts.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
