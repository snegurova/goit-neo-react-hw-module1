import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileTop}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt="User avatar" />
        </div>

        <p className={styles.name}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className={styles.statsItem}>
            <span className={styles.statsTitle}>{key}</span>
            <span className={styles.statsValue}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
