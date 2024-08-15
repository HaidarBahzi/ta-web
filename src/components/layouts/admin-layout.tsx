import MainFooter from "../footer/footer";
import AdminNavbar from "../navbar/admin-navbar";
import { JSX } from "solid-js";

export default function AdminLayout(props: { children: JSX.Element }) {
  return (
    <>
      <AdminNavbar />
      {props.children}
      <MainFooter />
    </>
  );
}
