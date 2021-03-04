import React, { useEffect, useState } from "react";
import "./App.css";

import { getTokenFromUri } from "./spotify";

import Login from "./Containers/Login/Login";

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash = getTokenFromUri();
    console.log("Hash: ", hash);
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
