import React from 'react';
import ReactDOM from 'react-dom';
/* import 'modern-normalize/modern-normalize.css'; */
import './index.css';
import App from './App';


/* const user = users; */

/* function User(props) {

  const { avatar, name, tag, location, followers, views, likes } = props;

  return (
    <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        class="avatar"
      />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </li>
    </ul>
    </div>
  );
} */


{/* <User
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />, */}

ReactDOM.render(<App />, document.querySelector('#root'));


/* 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

