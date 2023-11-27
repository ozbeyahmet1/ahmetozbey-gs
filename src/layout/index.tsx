import { PropsWithChildren } from "react";
import HeadLayout from "./head";
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <HeadLayout />
      <div className="mainWrapper">
        <main className="layout_main"> {children}</main>
      </div>
    </>
  );
}
