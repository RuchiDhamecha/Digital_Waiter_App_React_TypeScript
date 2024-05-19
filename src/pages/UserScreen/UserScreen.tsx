import styles from "./UserScreen.module.scss";
import { UserScreenProps } from "./UserScreen.types.ts";
// import { Header, Footer } from '@/layout'
import Header from "../../layout/Header/Header.tsx";
import UserMenu from "../../component/UserMenu/UserMenu.tsx";
import { dishData } from "./dishData.ts";
import foodImg from "../../assets/dish.png";
import { useState } from "react";

const UserScreen = ({}: UserScreenProps) => {
    const [cartItem, setCartItem] = useState(0);
    
    function cartSize(){
        setCartItem( cartItem + 1);
    }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className={styles.Heading}>
          <h2>Menu Card</h2>
          <h4 className={styles.Cart}>Cart: {cartItem}</h4>
        </section>

        <section>
          <div className={styles.MenuItems}>
            {dishData.map((menu, index) => {
              return (
                <UserMenu
                  key={index}
                  dishId={menu.dishId}
                  ingredients={menu.ingredients}
                  name={menu.name}
                  price={menu.price}
                  foodImg={foodImg}
                  cartSize={cartSize}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default UserScreen;
