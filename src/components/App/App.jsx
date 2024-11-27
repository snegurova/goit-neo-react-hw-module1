import Profile from '../Profile/Profile';
import styles from './App.module.css';
import userData from '../../userData.json';

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
    </div>
  );
};

export default App;
