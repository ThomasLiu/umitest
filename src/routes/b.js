

export default (props) => {
  console.log(props)
  return (
    <div>
      <h3>this is /src/routes/b.js</h3>
      { props.children }
    </div>
  )
}