import React from "react";

import Layout from "layout";
import Routes from "routes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
