import users from '../users.json';
import { useState, useEffect } from 'react';
import styles from './Profile.module.css';
import { ProfileMarkUp } from 'components/ProfileMarkUp/ProfileMarkUp';

export const Profile = () => {

  const [visibleUsers, setVisibleUsers] = useState([]);
  const [loadMore, setLoadMore] = useState(0);

  useEffect(() => {
    const startIndex = loadMore * 8;
    const endIndex = Math.min(startIndex + 8, users.length);
    const newVisibleUsers = users.slice(0, endIndex);
    setVisibleUsers(newVisibleUsers);
  }, [loadMore]);

  const handleLoadMoreClick = () => {
    setLoadMore(loadMore + 1);
  };

  return (
    <div className={styles.cards}>
      {visibleUsers.map((user) => (
        <ProfileMarkUp
          key={user.id}
          id={user.id}
          user={user.user}
          avatar={user.avatar}
          tweets={user.tweets}
        />
      ))}
      {loadMore * 8 < users.length && (
        <button className={styles.load_more} onClick={handleLoadMoreClick}>Load More</button>
      )}
    </div>
  );
};

