import React,{useState} from 'react'
import {storage} from "../Firebase/index";

function ImageUpload() {
    const [images, setImages] = useState(null);
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(null);
    const handleChange = e=>{
        if(e.target.files[0]){
            setImages(e.target.files[0])
        }
    }
    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${images.name}`).put(images);
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
                .then(url => { setUrl(url)})
            }
        )
    }

    return (
        <div className="center">
          <br/>
          <h2 className="green-text">React Firebase Image Uploader</h2>
          <br/>
          <br/>
        <div className="row">
          <progress value={progress} max="100" className="progress" />
        </div>

        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          onClick={handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br />
        {/* <img
          src={url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        /> */}
      </div>

    )
}

export default ImageUpload
