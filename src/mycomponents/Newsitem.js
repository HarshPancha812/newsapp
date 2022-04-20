import React, { Component } from "react";

export class Newsitem extends Component {
  
  render() {
    let {title,desc,imageUrl,url,author,date,source} = this.props
    return (
        
      <div className="card">
          <span style={{left:'85%',zIndex:'1'}} class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
    {source}
  
  </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          {desc}
          </p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={url} className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
