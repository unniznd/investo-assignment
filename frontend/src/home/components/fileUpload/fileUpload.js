import axios from 'axios';
import React,{Component} from 'react';


class FileUpload extends Component {

	state = {
	    selectedFile: null,
        uploading: false,
        code : 0,
        upload : ""
	};
	

	onFileChange = event => {

	    this.setState({ selectedFile: event.target.files[0] });
	};
	

	onFileUpload = async () => {
        const formData = new FormData();

        formData.append("data",this.state.selectedFile);
        console.log("Function called")
        this.setState({uploading:true})
        const response = await axios.post("http://invstobackend.herokuapp.com", formData);
        this.setState({uploading:false, code : response.status})
        if(response.status == 201){
            this.setState({upload:"Successful"})
        }
        else if(response.status == 206){
            this.setState({upload:"Partially successful"})
        }
        else{
            this.setState({upload:"Failed"})
        }
	};
	
	
	render() {
	    return (
            <div>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button class="btn btn-outline-info" onClick={this.onFileUpload}>
                    Upload!
                    </button>
                    {this.state.uploading?<div class="loader"></div>:<div></div>}
                </div>
                {this.state.code != 0 ? 
                
                
                <div>{this.state.upload}</div>
                :<div></div>}
            </div>
	    );
	}
}

export default FileUpload;
