import styles from './Button.module.scss'

const Button = ({text}) => {
  return ( 
    <button className={styles.buttonContainer}>
      {text}
    </button>
   );
}
 
export default Button;