import React from 'react'

const NewsItems = (props)=> {
  
    let {title, description, imgUrl, newsUrl} = props;
    return (
      <div>
        
        <div className="card">
  <img src={!imgUrl?"https://static01.nyt.com/images/2022/03/22/arts/22latenight/22latenight-facebookJumbo.png":imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
}

export default NewsItems