'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { getTransictionClient } from "@/redux/account/accountActions";
import React, { useEffect } from "react";

import PropTypes from 'prop-types';
import { connect } from "react-redux";

interface props {
  params: {id_transaction: string};
  getTransictionClient:any;
}

const transictionDetalis : React.FC = ({ getTransictionClient, params, account: { transiction_data,loading, error } }: any) =>  {



  useEffect(() => {

    async function fetchData(){
      await getTransictionClient(params.id_transictions);  
    }
    

    
  fetchData();
  }, [getTransictionClient]);

  console.log(transiction_data)

  return (
    <>
      <DefaultLayout>
        <p>My ID Page {params.id_transictions}</p>
        <div className="mx-auto max-w-242.5">
          <Breadcrumb pageName="Detalhes do Movimento" />

          <div className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full  rounded-lg border bg-white p-4 shadow sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-gray-900 text-xl font-bold leading-none dark:text-white">
                Latest Customers
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-gray-200 dark:divide-gray-700 divide-y"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 truncate text-sm">
                        email@windster.com
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      $320
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"> */}
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        Bonnie Green
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 truncate text-sm">
                        email@windster.com
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      $3467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"> */}
                    </div>
                    <div className="ms-4 min-w-0 flex-1">
                      <p className="text-gray-900 truncate text-sm font-medium dark:text-white">
                        Michael Gough
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 truncate text-sm">
                        email@windster.com
                      </p>
                    </div>
                    <div className="text-gray-900 inline-flex items-center text-base font-semibold dark:text-white">
                      $67
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}


transictionDetalis.propTypes = {
  getTransictionClient: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  account: state.account || {},
});

export default connect(mapStateToProps, {
  getTransictionClient,
})(transictionDetalis);
