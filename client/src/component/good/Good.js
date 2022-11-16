import React from "react";

const Good = () => {
  const th = "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ";
 const tr = "px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap" 
  return (
    <div className=" bg-white shadow-md rounded-md ml-[23%] flex flex-col mr-[5%] mt-[10%] mb-auto">
      <div className="overflow-x-scroll">
        <div className=" p-4 w-full inline-block align-middle">
          <div className="overflow-x-scroll border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className={th}>
                    #
                  </th>
                  <th scope="col" className={th}>
                    ID
                  </th>
                  <th scope="col" className={th}>
                    Name
                  </th>
                  <th scope="col" className={th}>
                    Type
                  </th>
                  <th scope="col" className={th}>
                    Stock
                  </th>
                  <th scope="col" className={th}>
                    Unit
                  </th>
                  <th scope="col" className={th}>
                    Price
                  </th>
                  <th scope="col" className={th}>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className={tr}> 1 </td>
                  <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
                  <td className={tr}> Gas </td>
                  <td className={tr}> Regular </td>
                  <td className={tr}> 5 </td>
                  <td className={tr}> 4 </td>
                  <td className={tr}> 100 </td>
                  <td className={tr}> edit, delete </td>
                </tr>
    
                <tr>
                  <td className={tr}> 1 </td>
                  <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
                  <td className={tr}> Gas </td>
                  <td className={tr}> Regular </td>
                  <td className={tr}> 5 </td>
                  <td className={tr}> 4 </td>
                  <td className={tr}> 100 </td>
                  <td className={tr}> edit, delete </td>
                </tr>
    
                <tr>
                  <td className={tr}> 1 </td>
                  <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
                  <td className={tr}> Gas </td>
                  <td className={tr}> Regular </td>
                  <td className={tr}> 5 </td>
                  <td className={tr}> 4 </td>
                  <td className={tr}> 100 </td>
                  <td className={tr}> edit, delete </td>
                </tr>
    
                <tr>
                  <td className={tr}> 1 </td>
                  <td className={tr}> 4e5jsh5dai8aw547bdndn </td>
                  <td className={tr}> Gas </td>
                  <td className={tr}> Regular </td>
                  <td className={tr}> 5 </td>
                  <td className={tr}> 4 </td>
                  <td className={tr}> 100 </td>
                  <td className={tr}> edit, delete </td>
                </tr>
    
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
