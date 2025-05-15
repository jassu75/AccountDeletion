import { useState } from "react";
import type { TypeUserLogin } from "./ArtsyWorld.types";
import axios from "axios";

const useDeleteArtsyWorld = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const verifyUser = async (loginData: TypeUserLogin) => {
    try {
      setError(false);
      const headers = {
        "Content-Type": "application/json",
      };
      const axiosOptions = {
        headers: headers,
      };
      const url = "https://tejas-artsymobileapp.wl.r.appspot.com/api/db/login";
      await axios.post(url, loginData, axiosOptions);
      setAuthenticated(true);
    } catch (error) {
      console.log("artsyworld verification error", error);
      setAuthenticated(false);
      setError(true);
    }
  };

  return { authenticated, verifyUser, setAuthenticated, error, setError };
};

export default useDeleteArtsyWorld;
