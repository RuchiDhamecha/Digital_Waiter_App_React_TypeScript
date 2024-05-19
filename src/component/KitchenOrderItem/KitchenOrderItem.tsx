import Button from "../Button/Button.tsx";
import Modal from "../Modal/Modal.tsx";
import style from "./KitchenOrderItem.module.scss"; 
import { KitchenOrderItemProps } from "./KitchenOrderItem.types.ts" 
 
const KitchenOrderItem = ({tableno,onclick,btnname,dish,quantity,recipe}: KitchenOrderItemProps) => { 
    return(
        <div className={style.Item} >
           <span>Table No: {tableno}</span>
           <span>
            <Modal dish={dish} quantity={quantity} recipe={recipe}/>
           </span>
           <button onClick={()=>onclick(tableno)}>{btnname}</button>
        </div>
    )
} 
 
export default KitchenOrderItem 
