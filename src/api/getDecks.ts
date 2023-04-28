export type TDeck = {
  title: string;
  cards: string[];
  _id: string;
};

export async function getDecks(): Promise<TDeck[]> {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/decks`);
  return response.json();
}
