export type THeadingProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
};

export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type ContactType = {
  id: string;
  name: string;
  email: string;
  address: addressType;
};

export type Post = {
  title: string;
  body: string;
};

export type Social = {
  id: number;
  icon: string;
  path: string;
};
