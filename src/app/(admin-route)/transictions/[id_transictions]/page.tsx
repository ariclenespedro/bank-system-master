import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Detalhes dos Movimento | Bank Account",
    description:
      "Detalhes dos Movimento",
};


export default function transictionDetalis ({params}:{params:{id_transictions: string } })  {
    return (
        <>
            <DefaultLayout>
                <p>My ID Page {params.id_transictions}</p>
            </DefaultLayout>
        </>   
        
    )
}
