import React,{useEffect} from 'react'
import BtnDelete from "../utility/BtnDelete";
import BtnEdit from "../utility/BtnEdit";
import  Table  from "./Table";
import { goodStore } from "../../zustand/good";


const List = ({setid,setshow}) => {
  
  const tr = "px-6 py-4 text-sm font-medium text-gray-800";
  const act =
    "px-6 py-4 text-sm font-medium text-gray-800 whitespace-wrap flex flex-rows gap-2";
  const list = goodStore((state) => state.goods);
  const loading = goodStore((state) => state.loading);
  const getGood = goodStore((state) => state.getGood);
  const deleteGood = goodStore((state) => state.deleteGood);
  

  useEffect(() => {
    getGood();
  }, [getGood]);

  return (
    <div className='w-auto grid mx-auto' >
      <Table
        element={
          <>
            {list?.map((a, index) => (
              <tr key={a._id}>
                <td className={tr}> {index + 1} </td>
                <td className={tr}> {a.name} </td>
                <td className={tr}> {a.type} </td>
                <td className={tr}> {a.stock} </td>
                <td className={tr}> {a.unit} </td>
                <td className={tr}> {a.price} </td>
                <td className={tr}> {a._id} </td>
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
                      deleteGood(a._id);
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
