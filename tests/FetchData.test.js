import fetchData from '../src/core/FetchData'

beforeEach(() => {
  fetch.resetMocks()
})

test('the data fetched and serialized', async () => {
  const exampleData = { someData: 123 }
  fetch.mockResponseOnce(JSON.stringify(exampleData))

  const result = await fetchData('something.com/')

  expect(result).toEqual(exampleData)
})

test('throws an error in case of (network) failure', async () => {
  fetch.mockReject(new Error('HTTP 419'))

  await expect(fetchData('something.com/')).rejects.toThrow()
})
