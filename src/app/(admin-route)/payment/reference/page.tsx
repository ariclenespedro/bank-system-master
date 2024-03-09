import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PaymentReferences from "@/components/CoreBusiness/PaymentReferences";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pagamentos por referencia",
    description:
      "Pagamentos",
};


export default function PaymentReference ()  {
    return (
        <>
            <DefaultLayout>
            <PaymentReferences/>
            </DefaultLayout>
        </>
        
        
            
        
    )
}
