

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