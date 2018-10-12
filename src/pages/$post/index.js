

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