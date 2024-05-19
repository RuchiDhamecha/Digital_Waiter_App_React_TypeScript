import styles from "./Header.module.scss"; 
import { HeaderProps } from "./Header.types.ts" 

const Header = ({}: HeaderProps) => { 
    return(
        <header className={styles.Heading}>
            <h2>Food Ordering App</h2>
        </header>
    )
} 
 
export default Header 
