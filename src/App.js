

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react'


import JobDescription from './namrata/JobDescription';
import JobInformation from './namrata/JobInformation';
import Cobine from './NehaBhagat1/Cobine';
import Combine from './Vaibhav/Combine'
import Deep from './NehaBhagat1/Deep';
export const queryContext = React.createContext({
  value: '',
  setValue: () => { }
})


function App() {
  const [query, setQuery] = useState('')
  return (
   
    <queryContext.Provider value={{
      value: query,
      setValue: setQuery
    }}>
        <Router>
          <Routes>
          <Route path='/' element = {<Deep/>}/>
            <Route path='/postajob' element = {<Combine/>}/>
            <Route path='/step2' element = {<JobDescription/>}/>
      <Route path= '/jobinformation' element = {<JobInformation/>}/>
      <Route path= '/application' element = {<Cobine/>}/>
      {/* <Route path= '/jobdescription' element = {<JobDescription/>}/> */}

          </Routes>
        </Router>
     
    </queryContext.Provider>
  );
}

export default App;
