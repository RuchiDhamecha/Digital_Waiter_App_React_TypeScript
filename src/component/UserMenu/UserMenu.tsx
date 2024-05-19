import styles from "./UserMenu.module.scss"; 
import { UserMenuProps } from "./UserMenu.types.ts" 
 
const UserMenu = ({name,price,ingredients,foodImg,cartSize}: UserMenuProps) => { 
    return(
        <>
            <div className={styles.Menu}>
                <div>
                    <img src={foodImg} alt="" />
                </div>
                <div className={styles.SpaceBetween}>
                    <span>{name}</span>
                    <span>Rs. {price}</span>
                </div>
                <div className={styles.SpaceBetween}>
                    <span>Ingredients: </span>
                    <span>{ingredients}</span>
                </div>
                <button onClick={cartSize}>Add To Cart</button>
            </div>
        </>
    )
} 
 
export default UserMenu 
