import React from "react";
// import ImageUpload from "./ImageUpload/index";
import "./App.css";
import Form from "./components/form/Form";
import fireDb from './Firebase'
import banner1 from './assets/banner1.png';


function App() {

  const addOrEdit = obj =>{
    fireDb.child('contacts').push(
      obj,
      err=>{
        if(err)
        console.log(err)
      }
    )
  }
// const main = {
//   background:`url(${banner1})`,
//   width:"100vw"
// }
  return (
    <div className=" container" >
        {/* <ImageUpload /> */}
           <Form addOrEdit={addOrEdit}/>
    </div>
  );
}

export default App;
