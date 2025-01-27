import fetchData from './../core/FetchData'

const url = 'https://randomuser.me/api/?results=10'
export default async function () {
  return (await fetchData(url)).results
}
