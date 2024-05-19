import KitchenOrderItem from "../KitchenOrderItem/KitchenOrderItem.tsx";
import style from "./KitchenOrderList.module.scss"; 
import { KitchenOrderListProps } from "./KitchenOrderList.types.ts" 
 
const KitchenOrderList = (props: KitchenOrderListProps) => {
    return(
        <>
          <div className={style.List}>
            {
                props.data.map((l) => {
                    return (
                        <>
                            <KitchenOrderItem tableno={l.tableId}  onclick={
                                props.onclickbutton} dish={l.dish} quantity={l.quantity} recipe={l.recipe} btnname={props.btnname}/>
                        </>
                    )
                })
            }

            </div >
        </>
    ) 
} 
 
export default KitchenOrderList 
