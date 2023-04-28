export async function deleteDeck(deckId: string) {
  await fetch(`${import.meta.env.VITE_APP_API_URL}/api/decks/${deckId}`, {
    method: "DELETE",
  });
}
