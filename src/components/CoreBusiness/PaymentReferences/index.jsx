"use client";
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne'
import React, { useEffect } from 'react'

import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllDataAccount, createPayment } from "@/redux/account/accountActions";

//validate
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
  entity: '',
  amount: '',
  n_reference:'',
}

const PaymentReferences = ({ 
  getAllDataAccount, 
  account: { account_data }}) => {

    const dispatch = useDispatch();
    
    
    useEffect(() => {
      getAllDataAccount();
    }, [getAllDataAccount]);

    const PaymentShema = Yup.object().shape({
      entity: Yup.string().required("Entidade é um campo obrigatório"),
      amount: Yup.number().required("O montante é obrigatório"),
      n_reference: Yup.string().required("O número de referência é obrigatório"),
    });

    const PaymentReferenceForm = useFormik({
      initialValues: initialValues,
      validationSchema: PaymentShema,
      onSubmit: async (values) =>{
        console.log(values);
        dispatch(createPayment(values))
        
        
      }
    })




  return (
    <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Pagamento por referência" />
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
               Dados de pagamento
              </h3>
            </div>
            <form onSubmit={PaymentReferenceForm.handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Conta <span className="text-meta-1">*</span>
                  </label>
                  <input
                    id="account"
                    name='account'
                    type="text"
                    disabled
                    onChange={PaymentReferenceForm.handleChange}
                    placeholder={account_data?.balance}
                    value={account_data?.balance}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Referência <span className="text-meta-1">*</span>
                  </label>
                  <input
                    id="n_reference"
                    name="n_reference"
                    type="text"
                    onChange={PaymentReferenceForm.handleChange}
                    value={PaymentReferenceForm.values.n_reference}
                    placeholder="Digite o número da referência"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {PaymentReferenceForm.errors.n_reference && PaymentReferenceForm.touched.n_reference && (
                    <span className="text-red-600 text-sm">
                      {PaymentReferenceForm.errors.n_reference}
                    </span>
                  )}
                </div>

                <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Entidade <span className="text-meta-1">*</span>
                  </label>
                  <input
                  id='entity'
                  name='entity'
                    type="text"
                    onChange={PaymentReferenceForm.handleChange}
                    value={PaymentReferenceForm.values.entity}
                    placeholder="Digite o número da Entidade"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {PaymentReferenceForm.errors.entity && PaymentReferenceForm.touched.entity && (
                    <span className="text-red-600 text-sm">
                      {PaymentReferenceForm.errors.entity}
                    </span>
                  )}
                </div>
                <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Montante <span className="text-meta-1">*</span>
                  </label>
                  <input
                    id='amount'
                    name='amount'
                    type="number"
                    placeholder=""
                    onChange={PaymentReferenceForm.handleChange}
                    value={PaymentReferenceForm.values.amount}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {PaymentReferenceForm.errors.amount && PaymentReferenceForm.touched.amount && (
                    <span className="text-red-600 text-sm">
                      {PaymentReferenceForm.errors.amount}
                    </span>
                  )}
                </div>


                <button type='submit' className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Confirmar 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  )
}

PaymentReferences.propTypes = {
  getAllDataAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>({
  account: state.account || {},
});

export default connect(mapStateToProps,{
  getAllDataAccount,
}) (PaymentReferences);
