
import Loading from "./loading";
import { JSXElement, Suspense } from "solid-js";
import MainFooter from "~/components/footer/footer";
import { NavbarOperator } from "~/components/navbar/operator-navbar";

export default function KasatLayout({
  children,
}: {
  children: JSXElement;
}) {
  return (
    <>
      <NavbarOperator link={"kasat"} />
      <Suspense fallback={<Loading />}>
        <main class="bg-slate-200 min-h-128 pb-10">{children}</main>
      </Suspense>
      <MainFooter />
    </>
  );
}
