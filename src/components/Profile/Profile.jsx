import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.cardContainer}>
      <div className={css.profilCard}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsNumber}> {followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsNumber}> {views}</span>
        </li>
        <li className={css.item}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsNumber}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}
