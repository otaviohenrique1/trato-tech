import Header from "components/Header";
import styles from "./Carrinho.module.scss";
import { useSelector } from "react-redux";

export default function Carrinho() {


  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.carrinho}>

      </div>
    </div>
  );
}