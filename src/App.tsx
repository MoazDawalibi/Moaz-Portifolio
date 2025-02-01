import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Ui/Layout';
import { routes } from './config/Routes';
import Loading from './Components/Loading/Loading';
import useDisableShortcutsAndRightClick from './Hooks/useDisableShortcutsAndRightClick';

const App = () => {
  // useDisableShortcutsAndRightClick()
  return (
    <Routes>
      {routes.map((route:any) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<Loading />}>
              {route.withLayout ? <Layout>{route.element}</Layout> : route.element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
