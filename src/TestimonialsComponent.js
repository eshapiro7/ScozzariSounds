import React, { useState } from "react";
import "./App.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Liz S.",
      date: "Karaoke Band Birthday Party",
      content:
        "Everyone at my birthday party had so much fun! Leveling up to live karaoke with a band is a game-changer. They knew so many songs spanning across several genres. They also learned some lesser-known songs that specifically requested, which was an amazing personal touch. They coordinated with the venue I chose ahead of time and got there super early. The evening went by seamlessly and now my guests want to book them for their next big milestone!",
    },
    // {
    //   id: 2,
    //   author: "Jane Smith",
    //   date: "2024-02-16",
    //   content: "Absolutely love this! Will definitely be purchasing again.",
    // },
    // {
    //   id: 3,
    //   author: "Emily Johnson",
    //   date: "2024-02-15",
    //   content: "Great service and fast shipping. Product works as described.",
    // },
  ]);

  return (
    <div className="testimonial-container">
      <h2 className="component-title">The people have spoken.</h2>
      <ul className="component-body testimonial-body">
        {reviews.map((review) => (
          <ul key={review.id} style={{ marginBottom: "20px" }}>
            <p>{review.content}</p>
            <p>
              <i>
                {review.author}
                <br></br>
                {review.date}
              </i>
            </p>
            <hr />
          </ul>
        ))}
      </ul>
    </div>
  );
};
export default Testimonials;
