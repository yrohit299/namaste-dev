import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './components/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import MenuListing from './components/MenuListing';

// JSX => Babel transpiles it to create.ReactElement => create.ReactElement-JS object => HTMLElement(render)

const AppComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <BodyContainer />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:id',
        element: <MenuListing />
      }
    ]
  }
])

// React Components
// Class based components - OLD way
// function based components - NEW

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

// root.render(<AppComponent />);
