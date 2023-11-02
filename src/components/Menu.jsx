import Link from "next/link";
import styles from "@/components/Menu.module.css";
export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"} prefetch={false}>
            Forside
          </Link>
        </li>
        <li>
          <Link href={"/henry"} prefetch={false}>
            Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}
