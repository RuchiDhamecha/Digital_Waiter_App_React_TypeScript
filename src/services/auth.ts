import axios from "axios";
import { kitchenOrderdata } from "../pages/KitchenScreen/KitchenScreen.types";
import {displayTableData} from '../pages/TableScreen/TableScreen.types'

export const TableData = async()=>{
    const response = await axios.get<kitchenOrderdata>(
        `${import.meta.env.VITE_API_URL}order`,
        {
            headers: {
                "ngrok-skip-browser-warning": "skip-browser-warning",
              },
        }
    );
    return response.data;
}


export const tableScreen = async()=>{
    const tableScreenResponse = await axios.get<displayTableData>(
        `${import.meta.env.VITE_API_URL}table`,
        {
            headers: {
                "ngrok-skip-browser-warning": "skip-browser-warning",
              },
        }
    );
    return tableScreenResponse.data;
    
}