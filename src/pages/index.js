import styles from './index.css';

export default () => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="/users">/users</a></li>
        <li><a href="/users/list">/users/list</a></li>
      </ul>
    </div>
  );
}
