import { TDeck } from "./getDecks";

export async function getDeck(deckId: string): Promise<TDeck> {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/decks/${deckId}`
  );
  return response.json();
}
