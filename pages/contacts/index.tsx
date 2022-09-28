import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { ContactType } from "../../types";

type TContactsProps = {
  contacts: ContactType[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { contacts: data },
    };
  } catch (error) {
    console.log(error);
  }
};

const Contacts:React.FC<TContactsProps> = ({ contacts }) => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts Page" />
      <ul>
        {contacts.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;
