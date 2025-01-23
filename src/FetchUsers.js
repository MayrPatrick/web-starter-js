import { fetchData } from "./FetchData";

const url = "https://randomuser.me/api/";
export default async function fetchUsers() {
  return (await fetchData(url)).results;
}
