import PropTypes from 'prop-types';
import css from './friends.module.css';


const getStatusClassName = (isOnline) => {
  return isOnline ? css.online : css.offline;
};

export const FriendList = ({ friends }) => {
  
  return (
    <ul className={css.friendsList}>
      {friends.map(friends => {
        const { avatar, name, id, isOnline } = friends;
        return (
          <li className={css.item} key={id}>
            {/* isOnline */}
            <span className={css.status}>
              <span className={css.status + ' ' + getStatusClassName(isOnline)}></span>
            </span>
            <img src={avatar} alt={name} className={css.avatar} />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList