import React from "react";
import Slider from "react-slick";

import calendar from './assets/calendar.svg'
import author from './assets/person.svg'
import view from './assets/eye.svg'
import  {withRouter} from 'react-router-dom'

import './ArticleItem.scss'

const ArticleItem = ({item, history}) => {
  return (
    <div className="articleitem-container" onClick={()=>history.push(`/Article/${item.id}`)}>
      <div className="left-wrapper" style={{ backgroundImage: `url(${item.img_url})` }} >
      </div>
      <div className="right-wrapper">
        <div className="infos">
          <h2>{item.title}</h2>
          <h6>{item.sub_title}</h6>
          <div className="details">
            <div className="left">
              <img src={calendar} alt="publish" />
              <span>{item.date_publish}</span>
            </div>
            <div className="right">
              <span>
                <img src={author} alt="author" />
                <span>By {item.author}</span>
              </span>
              <span className="view">
                <img src={view} alt="views" />
                <span>{item.views}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ArticleItem)
