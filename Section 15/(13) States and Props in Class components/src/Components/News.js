import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>Headlines</h2>
          <div className='row'>
            <div className='col-md-4'>
              <NewsItems title="myTitle" description="myDescription" imgUrl="https://images.wsj.net/im-508308/social"/>
            </div>
            <div className='col-md-4'>
              <NewsItems title="myTitle" description="myDescription"/>
            </div>
            <div className='col-md-4'>
              <NewsItems title="myTitle" description="myDescription"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News