import React, { Component } from 'react'
import ChatInput from '../ChatInput/ChatInput';
import ChatMessage from '../ChatMessage/ChatMessage';
import './Chat.scss';

export default class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      myID : 1,
      chatList : [
        {
          id:1,
          userID: 1,
          profileurl: "",
          username: "DIEPE ANGELO",
          message: "Hello everyone",
          fileurl:"",
          audio:"",
          filename:"",
          filetype:"",
          isTeacher: false,
          date: "5:00 PM"
        },
        {
          id:3,
          userID: 2,
          profileurl: "",
          username: "MOPI GAETAN",
          message: "yes bezzos",
          fileurl:"",
          audio:"",
          filename:"",
          filetype:"",
          isTeacher: false,
          date: "5:04 PM"
        },
        {
          id:4,
          userID: 4,
          profileurl: "",
          username: "MR. CHIMI",
          message: "Good Morning",
          fileurl:"",
          audio:"",
          filename:"",
          filetype:"",
          isTeacher: true,
          date: "5:30 PM"
        },
      ]
    }
  }
  render() {
    return (
      <div id="chat-container">
        {this.state.chatList.map(chat=>
        <ChatMessage
          key={chat.id}
          {...chat}
         identity={chat.isTeacher?"teacher":chat.userID===this.state.myID?"me":"others"} 
         />)}
        <ChatInput/>
      </div>
    )
  }
}
