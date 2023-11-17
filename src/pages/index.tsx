import Layout from "@/layout";
import Homepage from "@/views/homepage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}
