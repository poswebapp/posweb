import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

const Good = () => {
  const [id, setid] = useState(null);
  const [data, setdata] = useState({
    name: "",
    stock: "",
    unit: "",
    price: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen grid pt-20">
      <Form currentId={id} data={data} onChange={handleChange} />
      <List setid={setid} />
    </div>
  );
};

export default Good;
