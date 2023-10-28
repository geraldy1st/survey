import React, { useState } from "react";
import styles from "./Rating.module.css";
import star from "../img/star.png";
import team from "../img/Plan-de-travail-68-copie-4-1200x917.png";

function Rating() {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleFormSubmitted(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className={styles.thxPanel}>
      <img src={team} className={styles.team} />
      <p className={styles.selected}> You selected {selectedRating} of 5</p>
      <h1>Thank You!</h1>
      <p className={styles.ratingDescription}>
        We appreciated you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleFormSubmitted} className={styles.panel}>
      <img className={styles.star} src={star} alt="" />
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => handleRatingClicked(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
}

export default Rating;
