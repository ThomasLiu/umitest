/**
 * title: 通过注释扩展路由 tilte 了
 * Routes:
 *   - ./src/routes/a.js
 *   - ./src/routes/b.js
 */
import Link from 'umi/link';
import styles from './index.css';

export default (ctx) => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><Link to="/users">/users</Link></li>
        <li><Link to="/users/list">/users/list</Link></li>
        <li><Link to="/list1/comments">/$post/comments => $post = list1</Link></li>
        <li><Link to="/list2">/$post/index => $post = list2</Link></li>
        <li><Link to="/123123eee/1234www">/123123eee/1234www => 到umi 默认的404</Link></li>
        <li><Link to="/404">/404 => 到自定义的 /pages/404.js</Link></li>
        <li><Link to="/link/a">/link/a</Link></li>
      </ul>
    </div>
  );
}
