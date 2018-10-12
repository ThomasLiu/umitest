
## 构建约定式路由
在 pages 目录下构建以下文件
```
+ pages/
  + users/
    - index.js
    - list.js
  - index.js
```
把 /pages/index.js 改成 
```
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
```
把