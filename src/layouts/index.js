
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
