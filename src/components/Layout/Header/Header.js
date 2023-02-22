import React from 'react';
import sushiImage from '../../../assets/background/background-sushi.webp';
import styles from './Header.module.css';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props) => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1 className={styles.logo}>Sushi Masuta</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={sushiImage} alt='Блюда японской кухни'/>
        </div>
    </React.Fragment>
};

export default Header;
