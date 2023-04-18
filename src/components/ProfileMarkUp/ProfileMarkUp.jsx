import PropTypes from 'prop-types';
import styles from './ProfileMarkUp.module.css';
import { useState, useEffect } from 'react';

export const ProfileMarkUp = ({
  user,
  id,
  avatar,
  tweets,
}) => {
  const [followersCount, setFollowersCount] = useState(
    parseInt(localStorage.getItem(`followersCount-${id}`)) || 100500
  );
  const [isFollowed, setIsFollowed] = useState(
    localStorage.getItem(`isFollowed-${id}`) === 'true' || false
  );
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`isFollowing-${id}`) || 'Follow'
  );

  const handleFollowButtonClick = () => {
    if (isFollowing === 'Follow') {
      setFollowersCount((count) => {
        const newCount = count + 1;
        localStorage.setItem(`followersCount-${id}`, newCount);
        return newCount;
      });
      setIsFollowing('Following');
      localStorage.setItem(`isFollowing-${id}`, 'Following');
      localStorage.setItem(`isFollowed-${id}`, true);
    } else {
      setFollowersCount((count) => {
        const newCount = count - 1;
        localStorage.setItem(`followersCount-${id}`, newCount);
        return newCount;
      });
      setIsFollowing('Follow');
      localStorage.setItem(`isFollowing-${id}`, 'Follow');
      localStorage.setItem(`isFollowed-${id}`, false);
    }
    setIsFollowed(!isFollowed);
  };

  useEffect(() => {
    const savedIsFollowed = localStorage.getItem(`isFollowed-${id}`);
    const savedIsFollowing = localStorage.getItem(`isFollowing-${id}`);
    const savedFollowersCount = localStorage.getItem(`followersCount-${id}`);

    if (savedIsFollowed !== null) {
      setIsFollowed(savedIsFollowed === 'true');
    }

    if (savedIsFollowing !== null) {
      setIsFollowing(savedIsFollowing);
    }

    if (savedFollowersCount !== null) {
      setFollowersCount(parseInt(savedFollowersCount));
    }
  }, [id]);

  return (
    <div className={styles.profile}>
      <div className={styles.logo}>
        <img src="./Images/GOIT.png" alt="" className={styles.logo_image} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.fon_images}></div>
      <div className={styles.avatar}>
        <div className={styles.frame}></div>
        <img src={avatar} alt={user} className={styles.avatar_photo} />
        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label_item}>{tweets}</span>
            <span className={styles.label_item}>Tweets</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label_item}>
              {followersCount.toLocaleString('en-US')}
            </span>
            <span className={styles.label_item}>Followers</span>
          </li>
          <button
            className={`${styles.btn} ${isFollowing === 'Follow' ? styles.btn : styles.btn_following
              }`}
            type="button"
            onClick={handleFollowButtonClick}
          >
            {isFollowing}
          </button>
        </ul>
      </div>
    </div>
  );
};

ProfileMarkUp.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.string.isRequired,
};