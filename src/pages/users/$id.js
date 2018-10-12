

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