import MainFooter from "~/components/footer/footer";
import Loading from "./loading";
import { JSXElement, Suspense } from "solid-js";
import { NavbarAdmin } from "~/components/navbar/admin-navbar";

export default function AdminLayout({
  children,
}: {
  children: JSXElement;
}) {
  return (
    <>
      <NavbarAdmin link={"admin"} />
      <Suspense fallback={<Loading />}>
        <main class="bg-slate-200 min-h-128 pb-10">{children}</main>
      </Suspense>
      <MainFooter />
    </>
  );
}
