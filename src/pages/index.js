/**
 * title: 通过注释扩展路由 tilte 了
 * Routes:
 *   - ./src/routes/a.js
 *   - ./src/routes/b.js
 */

import styles from './index.css';

export default (ctx) => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="/users">/users</a></li>
        <li><a href="/users/list">/users/list</a></li>
        <li><a href="/list1/comments">/$post/comments => $post = list1</a></li>
        <li><a href="/list2">/$post/index => $post = list2</a></li>
        <li><a href="/123123eee/1234www">/123123eee/1234www => 到umi 默认的404</a></li>
        <li><a href="/404">/404 => 到自定义的 /pages/404.js</a></li>
      </ul>
    </div>
  );
}
