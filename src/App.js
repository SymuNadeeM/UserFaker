import React, { useEffect, useState } from "react";
import axios from "axios";
// import Form from "./Components/Form";
// import FormNormal from "./Components/FormNormal";
// import Schema from "./Components/Schema";
// import SchemaForm from "./Components/SchemaForm";

function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const dataFeatch = async () => {
      setIsLoading(true);
      await axios
        .get("http://localhost:5000/person")
        .then((getdata) => {
          setIsLoading(false);
          setdata(getdata);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    };
    dataFeatch();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const dataget = async () => {
      setIsLoading(true);
      await axios
        .get("http://localhost:5000/person")
        .then((res) => {
          setIsLoading(false);
          setdata(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    };
    dataget();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>
        {/* <Form /> */}
        {/* <FormNormal /> */}
        {/* <h1>From Club</h1>
        <SchemaForm />
        <Schema /> */}
      </div>
      {data?.data?.map((xdata) => (
        <>
          <p>{xdata.username}</p>
          <p>{xdata.email}</p>
        </>
      ))}
    </>
  );
}

export default App;
