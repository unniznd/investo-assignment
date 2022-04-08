import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      loading : false
    };
  }
 
  hello = async () => {
    
    try {
      this.setState({loading:true})
      const { data } = await axios.get('http://invstobackend.herokuapp.com');
      this.setState({ posts: data, loading: false });
      console.log(data);
    } catch(e) {
      this.setState({ loading: false });
      alert('Error retrieving data!!!', e);
    }
  }


  render() {
    return (
      <>
        <h1>
          <button onClick={this.hello} class="btn btn-outline-info">click here to get data</button>
        </h1>
       {this.state.loading ?<div><div class="loader"></div> </div> :
        <div className="blog-">
          
          {this.state.posts.length > 0 ? (
            <div className="blog-post__display">
              <table class="table table-striped table-sm">
                  <tr>
                    <th>DateTime</th>
                    <th>Close</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Open</th>
                    <th>Volume</th>
                    <th>Instrument</th>
                  </tr>
                  {this.state.posts.map((post, index) => (
                    <tr key={index}>
                      <td>{post.datetime}</td>
                      <td>{post.close}</td>
                      <td>{post.high}</td>
                      <td>{post.low}</td>
                      <td>{post.open}</td>
                      <td>{post.volume}</td>
                      <td>{post.instrument}</td>
                    </tr>
                  ))}
              </table>
            </div>  
          ):<div>No data found</div>}
        </div> 
  }  
      </>
    )
  }
}


export default Table;