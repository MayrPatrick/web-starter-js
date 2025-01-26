import fetchData from './FetchData'

const url = 'https://randomuser.me/api/'
export default async function () {
  return (await fetchData(url)).results
}
