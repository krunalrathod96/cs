import React,{useState} from 'react'
import {storage} from '../../Firebase/index'
function Form(props) {
  const initialFieldValues={
    fullname:"",
    email:"",
    mobile:"",
    homeNo:"",
    society:"",
    nearBy:"",
    description:"",
    imageURL:""
  }
  const [values, setvalues] = useState(initialFieldValues)
  // uploader states
  const [images, setImages] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(null);
  // uploader states
  // uploader handlechange
  const handleImgChange = e=>{
    if(e.target.files[0]){
        setImages(e.target.files[0])
    }
}

//upload
const handleUpload = () =>{
  const storageRef=storage.ref(`images/${images.name}`);
  const uploadTask = storageRef.put(images);
  uploadTask.on(
      "state_changed",
      snapshot =>{
          // progress function
          const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
      },
      error => {
          //Error function
          console.log(error);
      },
      ()=>{
          // complete function
          storage
          .ref("images")
          .child(images.name)
          .getDownloadURL()
          .then(url => { setUrl(url);
             setvalues({...values, imageURL:url})
            })
      }

  )
}

  // uploader handlechange


  // handleChange
  const handleChange =e =>{
    var {name, value} = e.target;
    setvalues({
      ...values,
      [name]:value
    })
  }
  // handleSubmit
  
  const handleSubmit =e =>{
    e.preventDefault();
    console.log(values)
    handleUpload()
    props.addOrEdit(values)
    console.log(url)
  }

  return (
    <div className="row">
        <div className="orange m10 white-text center" Style="width:100%;">
          <h1>Survey</h1>
        </div>
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
      <div className="input-field  col s12">
          <i className="material-icons prefix">person</i>
          <input id="fullname" type="text" className="validate"
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
          />
          <label htmlFor="fullname">Full Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field  col s6">
          <i className="material-icons prefix">mail</i>
          <input id="email" type="email" className="validate"
          name="email"
          value={values.email}
          onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field  col s6">
          <i className="material-icons prefix">phone</i>
          <input id="mobile" type="tel" className="validate"
          name="mobile"
          value={values.mobile}
          onChange={handleChange}
          />
          <label htmlFor="mobile">Mobile No.</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field  col s6">
          <i className="material-icons prefix">home</i>
          <input id="society" type="tel" className="validate"
          name="society"
          value={values.society}
          onChange={handleChange}
          />
          <label htmlFor="society">Society</label>
        </div>
        <div className="input-field  col s6">
          <i className="material-icons prefix">format_list_numbered</i>
          <input id="homeNo" type="text" className="validate"
          name="homeNo"
          value={values.homeNo}
          onChange={handleChange}          
          />
          <label htmlFor="homeNo">Home No.</label>
        </div>
      </div>
     <div className="row">
     <div className="input-field  col s12">
          <i className="material-icons prefix">directions</i>
          <input id="nearBy" type="text" className="validate"
          name="nearBy"
          value={values.nearBy}
          onChange={handleChange}            
          />
          <label htmlFor="nearBy">Near By Area</label>
        </div>
     </div>


      <div className="row">
        <div className="input-field  col s12">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="description" className="materialize-textarea"
          name="description"
          value={values.description}
          onChange={handleChange}            
          ></textarea>
          <label for="description">Describe Your Problem</label>
        </div>
      </div>


      <div className="file-field input-field ">
          <div className="btn orange">
            <span>Image</span>
            <input className="" type="file" onChange={handleImgChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>

      <div className="center">
      <button className="btn waves-effect waves-light btn-large orange" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
      </div>
        {/* <button className="waves-effect waves-light btn" type="submit" >submit</button> */}
    </form>
  </div>
   )
}

export default Form
/*

onUploadImage () {
  const self = this
  const file = self.selectedFile
  if (!file) {
    return
  }
  self.isUploading = true
  const storageRef = firebase.storage().ref('/images/' + file.name)
  const task = storageRef.put(file)
  task.on('state_changed',
    function progress (snapshot) {
      self.status = 'UPLOADING...'
      self.percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    },
    function error () {
      self.status = 'FAILED TRY AGAIN!'
      self.isUploading = false
    },

    function complete (event) {
      self.status = 'UPLOAD COMPLETED'
      self.isUploading = false
      storageRef.getDownloadURL().then((url) => { console.log(url) })
    }
  )
}
*/