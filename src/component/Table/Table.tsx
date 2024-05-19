import styles from "./Table.module.scss";
import { TableProps } from "./Table.types.ts";

const Table = ({tableno,available,seatCapacity}: TableProps) => {
  const newstatus = (available === true)? "Available":"Reserved";
  const statusStyle = (available === true)? styles.GreenFont : styles.RedFont;
  return (
    <div className={styles.TableBox}>
      <p>Table No.:</p>
      {/* <h2>{tableNumber}</h2> */}
      <h2>{tableno}</h2> 
      <p>Status:</p>
      <h2 className={statusStyle}>{newstatus}</h2>
      <p>Seats:</p>
      <h2>{seatCapacity}</h2>
    </div>
  );
};

export default Table;
