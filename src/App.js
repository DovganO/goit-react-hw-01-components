import Container from './componets/Container/Container';
import user from './componets/Profile/user.json';
import Profile from './componets/Profile/Profile';
import statisticalData from './componets/Statistics/statistical-data.json';
import StatisticksList from './componets/Statistics/StatisticsList';
import friends from './componets/FriendList/friends.json';
import FriendList from './componets/FriendList/FriendList';
import transactions from './componets/TransactionHistory/transactions.json';
import TransactionHistory from './componets/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticksList title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
