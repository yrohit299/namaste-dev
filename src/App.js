import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import BodyContainer from './components/BodyContainer';

// JSX => Babel transpiles it to create.ReactElement => create.ReactElement-JS object => HTMLElement(render)

const AppComponent = () => {
  return (
    <>
      <Header />
      <BodyContainer />
    </>
  );
};

// React Components
// Class based components - OLD way
// function based components - NEW

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppComponent />);
