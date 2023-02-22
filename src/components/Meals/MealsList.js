import styles from './MealsList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Сет "Наоми"',
        description:
            "Сыр Филадельфия, куриное филе, рис, масаго, помидор, огурец, кунжут",
        price: 899,
    },
    {
        id: "m2",
        name: "Сет Спайс в лососе",
        description: "Рис, лосось, соус спайс",
        price: 299,
    },
    {
        id: "m3",
        name: "Сет Суши с угрем",
        description: "Угорь копченый, рис, соус унаги, кунжут",
        price: 389,
    },
    {
        id: "m4",
        name: 'Салат "Сейджи"',
        description:
            'Обжареный кальмар, помидоры черри, листья салата "Айсберг", сливочный соус, кунжутное масло, икра летучей рыбы тобико',
        price: 599,
    },
];


const MealsList = () => {
    const mealsList = DUMMY_MEALS.map((meal) =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    );
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default MealsList;