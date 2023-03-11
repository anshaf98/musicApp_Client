import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Artists, Browser, Charts, Home, Layout } from "./router";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Browser"
            element={
              <Layout>
                <Browser />
              </Layout>
            }
          />
          <Route
            path="/Charts"
            element={
              <Layout>
                <Charts />
              </Layout>
            }
          />
          <Route
            path="/Artists"
            element={
              <Layout>
                <Artists />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
