import styles from "./Header.module.scss";
import PropTypes from 'prop-types';
import TituloSemImagem from "./TituloSemImagem";
import TituloComImagem from "./TituloComImagem";

export default function Header({ titulo, descricao, className = '', imagem}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem && <TituloSemImagem
        titulo={titulo}
        descricao={descricao}
      />}
      {titulo && imagem && <TituloComImagem />}
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  className: PropTypes.string,
  imagem: PropTypes.string,
};

/*
import styles from "./Header.module.scss";
import PropTypes from 'prop-types';

export default function Header({ titulo, descricao, className = '', imagem}) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img
          alt={titulo}
          src={imagem}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.string,
  className: PropTypes.string,
  imagem: PropTypes.string,
};
*/