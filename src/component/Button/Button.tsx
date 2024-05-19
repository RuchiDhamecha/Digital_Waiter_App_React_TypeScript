import styles from "./Button.module.scss"; 
import { ButtonProps } from "./Button.types.ts" 
 
const Button = ({btnname,onClick}: ButtonProps) => { 
    return(
        <button>{btnname}</button>
    )
} 
 
export default Button 
