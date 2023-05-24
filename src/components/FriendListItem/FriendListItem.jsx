import { BsCircleFill } from "react-icons/bs";
import {iconSize} from 'constans';
import {FriendItem, FriendStatus, FriendAvatar, FriendName} from './FriendListItem.styled';

export const FriendListItem = ({ id, isOnline,  avatar, name}) => {
  return (
    <FriendItem>
      <FriendStatus propsStatus={isOnline}>
      <BsCircleFill size={iconSize.sm}/>
        </FriendStatus>
      <FriendAvatar src={avatar} alt={name} width={iconSize.lg} />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
    
