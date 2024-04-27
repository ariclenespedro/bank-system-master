"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from 'date-fns'; //lidar com o formato da data

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTransictionClient } from "@/redux/account/accountActions";

interface props {
    params: any;
    getTransictionClient: Function;
    account: {transiction_data: Object,loading:boolean,error:object} | any;
  }


const PaymentReferencesDetails:React.FC<props> = ({
    params,
    getTransictionClient,
    account: { transiction_data, loading, error },
}) =>  {


    const [DataTransiction, setDataTransiction] = useState<any | null>({
        transiction: loading === true ? [] : transiction_data?.data
      })
    
        useEffect(() => {
            async function fetchData() {
            await getTransictionClient(params.id_reference);
            }
        
            let DataLocalTransiction = {
            transiction: loading === true ? [] : transiction_data?.data
            };
        
            let obj_DataLocalTransiction = JSON.stringify(DataLocalTransiction);
            localStorage.setItem('dataLocalTransiction',obj_DataLocalTransiction);
            const get_obj_DataLocalTransiction = JSON.stringify(localStorage.getItem('dataLocalTransiction'));
        
            setDataTransiction({
            transiction: transiction_data?.payload?.data ?  transiction_data.payload?.data : get_obj_DataLocalTransiction 
            });
        
            fetchData();
        }, [getTransictionClient]);
    
        console.log(DataTransiction);

        //Caso Ocorra algum erro com as requisições no servidor.
        if(error && (transiction_data === null || DataTransiction === null) ){
            toast.error((error.message === "Network Error" ? "Ups! Parece que você está sem internet" : error.message) ,{
            position: "top-center",
            theme: "dark",
            /* transition: "Bounce", */
            });
        }

    return (
        <>
            <DefaultLayout>
            {/* <p>My ID Page {params.id_reference}</p> */}
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Detalhes do Movimento" />

          <div className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full  rounded-lg border bg-white p-4 shadow sm:p-8 dark:border-strokedark dark:bg-boxdark">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-gray-900 text-xl font-bold leading-none dark:text-white">
                {transiction_data?.data.description}
              </h5>
              
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-gray-200 dark:divide-gray-700 divide-y"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        MONTANTE
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                    {transiction_data?.data.amount} Kzs
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        DATA
                      </p>
                      
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                    {transiction_data? format(new Date(transiction_data?.data.createdAt), 'dd/MM/yyyy HH:mm:ss'): ''}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        NÚMERO DE REFERÊNCIA
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      {transiction_data?.data.n_reference}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        CÓDIGO DA ENTIDADE
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      {transiction_data?.data.entity_id}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        STATUS DO MOVIMENTO
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      {transiction_data?.data.status}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        DESCRIÇÃO DA OPERAÇÃO
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      {transiction_data?.data.description}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end mt-4">
          <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Voltar
            </Link>
          </div>
          
        </div>
            </DefaultLayout>
        </>
   
    )
}

PaymentReferencesDetails.propTypes = {
    getTransictionClient: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state: any) => ({
    account: state.account || {},
  });
  
  export default connect(mapStateToProps, {
    getTransictionClient,
  })(PaymentReferencesDetails);