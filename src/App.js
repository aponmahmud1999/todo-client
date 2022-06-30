
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './Component/AddTask/AddTask';
import { MyApp } from './Component/Calendar/Calendar';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import OnlyComps from './Component/Home/OnlyComps';
import OnlyTodos from './Component/Home/OnlyTodos';
import Update from './Component/Home/Update';
import Navbar from './Component/Navbar/Navbar';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='calendar' element={<MyApp/>}/>
        <Route path='/todo' element={<OnlyTodos/>}/>
        <Route path='/completed' element={<OnlyComps/>}/>
        <Route path='/addtask' element={<AddService/>}/>
        <Route
          path="update/:id"
          element={
              <Update/>
          }
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
