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