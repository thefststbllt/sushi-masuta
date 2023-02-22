import styles from './PromoText.module.css';

const PromoText = () => {
    return (
        <section className={styles['promo-text']}>
            <h2>Онлайн Суши Ресторан <b>Sushi Masuta</b></h2>
            <p>Сеть онлайн ресторанов японской и паназиатской кухонь.<span>ボナペティ</span></p>
            <p></p>
        </section>
    )
}

export default PromoText;