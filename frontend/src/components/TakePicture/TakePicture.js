import React, { Component } from 'react';
import { ColorExtractor } from 'react-color-extractor'
import { prominent } from 'color.js'
class TakePicture extends Component {
    state = {
        imageURL: '',
        colors: [],
        mainColor: [],
        save: false
    }

    videoEle = React.createRef();
    canvasEle = React.createRef();
    imageEle = React.createRef();
    
    componentDidMount = async () => {
        this.startCamera();
    }

    startCamera = async () => {
        try {
            const stream =  await navigator.mediaDevices.getUserMedia({
                video: true
            });

            this.videoEle.current.srcObject = stream;
            
        } catch(err) {
            console.log(err);
        }
    }


    takeSelfie = async () => {
        // Get the exact size of the video element.
        const width = this.videoEle.current.videoWidth;
        const height = this.videoEle.current.videoHeight;

        // get the context object of hidden canvas
        const ctx = this.canvasEle.current.getContext('2d');

        // Set the canvas to the same dimensions as the video.
        this.canvasEle.current.width = width;
        this.canvasEle.current.height = height;

        // Draw the current frame from the video on the canvas.
        ctx.drawImage(this.videoEle.current, 0, 0, width, height);

        // Get an image dataURL from the canvas.
        const imageDataURL = this.canvasEle.current.toDataURL('image/png');
        this.stopCam();

        this.setState({
            imageURL: imageDataURL
        })
    }

    stopCam = () => {
        const stream = this.videoEle.current.srcObject;
        const tracks = stream.getTracks();
        
        tracks.forEach(track => {
          track.stop();
        });
    }

    backToCam = () => {
        this.setState({
            imageURL: ''
        }, () => {
            this.startCamera();
        })
    }

    saveImage = (e) => {
        e.preventDefault();
        const imageToCheck = this.state.imageURL;
        prominent(imageToCheck, { amount: 1 }).then(color => {
            console.log(color) // [241, 221, 63]
            this.setState({mainColor: color})
        })
        this.setState({
            save: true
        })
    };

      renderSwatches = () => {
    const { colors } = this.state

    return colors.map((color, id) => {
      return (
        <div
          key={id}
          style={{
            backgroundColor: color,
            width: 100,
            height: 100
          }}
        />
      )
    })
  }


    getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))

    render() {
        if (this.state.save === true) {
            return (
                    <div>
                        <ColorExtractor getColors={this.getColors}>
                            <img
                                src={this.state.imageURL}
                                style={{ width: 700, height: 500 }}
                            />
                        </ColorExtractor>
                    </div>)
        }
        else {
            return (
                <div >
                    {this.state.imageURL === '' && <div className="cam">
                        <video width="100%" height="100%" className="video-player" autoPlay={true} ref={this.videoEle}></video>
                        <button className="btn capture-btn" onClick={this.takeSelfie}>
                            <i className="fa fa-camera" aria-hidden="true"></i>
                        </button>
                    </div>
                    }
                    <canvas ref={this.canvasEle} style={{ display: 'none' }}></canvas>
                    {this.state.imageURL !== '' && <div className="preview">
                        <img className="preview-img" src={this.state.imageURL} ref={this.imageEle} />

                        <div className="btn-container">
                            <button className="btn back-btn" onClick={this.backToCam}>
                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </button>
                            <button className="btn download-btn" onClick={this.saveImage}>
                                <i className="fa fa-download" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    }
                </div>)
        }
    }
}

export default TakePicture;


/*

<a href={this.state.imageURL} download="selfie.png" className="btn download-btn">
    <i className="fa fa-download" aria-hidden="true"></i>
</a>

  imageUpload = (e) => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64;
        console.debug("file stored",base64);
      });
  };

  render() {
    return <input 
     type="file" 
     id="imageFile" 
     name='imageFile' 
     onChange={this.imageUpload} />;
  }
}
const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}
*/


