import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  },)

  return (
    <>
      <section id="notFound"></section>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      {/* <Link to="/" className="btn">
        Back Home
      </Link> */}
    </>
  );
};

export default NotFound;
