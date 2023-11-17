import { PropsWithChildren } from "react";
import HeadLayout from "./head";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <HeadLayout />
      <main className="layout_main">{children}</main>
    </>
  );
}
