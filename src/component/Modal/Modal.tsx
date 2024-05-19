import { useState } from "react";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types.ts";

const Modal = ({ dish, quantity ,recipe}: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () => {
    return (
      <>
      <div className={styles.ModalWrapper}></div>
      <div className={styles.ModalContainer}>
        <h3 onClick={() => setShowModal(false)}>X</h3>
        <div>
          <h2 className={styles.Heading}>Customer Order</h2>
          <div className={styles.Flex}>
            <span>Order name</span>
            <span>Quantity</span>
          </div>
          <div className={styles.Flex}>
            
            <span>{dish}</span>
            <span>{quantity}</span>
          </div>
          <div>
            <h2 className={styles.Heading}>Recipe:</h2>
            <p>{recipe}</p>
          </div>
        </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div onClick={() => setShowModal(true)} className={styles.Click}>View Order Detail</div>
      {showModal && <MyModal />}
    </>
  );
};

export default Modal;
