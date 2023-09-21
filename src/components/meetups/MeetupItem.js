import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useState } from "react";

export default function MeetupItem({ card, onAddToFavorites }) {
  const { data } = useFetch({
    url: "/data.json",
  });
  const [favoriteCards, setFavoriteCards] = useState([]);

  if (!data) return <p>Loading...</p>;
  let [item] = data;

  const clickAddToFavorites = (item) => {
    onAddToFavorites(item);
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={clickAddToFavorites}>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
