import Profile from '../Profile/Profile';
import styles from './App.module.css';
import userData from '../../userData.json';
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';

const App = () => {
  const { username: name, tag, location, avatar: image, stats } = userData;
  return (
    <div className={styles.container}>
      <Profile
        name={name}
        tag={tag}
        location={location}
        image={image}
        stats={stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
