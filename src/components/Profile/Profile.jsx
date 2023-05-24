
import PropTypes from 'prop-types';
import {
  UserCard,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from 'components/Profile/Profile.styled';

export const Profile = ({ avatar, tag, username, location, stats }) => {
  return (
    <UserCard>
      <UserDescription>
        <UserAvatar
          src={
            avatar ?? 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          alt={tag}
        />
        <UserName>
          <b>{username}</b>
        </UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </UserStats>
    </UserCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
