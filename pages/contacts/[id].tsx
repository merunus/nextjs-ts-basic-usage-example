import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { GetServerSideProps } from "next";
import { ContactType } from "../../types";

type TContactProps = {
  contact: ContactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { contact: data },
    };
  } catch (error) {
    console.log(error);
  }
};

const Contact: React.FC<TContactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />;
    </>
  );
};

export default Contact;
