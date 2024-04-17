import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  const friendStatus = clsx(
    css.friendStatus,
    isOnline ? css.online : css.offline
  );
  return (
    <div className={css.friendItem}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={friendStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
