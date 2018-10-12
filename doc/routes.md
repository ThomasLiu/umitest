
## 构建约定式路由

### 基础路由
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
把 /pages/users/index.js 改成
```
export default () => {
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/users/index.js</code> and save to reload.</li>
      </ul>
    </div>
  );
}
```
把 /pages/users/list.js 改成
```
export default () => {
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/users/list.js</code> and save to reload.</li>
      </ul>
    </div>
  );
}
```


### 动态路由
在 pages 目录下添加
```
+ pages/
  + $post/
    - index.js
    - comments.js
  + users/
    $id.js
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
        <li><a href="/list1/comments">/$post/comments => $post = list1</a></li>
        <li><a href="/list2">/$post/index => $post = list2</a></li>
      </ul>
    </div>
  );
}
```
把 /users/$id.js 改成
```
export default (ctx) => {
  const {match, location} = ctx
  const {params} = match
  const {query} = location
  let $li = ''
  if (query) {
    $li = (
      <li>limit: {query.limit}, page: {query.page} </li>
    )
  }
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/users/$id.js</code> and save to reload.</li>
        <li>$id: {params.id}</li>
        {$li}
        <li>ctx: {JSON.stringify(ctx)}</li>
      </ul>
    </div>
  );
}
```
把 /$post/comments.js 改成
```
export default (ctx) => {
  const {match} = ctx
  const {params} = match
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/$post/comments.js</code> and save to reload.</li>
        <li>$post: {params.post}</li>
        <li>ctx: {JSON.stringify(ctx)}</li>
      </ul>
    </div>
  );
}
```
把 /$post/index.js 改成
```
export default (ctx) => {
  const {match} = ctx
  const {params} = match
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/$post/index.js</code> and save to reload.</li>
        <li>$post: {params.post}</li>
        <li>ctx: {JSON.stringify(ctx)}</li>
      </ul>
    </div>
  );
}
```
把 /users/index.js 改成
```
export default () => {
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/users/index.js</code> and save to reload.</li>
        <li><a href="/users/list">/users/list</a></li>
        <li><a href="/users/1">/users/$id => $id = 1</a></li>
        <li><a href="/users/2">/users/$id => $id = 2</a></li>
        <li><a href="/users/2?page=1&limit=1">/users/2?page=1&limit=1</a></li>
      </ul>
    </div>
  );
}
```

### 嵌套路由
umi 里约定目录下有 _layout.js 时会生成嵌套路由，以 _layout.js 为该目录的 layout 。

比如以下目录结构：
```
+ pages/
  + users/
    - _layout.js
    - $id.js
    - index.js
```
把 /users/_layout.js 改成
```
export default function(props) {
  return (
    <>
      <h3>This is from /users/_layout.js</h3>
      { props.children }
    </>
  );
}
```

### 不同的全局 layout
你可能需要针对不同路由输出不同的全局 layout，umi 不支持这样的配置，但你仍可以在 layouts/index.js 对 location.path 做区分，渲染不同的 layout 。
把 /src/layouts/index.js 改成
```
import styles from './index.css';

function BasicLayout(props) {
  if (props.location.pathname === '/list2') {
    return (
      <div className={styles.normal}>
        <h3>This /src/layouts/index.js if (props.location.pathname === '/list2') </h3>
      { props.children }
      </div>
    );
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children }
    </div>
  );
}

export default BasicLayout;

```

### 404 路由
约定 pages/404.js 为 404 页面，需返回 React 组件。
比如：
```
export default () => {
  return (
    <div>I am a customized 404 page</div>
  );
};
```
注意：开发模式下，umi 会添加一个默认的 404 页面来辅助开发，但你仍然可通过精确地访问 /404 来验证 404 页面。

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
        <li><a href="/list1/comments">/$post/comments => $post = list1</a></li>
        <li><a href="/list2">/$post/index => $post = list2</a></li>
        <li><a href="/123123eee/1234www">/123123eee/1234www => 到umi 默认的404</a></li>
        <li><a href="/404">/404 => 到自定义的 /pages/404.js</a></li>
      </ul>
    </div>
  );
}
```

### 通过注释扩展路由
约定路由文件的首个注释如果包含 yaml 格式的配置，则会被用于扩展路由。
把 /pages/index.js 改成
```
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
```
再 创建
```/src/routes/a.js
export default (props) => {
  console.log(props)
  return (
    <div>
      <h3>this is /src/routes/a.js</h3>
      { props.children }
    </div>
  )
}
```

```/src/routes/b.js
export default (props) => {
  console.log(props)
  return (
    <div>
      <h3>this is /src/routes/b.js</h3>
      { props.children }
    </div>
  )
}
```

### 权限路由
把 /pages/users/list.js 改成
```
/**
 * title: 通过注释扩展路由 tilte 了
 * Routes:
 *  - ./src/routes/a.js
 *  - ./src/routes/privateRoute.js
 *   
 */

export default () => {
  return (
    <div>
      <ul>
        <li>To get started, edit <code>src/pages/users/list.js</code> and save to reload.</li>
      </ul>
    </div>
  );
}
```
添加 /routes/PrivateRoute.js
```
export default (props) => {
  return (
    <div>
      <div>PrivateRoute (routes/PrivateRoute.js) 原本的内容不给看了</div>
    </div>
  );
}
```
