import styles from "../Styles/card.module.css";

const Card = ({ data }) => {
  return (
    <>
      <div className={styles.card}>
        <div>
          <img
            src={data.recipe.image}
            alt={data.recipe.label}
            className={styles.img}
          />
        </div>
        <div>
          <a href={data._links}>
            <h2> {data.recipe.label} </h2>
          </a>
          <a href={data.recipe.uri}>
            <button className={styles.btn}> See more...</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
