export async function createDeck(title: string) {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/decks`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
