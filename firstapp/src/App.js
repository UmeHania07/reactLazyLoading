import logo from './logo.svg';
import './App.css';
// import Component1 from './Component1';
// import Component2 from './Component2';

// dynamic import ye function run time pr run hoga

import React, { Suspense, lazy, useState } from 'react';
import FetchAPI from './FetchAPI';
const Component1 = lazy(() => import('./Component1'))
const Component2 = lazy(() => import('./Component2'))


function App() {
  const [show , setShow] = useState(true)
  console.log(show)
  return (
    <div className="App">
    {
      show?<h1>Button Show</h1>:null
    }

       {/* <h1>Button Show</h1> */}
      <button onClick={() =>setShow(true)}>Show</button>
      <button onClick={() =>setShow(false)}>Hide</button>

      {/* <h1>Lazy Loading Practice.</h1> */}
      {/* <hr /> */}
      
      {/* kam code k liye  zada load nhi hota  */}
      {/* component1 mai serif ek line ka code tha is liye wo jaldi load hogaya */}
      {/* <Suspense fallback={<div> LOADING......Component1</div>}>
        <Component1 />
      </Suspense> */}
      
     {/* iske liye humy apna chrome ka network slow krna hoga */}
      {/* apni application ko optimize krne k liye use krty hn means k performance achi krne k liye */}
      {/* <Suspense fallback={<div> LOADING.......Component2</div>}>
        <Component2 />
      </Suspense> */}

      {/* <FetchAPI/> */}

    </div>
  );
}

export default App;
