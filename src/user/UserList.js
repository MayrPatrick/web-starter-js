import React, { useEffect, useState } from 'react'

import fetchUsers from './FetchUsers'
import UserSearch from './UserSearch'

function getFilteredUsers(users, query) {
  if (query == '') return users

  const filterQuery = query.toLowerCase()

  return users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(query) ||
      user.name.last.toLowerCase().includes(query)
  )
}

export default function User() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const newData = await fetchUsers()
        setData(newData)
        setIsLoading(false)
        setError(null)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>an error happened {JSON.stringify(error)}</h2>
      ) : (
        <div className="user_container">
          <UserSearch query={query} onChange={setQuery} />
          <div className="user_list">
            {getFilteredUsers(data, query).map((user) => (
              <div className="user" key={user.email}>
                <img
                  src={user.picture.medium}
                  alt="profile picture of {user.name.first} {user.name.last}"
                />
                <div className="name">
                  {user.name.first} {user.name.last}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
