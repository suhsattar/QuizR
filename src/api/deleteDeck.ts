export async function deleteDeck(deckId: string) {
  await fetch(`${import.meta.env.VITE_APP_API_URL}/decks/${deckId}`, {
    method: "DELETE",
  });
}
