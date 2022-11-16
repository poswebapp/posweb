export const Table = ({ element }) => {
  const th = "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ";
  return (
    <div className=" bg-white shadow-md rounded-md ml-[23%] flex flex-col mr-[5%] mt-[10%] mb-auto p-2">
      <div className="overflow-x-scroll">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-x-scroll border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className={th}>
                    #
                  </th>
                  <th scope="col" className={th}>
                    name
                  </th>
                  <th scope="col" className={th}>
                    username
                  </th>
                  <th scope="col" className={th}>
                    profile
                  </th>
                  <th scope="col" className={th}>
                    Contact
                  </th>
                  <th scope="col" className={th}>
                    Role
                  </th>
                  <th scope="col" className={th}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">{element}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

