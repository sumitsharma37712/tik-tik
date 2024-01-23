import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Home from '../../Pages/Home/home';

const RouteError = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>{error.status} | This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>{error.status} | You aren't authorized to see this!</div>;
    }

    if (error.status === 503) {
      return <div>{error.status} | Looks like our API is down!</div>;
    }

    if (error.status === 418) {
      return <div>{error.status} | 🫖</div>;
    }
  }

  return <Home/>
  // <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Something went wrong!</div>;
};

export default RouteError;
