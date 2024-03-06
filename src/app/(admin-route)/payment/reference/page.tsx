import LayoutDefault from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pagamentos por referencia",
    description:
      "Pagamentos",
};


 const PaymentReference = () => {

    return (
        <LayoutDefault>
            <div className="mx-auto max-w-242.5">
            <Breadcrumb pageName="Pagamento por referência" />
            </div>
        </LayoutDefault>
        
            
        
    )
}

export default PaymentReference;