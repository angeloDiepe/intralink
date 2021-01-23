import React,{useEffect} from 'react';
import "./Navbar.css";
import menu from "./assets/menu.svg";
import search from "./assets/search.svg";
import profile from "./assets/profile.jpg";
import back from "./assets/back.png";
import twitter from "./assets/twitter.svg";
import discord from "./assets/discord.svg";
import telegramme from "./assets/telegramme.svg";
import vectorBg from "./assets/Taieri.svg";
import pencilGray from "./assets/pencil-gray.png";
import { withRouter } from 'react-router-dom';
import NotifIcon from '../NotifIcon/NotifIcon';

const Navbar = (props) => {
	const showNav = () =>{
		let navSlider = document.querySelector(".navbar-slider");
		navSlider.classList.toggle("navbar-sliding");
	}
	const offExit=()=>{
    window.addEventListener('click',(e)=>{if (e.currentTarget===document.querySelector('.navbar-slider')){
       console.log("hello")}
      })
   }
	return (
		<div id="navbar-wrapper">
			<div id="navbar-container">
				<div id="navbar-logo-wrapper">
					<img src={menu} alt="logo" id="navbar-logo"onClick={()=>showNav()}/>
					<span className="navbar-title">Actualité</span>
				</div>
				<div className="navbar-slider navbar-sliding">
					<div id="navbar-back-container">
						<img src={back} alt="navbar-back" id="navbar-back" onClick={()=>showNav()}/>
					</div>
					<div id="navbar-modify-profile-container" style={{backgroundImage:`url(${vectorBg})`}}>
						<div id="navbar-modify-profile-wrapper">
							<div id="navbar-modify-profile" style={{backgroundImage:`url(${profile})`}}>
								<div id="navbar-modify-profile-pencil-container" onClick={()=>{if(props.changeRoute("profile"))props.modifyProfile()}}>
									<img src={pencilGray} alt="modify-profile-pencil" id="navbar-modify-profile-pencil"/>
								</div>
							</div>
							<span id="user-name">UserName</span>
						</div>
					</div>
					<ul className="navbar-list-wrapper">
						<li className="navbar-list-item"><button className="navbar-link-item" onClick={()=>props.changeRoute("home")}>HOME</button></li>
						<li className="navbar-list-item"><button className="navbar-link-item" onClick={()=>props.changeRoute("discussion")}>DISCUSSION</button></li>
						<li className="navbar-list-item"><button className="navbar-link-item" onClick={()=>props.changeRoute("setting")}>SETTING</button></li>
						<li className="navbar-list-item"><button className="navbar-link-item" onClick={()=>props.changeRoute("help")}>HELP</button></li>
						<li className="navbar-list-item"><button className="navbar-link-item" onClick={()=>props.changeRoute("about")}>ABOUT</button></li>
						<li className="navbar-list-item"><button className="navbar-link-item" onClick={()=>{if(!props.setLoggedIn())props.changeRoute('intro')}} >LOGOUT</button></li>
					</ul>
					<div id="navbar-social-container">
						<img src={twitter} alt="social-twitter" className="social"/>
						<img src={discord} alt="social-discord" className="social"/>
						<img src={telegramme} alt="social-telegramme" className="social"/>
					</div>
					<span id="navbar-version">vBeta</span>
				</div>
				<div id="navbar-right-container">
					<div id="navbar-search-container">
						<input type="search" id="navbar-search-input" placeholder="Search.."  style={{display:"none"}} onFocus={()=>{
							document.getElementById('navbar-search-input')
							.addEventListener('keypress',((e)=>{
								if(e.keyCode===13){
										document.getElementById('navbar-search-icon').style.display="block";
										document.querySelector(".navbar-title").style.display="flex"
										document.getElementById('navbar-search-input').style.display="none";
										}}))}}/>
						<img src={search} alt="search" id="navbar-search-icon" onClick={()=>{
							document.getElementById('navbar-search-icon').style.display="none";
							document.querySelector(".navbar-title").style.display ='none'
							document.getElementById('navbar-search-input').style.display="block";}}/>
					</div>
					<NotifIcon/>
					<div id="navbar-profile-wrapper">
						<div id="navbar-profile-container" style={{backgroundImage:`url(${profile})`}} onClick={()=>props.history.push("/profile")}>
						</div>
					</div>
				</div>
			</div>
			{offExit()}
		</div>
		)
}

export default withRouter(Navbar);