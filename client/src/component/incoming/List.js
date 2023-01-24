import React,{useEffect} from 'react'
import BtnDelete from "../utility/BtnDelete";
import BtnEdit from "../utility/BtnEdit";
import  Table  from "./Table";
import { incomingStore } from "../../zustand/incoming";
import Moment from 'react-moment';


const List = ({setid,setshow}) => {
  
  const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap ";
  const act =
    "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  const incomings = incomingStore((state) => state.incomings);
  const loading = incomingStore((state) => state.loading);
  const getIncoming = incomingStore((state) => state.getIncoming);
  const deleteIncoming = incomingStore((state) => state.deleteIncoming);
  

  useEffect(() => {
    getIncoming();
  }, [getIncoming]);

  return (
    <div className='w-auto grid mx-auto' >
      <Table
        element={
          <>
            {incomings?.reverse().map((a, index) => (
              <tr key={a._id}>
                <td className={tr}> {index + 1} </td>
                <td className={tr}> <Moment date={a.date} format="MMM-DD-YYYY"/> </td>
                <td className={tr}> {a.supplier} </td>
                <td className={tr}> {a.name} </td>
                <td className={tr}> {a.quantity} </td>
                {/* <td className={tr}> {a._id} </td> */}
                <td className={act}>
                  <BtnEdit
                    loading={loading}
                    onClick={() => {
                      setid(a._id);
                      setshow(true);
                      window.scroll(0,0);
                    }}
                  />
                  <BtnDelete
                    loading={loading}
                    onClick={() => {
                      deleteIncoming(a._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </>
        }
      />
    </div>
  )
}

export default List
