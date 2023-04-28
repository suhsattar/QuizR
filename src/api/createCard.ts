import { TDeck } from "./getDecks";

export async function createCard(deckId: string, text: string): Promise<TDeck> {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/decks/${deckId}/cards`,
    {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}
