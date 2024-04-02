"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import { useEffect, useRef, useState } from "react";

import { connect } from "react-redux";
import { getAllDataAccount } from "@/redux/account/accountActions";
import PropTypes from 'prop-types';


const ECommerce: React.FC = ({ 
  getAllDataAccount, 
  account: { account_data, error, loading }}: any) => {

  console.log(account_data);
  

  const [DataAccount, setDataAccount] = useState<any | null>({
    balance: loading === true ? "0" : account_data?.balance,
    currency: loading === true ? "0" : account_data?.currency,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [account] = await Promise.all([
          getAllDataAccount(),
        ]);

        setDataAccount({
          balance: account.payload?.balance || "0",
          currency: account.payload?.currency || "0",
        });

      } catch (error) {
        console.log(error);
      }
     
    }

    // Chama fetchData inicialmente e limpa o intervalo quando o componente for desmontado
    fetchData();
  }, [getAllDataAccount]);

  console.log('teste:',account_data);
  

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7.5">
        
        <CardDataStats title="Saldo Total" total={`${DataAccount?.currency} ${DataAccount?.balance}`} rate="4.35%" levelUp>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>

        </CardDataStats>
        {/* <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <svg
            className="fill-primary dark:fill-white"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
              fill=""
            />
            <path
              d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
              fill=""
            />
          </svg>
        </CardDataStats> */}
      </div>
    </>
  );
};


ECommerce.propTypes = {
  getAllDataAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  account: state.account,
});

export default connect(mapStateToProps, {
  getAllDataAccount,
})(ECommerce);

