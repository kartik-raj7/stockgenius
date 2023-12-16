// AppRouter.js
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from "../services/utilities/router";
import LoaderPage from "../pages/landingpage";
import Layout from "./ui/Layout";
import Loginpage from "../pages/loginpage";
const isAuthenticated = () => {
  return true; // Replace with your actual authentication check
};

const Protected = ({ children }) => {
  const authenticated = isAuthenticated();
  if (!authenticated) {
    return <Navigate to="/login"/>;
  }
  return children;
};

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path='/login' element={<Layout>
                      <Loginpage/>
                  </Layout>}/>
          {routes.map(({ path, component: Component, exact, roles }) => (
            <Route
              key={path}
              path={path}
              element={
                path === "/" ? (
                  <Component roles={roles} />
                ) : (
                  <Layout>
                      <Protected>
                      {<Component roles={roles} />}
                      </Protected>
                  </Layout>
                )
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
