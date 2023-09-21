import { useState } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const addToFavorites = (card) => {
    setFavoriteCards([...favoriteCards, card]);
  };

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupItem
          card={classes.list.item}
          onAddToFavorites={addToFavorites}
        />
        <MeetupItem
          card={classes.list.item}
          onAddToFavorites={addToFavorites}
        />
        <MeetupItem
          card={classes.list.item}
          onAddToFavorites={addToFavorites}
        />
        <MeetupItem
          card={classes.list.item}
          onAddToFavorites={addToFavorites}
        />
      </ul>
    </section>
  );
}
