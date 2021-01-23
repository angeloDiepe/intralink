import React, { Component } from 'react'
import BackNavbar from '../../Components/BackNavbar/BackNavbar'
import share from "./assets/share.svg"
import calendar from './assets/calendar.svg'
import author from './assets/person.svg'
import view from './assets/eye.svg'
import './Article.scss'

let article = {
  id: 3,
  img_url: "https://source.unsplash.com/random/?computer,1,web",
  title: "Web Development",
  sub_title: "How to create a responsive design",
  views: 15,
  author: "Angelo",
  date_publish: "21/12/2020",
}
const Article = (props) =>{
  console.log(props)
    return (
      <div id="article-wrapper">
        <BackNavbar goto="" text="Suivant"/>
        <div id="article-container">
          <div id="header-image-container" style={{ backgroundImage: `url(${article.img_url})` }}>
            <span id="share"><img src={share} alt="share icon"/></span>
          </div>
          <div id="desc-body-wrapper">
            <div id="desc">
                <h2>{article.title}</h2>
                <h6>{article.sub_title}</h6>
                <div className="details">
                  <div className="left">
                    <img src={calendar} alt="publish" />
                    <span>{article.date_publish}</span>
                  </div>
                  <div className="right">
                    <span>
                      <img src={author} alt="author" />
                      <span>By {article.author}</span>
                    </span>
                    <span className="view">
                      <img src={view} alt="views" />
                      <span>{article.views}</span>
                    </span>
                  </div>
                </div>
            </div>
            <div id="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, tellus id dapibus semper, diam ex malesuada magna, nec placerat mi tortor at orci. Morbi vehicula rutrum tempor. Proin et eros bibendum, fermentum arcu in, finibus enim. Vivamus eleifend metus libero, eu rutrum erat dignissim finibus. Aliquam erat volutpat. Quisque egestas arcu vitae consectetur porttitor. Mauris eu arcu rutrum, consectetur est id, placerat felis. Aenean lacinia erat ut dictum luctus. Mauris fringilla risus ac condimentum pretium. Donec facilisis, sapien eget sollicitudin maximus, ligula nibh sollicitudin enim, et egestas arcu lectus sed dolor. Sed dui nulla, porttitor non semper a, vestibulum sed nulla. Nam vulputate metus eget sem cursus blandit. Curabitur quis lacus a purus interdum facilisis.

              Donec ac ullamcorper lectus. Duis ac nibh scelerisque, malesuada dui sed, sagittis nulla. Pellentesque consectetur tristique quam nec venenatis. Vestibulum vel mauris id arcu cursus porta. Phasellus sagittis, ipsum eu pellentesque lacinia, purus nulla ultrices odio, id facilisis metus ante eu enim. Proin eu massa odio. Sed consequat ligula sit amet varius viverra. Aliquam pellentesque tortor et eleifend maximus.

              Nullam imperdiet condimentum dui, non gravida odio congue nec. Phasellus sit amet sollicitudin leo. Phasellus vel lorem scelerisque, rutrum nisl at, fringilla dui. Donec metus leo, pellentesque vulputate arcu et, auctor consectetur lacus. Nulla et orci eu est ornare dapibus. Ut a vulputate nisi. Nullam ac orci eget tortor faucibus molestie. Ut eget semper orci, eu accumsan mauris. Quisque id dictum turpis, nec gravida quam. Fusce tempus, felis vitae gravida maximus, erat sem finibus est, at consequat elit risus at elit. Vivamus felis risus, hendrerit in arcu sed, consectetur varius massa. Curabitur feugiat sodales ante vitae tincidunt. Quisque pellentesque gravida metus, ut elementum dui efficitur sed. Morbi ac lobortis risus.
            </div>
          </div>
        </div>
      </div>
  )
}

export default Article;