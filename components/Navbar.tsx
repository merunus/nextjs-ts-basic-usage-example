import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/favicon.ico" alt="logo" width={60} height={60} />
        <h1>NextJS App</h1>
      </div>
      <div className={styles.links}>
        {navigation.map(({ path, id, title }) => {
          return (
            <Link href={path} key={id}>
              <a className={pathname === path ? styles.active : null}>
                {title}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
