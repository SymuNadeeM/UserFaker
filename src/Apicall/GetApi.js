// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const GetApi = () => {
//   const [data, setdata] = useState();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/person")
//       .then((getdata) => setdata(getdata))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       {data.map((xdata) => (
//         <>
//           <p>{xdata.username}</p>
//           <p>{xdata.email}</p>
//         </>
//       ))}
//     </div>
//   );
// };

// export default GetApi;
