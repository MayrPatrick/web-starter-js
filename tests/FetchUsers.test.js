import fetchUsers from '../src/FetchUsers'

beforeEach(() => {
  fetch.resetMocks()
})

test('the results of the fetched data are returned', async () => {
  const exampleData = { results: [{ 1: 2 }] }
  fetch.mockResponseOnce(JSON.stringify(exampleData))

  const result = await fetchUsers('something.com/')

  expect(result).toEqual(exampleData.results)
})

test('throws an error in case of (network) failure', async () => {
  fetch.mockReject(new Error('HTTP 419'))

  await expect(fetchUsers).rejects.toThrow()
})
