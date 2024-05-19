import Header from "../../layout/Header/Header.tsx";
import styles from "./KitchenScreen.module.scss";
import { KitchenScreenProps, kitchenOrderdata } from "./KitchenScreen.types.ts";
import { useState, useEffect } from "react";
import KitchenOrderList from "../../component/KitchenOrderList/KitchenOrderList.tsx";
import { TableData } from "../../services/auth.ts";
import { orderData } from "./orderData.ts";

const KitchenScreen = ({}: KitchenScreenProps) => {
  const [toggle, setToggle] = useState(1);
  const updateToggle = (id: number) => {
    setToggle(id);
  };

  const oneTab = toggle === 1 ? styles.ShowContent : styles.Content;
  const twoTab = toggle === 2 ? styles.ShowContent : styles.Content;

  const [kitchenOrder, setKitchenOrder] = useState<kitchenOrderdata[]>([]);

  const getdata = async (): Promise<void> => {
    try {
      const response = await TableData();
      console.log(response);
      // setKitchenOrder(response)
      setKitchenOrder(orderData);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  function onclickbutton(id: number) {
    setKitchenOrder(
      kitchenOrder.map((order) =>
        order.tableId === id
          ? { ...order, isNewOrder: !order.isNewOrder }
          : order
      )
    );
  }

  const onDeleteButton = (id: number) => {
    setKitchenOrder(kitchenOrder.filter((f) => f.tableId !== id));
  };

  const allorder = kitchenOrder.filter((order) => order.isNewOrder);
  const startedorder = kitchenOrder.filter((order) => !order.isNewOrder);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div className={styles.KitchenScreen}>
          <ul className={styles.Tabs}>
            <li className={styles.Heading} onClick={() => updateToggle(1)}>
              New Orders
            </li>
            <li className={styles.Heading} onClick={() => updateToggle(2)}>
              Started Orders
            </li>
          </ul>

          <div className={oneTab}>
            <KitchenOrderList
              data={allorder}
              onclickbutton={onclickbutton}
              btnname="Start Cooking"
            />
          </div>

          <div className={twoTab}>
            <KitchenOrderList
              data={startedorder}
              onclickbutton={onDeleteButton}
              btnname="Complete"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenScreen;
