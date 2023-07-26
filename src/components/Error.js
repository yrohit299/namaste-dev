import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Opps!</h1>
      <p>Something went wrong</p>
      <h3 className="error-data">{err.data}</h3>
    </>
  );
};

export default Error;
