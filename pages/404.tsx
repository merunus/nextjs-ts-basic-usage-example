import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading text="Such page doesn't exist" tag="h2" />
    </div>
  );
};

export default Error;
