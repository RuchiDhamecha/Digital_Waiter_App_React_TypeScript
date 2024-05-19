 import {kitchenOrderdata} from '../../pages/KitchenScreen/KitchenScreen.types'
 
 export interface KitchenOrderListProps {
    data:kitchenOrderdata[]
    onclickbutton:(id:number)=>void
    btnname:string
 } 
