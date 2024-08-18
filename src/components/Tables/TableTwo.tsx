import Image from "next/image";
import { Transiction } from "@/types/Transiction";
import React from "react";
import { format } from 'date-fns'; //lidar com o formato da data
import { useRouter } from 'next/navigation';

import Link from 'next/link'

interface TableDataStatsProps {
  transitionData: Array<Transiction>;
}


const TableTwo: React.FC<TableDataStatsProps> = ({transitionData}) => {

  const router= useRouter();
  const data = transitionData || [];
  console.log(data);

  // para listar por ordem de entrada
  const dataInvertida = transitionData ? [...transitionData].reverse() : [];

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          MOVIMENTOS
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2  flex items-center">
          <p className="font-medium">DESCRITIVO</p>
        </div>
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">MONTANTE</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">SALDO APÓS MOVIMENTO</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">DATA TRANSAÇÃO</p>
        </div>
        <div className="col-span-1 flex items-center">
          ACÇÕES
        </div>
      </div>

      {dataInvertida.map((transiction, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>

              </div>
              <p className="text-sm text-black dark:text-white">
                {transiction.description}
              </p>
            </div>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
            Kzs {transiction.amount}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              Kzs {transiction.balance_after}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">{transiction? format(new Date(transiction?.createdAt), 'dd/MM/yyyy HH:mm:ss'): ''}</p>
          </div>
          <div className="col-span-1 flex items-center " onClick={()=> router.push(`/transictions/${transiction._id}`)}>
            <Link href={`#`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
