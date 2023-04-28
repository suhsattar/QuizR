import { TDeck } from "./getDecks";

export async function deleteCard(
  deckId: string,
  index: number
): Promise<TDeck> {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_URL}}/${deckId}/cards/${index}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
}
