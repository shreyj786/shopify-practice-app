import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthenticatedFetch } from "../hooks";

export const Topbar = () => {
  const  fetch = useAuthenticatedFetch();
const [storeName, setStoreName] = useState("")
  useEffect( () => {
    storeInfoHandler()
  }, []);

  const storeInfoHandler = async () => {
    try {
      let request = await fetch("/api/store/info", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      let response = await request.json();
      setStoreName(response.data[0].name)
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }

  }

  return (
    <div className="topbar-section">
      <div className="logo-block">
        <img src="../assets/logo.png" className="logo" alt="logo image" />
        <h1 className="text-bold h4">{`${storeName}`}</h1>
        <NavLink to="/">Sales</NavLink>
        <NavLink to="/product">Products</NavLink>
      </div>
    </div>
  );
};
