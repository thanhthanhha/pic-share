import React,{useEffect} from 'react';
import { Route, Navigate, useLocation, Outlet} from 'react-router-dom';
import useAuth from './useAuth';


export function UserRedirect({ isLogin, loggedInPath, children, ...rest }) {

  console.log(`user redirect ${isLogin}`);
  if (!isLogin) {
     return children;
   }

  console.log(loggedInPath);

   if (isLogin) {
    return (
      <Navigate
        to={{
          pathname: loggedInPath,
        }}
      />
    );
   }

   return null;
}

export function Protected({ isLogin, children, ...rest }) {
        const location = useLocation();
        console.log(`protect ${isLogin}`);
        if (isLogin) {
          return children;
        }

        if (!isLogin) {
          return (
            <Navigate
              to={{
                pathname: '/signin'
              }}
            />
          );
        }
}

export const RequireAuth = ({isLogin,loading,children,...rest}) => {
  const location = useLocation();
  console.log(`loading ${loading} and login ${isLogin}`);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if(isLogin) {
    return children;
  }

  if (!isLogin) {
    return (
      <Navigate
        to={{ pathname: "/unauthorized", state: { from: location } }}
        replace
      />
    );
  }

  return null;
};