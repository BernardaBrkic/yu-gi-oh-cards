import React, { useState, useEffect, useCallback } from "react";
import CardsList from "./components/CardsList";
import "./index.css";
import BackgroundImage from "./components/BackgroundImage";
import AddCard from "./components/AddCard";

const API_URL =
  "https://react-http-5a555-default-rtdb.firebaseio.com/cards.json";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateCardsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedCards = [];

      for (const key in data) {
        loadedCards.push({
          key: key,
          id: key,
          name: data[key].name,
          type: data[key].type,
          description: data[key].description,
        });
      }

      setCards(loadedCards);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    generateCardsHandler();
  }, [generateCardsHandler]);

  async function addCardHandler(card) {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(card),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  let feedback = (
    <article>
      <p>No data was generated!</p>
      <p>Press the button above to generate ten cards.</p>
    </article>
  );

  if (cards.length > 0) {
    feedback = <CardsList cards={cards} />;
  }

  if (error) {
    feedback = (
      <article>
        <p>Error!</p>
        <p>{error}</p>
      </article>
    );
  }

  if (isLoading) {
    feedback = (
      <article>
        <p>Loading...</p>
        <p>This can take a few seconds.</p>
      </article>
    );
  }

  return (
    <React.Fragment>
      <BackgroundImage />
      <div className="content">
        <section className="wrapper">
          <AddCard onAddCard={addCardHandler} />
        </section>
        <section className="top-button">
          <button onClick={generateCardsHandler}>
            Generate Yu-Gi-Oh cards
          </button>
        </section>
        <div className="wrapper">
          <section>{feedback}</section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
