// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Container-wrapper/wrapper';
// import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Main />
      {/* <Routes>
        <Route path="/descripton" element={<Description setTodos={setTodos}/>} />
        <Route path="*" element={<List todos={list}/>} />
      </Routes> */}
    </>
  );
}

export default App;