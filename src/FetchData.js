export async function fetchData(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error('Network response was not ok.')
  }

  return response.json()
}
