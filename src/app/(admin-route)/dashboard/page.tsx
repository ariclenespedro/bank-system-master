import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Principal | Bank Account",
  description: "Bank Account",
};

export default function Home() {
  return (
    <>
      <DefaultLayout >       
        <ECommerce  />
      </DefaultLayout>
    </>
  );
}