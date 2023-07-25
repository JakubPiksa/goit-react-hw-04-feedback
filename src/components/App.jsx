import './App.css';
import user from './user/user.json';
import friendsData from './friends/friends.json';
import data from './data/data.json';
import transactionsData from './transactions/transactions.json';
import { Profile } from './user/user.jsx';
import { FriendList } from './friends/friends.jsx';
import { Statistics } from './data/data.jsx';
import { TransactionHistory } from './transactions/transactions.jsx';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
}

export default App;