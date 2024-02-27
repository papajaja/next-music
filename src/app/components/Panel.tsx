import React from "react";
import styles from "../styles/wrapper.module.scss";

const Panel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.navigate}>
        <a href="/" className={styles.nav_btn}>
          Главная
        </a>
        <a href="/search" className={styles.nav_btn}>
          Поиск
        </a>
      </div>
      <div className={styles.playlists}>
        <div className={styles.playlists_header}>
          <button className={styles.playlists_title}>Моя медиатека</button>
          <button className={styles.playlists_add}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Panel;

// история поиска
// понравившееся
// ++ скрыть
// подгрузка компнентов +- loading, использовать стейт
