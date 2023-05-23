import css from './FriendListItem.module.css'
import { BsCircleFill } from "react-icons/bs";
import {iconSize} from 'constans'

export const FriendListItem = ({ id, isOnline,  avatar, name}) => {
  return (
    <li className={css.item} >
      <span className={css.status}>
        {isOnline ? <BsCircleFill className='icon' size={iconSize.sm} color='green'/>: <BsCircleFill className='icon' size={iconSize.sm} color='red'/>}</span>
      <img className={css.avatar} src={avatar} alt={name} width={iconSize.lg} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
    
