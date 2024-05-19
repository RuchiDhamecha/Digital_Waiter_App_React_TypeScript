import Header from "../../layout/Header/Header.tsx";
import styles from "./TableScreen.module.scss";
import { TableProps, displayTableData } from "./TableScreen.types.ts";
import { useEffect, useState } from "react";
import Table from "../../component/Table/Table.tsx";
import { data } from "./data.ts";
import { tableScreen } from "../../services/auth.ts";

const TableScreen = ({}: TableProps) => {
  const [table, setTable] = useState<displayTableData[]>([]);

  const getdata = async (): Promise<void> => {
    try {
      const tableScreenResponse = await tableScreen();
      // setTable(tableScreenResponse);
      setTable(data);
      console.log(table);
    } catch (error: any) {
      console.log("eerr", error.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className={styles.TableScreen}>
          {data.map((tableItem, index) => {
            return (
              <Table
                key={index}
                tableno={tableItem.tableno}
                available={tableItem.available}
                seatCapacity={tableItem.seatCapacity}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TableScreen;
