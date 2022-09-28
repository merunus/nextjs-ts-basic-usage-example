import Heading from "./Heading";
import { ContactType } from "../types";

type TContactInfoProps = {
  contact: ContactType;
};

const ContactInfo: React.FC<TContactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <div>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: {email}</strong>
      </div>
      <div>
        <strong>Address: {`${street}, ${suite}, ${city}, ${zipcode}`}</strong>
      </div>
    </div>
  );
};

export default ContactInfo;
