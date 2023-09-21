import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
export default function FavoritesPage({ favoriteCards }) {
  return (
    <section>
      <h1>Favorites Page</h1>
      {favoriteCards.map((card) => (
        <MeetupItem key={card.id} card={card} />
      ))}
    </section>
  );
}
