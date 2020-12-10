import User from './componets/Profile';
import Profile from './componets/Profile'
import users from './user.json';

const user = users;

export default function App() {
    return (
    <div>
        <User
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
    </div>
    );
}