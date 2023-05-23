import css from './Profile.module.css';
import PropTypes from 'prop-types';
import {Card} from 'components/Profile/Profile.styled'

export const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <Card>
      <div className={css.description}>
        <img
          src={
            avatar ?? 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          alt={tag}
          className={css.avatar}
        />
        <p className={css.name}>
          <b>{username}</b>
        </p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </Card>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
