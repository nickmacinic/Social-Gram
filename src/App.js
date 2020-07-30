import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
    username :"Nick",
    caption :"Yes Sirrrrrr it works imma be rich",
    imageUrl :"https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
    },
    {
      username: "Xenia",
      caption: "This is my dog and i love him so much yes",
      imageUrl: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*"
    }
  ])
  return (
    <div className="App">
      <div className="app__header">
       <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
      </div>
      <h1>Hello</h1>
      {
        posts.map(post => (
          <Post username ={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
    </div>
  );
}

export default App;
