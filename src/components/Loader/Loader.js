import Loader from "react-loader-spinner";
import styles from './Loader.module.css';

const LoaderPend = () => {
return (
    <Loader 
    className={styles.loader}
    type="ThreeDots"
     color="#3f51b5"
      height={80}
      width={80} 
      timeout={4000}
       />
  )
}

export default LoaderPend

