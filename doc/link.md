## 在页面间跳转
在 umi 里，页面之间跳转有两种方式：声明式和命令式。

### 声明式
基于 umi/link，通常作为 React 组件使用。
把 /src/pages/index.js 改成
```
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
      </ul>
    </div>
  );
}
```

### 命令式
基于 umi/router，通常在事件处理中被调用。
添加 /src/pages/link/a.js
```
import router from 'umi/router';

export default () => {
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/link/a.js</code> and save to reload.</li>
        <li onClick={() => {
          router.push('/')
        }}> onClick 用router.push 到 首页 </li>
        <li onClick={() => {
          router.push('/users/2?page=1&limit=1')
        }}> onClick 用router.push 到 /users/2?page=1&limit=1 </li>
        <li onClick={() => {
          router.push({
            pathname: '/users/2',
            query: {
              page: 1,
              limit: 1,
              other: 3
            }
          })
        }}> onClick 用router.push 到 /users/2?page=1&limit=1 对象模式，还多了一个other的参数 </li>
        <li onClick={() => {
          router.push({
            query: {}
          })
        }}> onClick 用router.push 对象且不包含 pathname 会报错 </li>
        <li onClick={() => {
          router.replace('/users/2?page=1&limit=1')
        }}> onClick 用router.replace 到 /users/2?page=1&limit=1 </li>
        <li onClick={() => {
          router.replace({
            pathname: '/users/2',
            query: {
              page: 1,
              limit: 1,
              other: 3
            }
          })
        }}> onClick 用router.replace 到 /users/2?page=1&limit=1 对象模式，还多了一个other的参数 </li>
        <li onClick={() => {
          router.go(1)
        }}> onClick 用router.go(1) 往前或往后跳指定页数。 </li>
        <li onClick={() => {
          router.go(-2)
        }}> onClick 用router.go(-2) 往前或往后跳指定页数。 </li>
        <li onClick={() => {
          router.goBack()
        }}> onClick 用router.goBack() 后退一页。 </li>
      </ul>
    </div>
  );
}
```