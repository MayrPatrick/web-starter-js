import React, { useEffect, useState } from 'react'

import fetchUsers from './FetchUsers'

export default function User() {
  const [data, setData] = useState([])
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
        <div class="user_container">
          {data.map((user) => (
            <div class="user" key={user.id.value}>
              <span class="name">
                {user.name.first} {user.name.last}
              </span>
              <img
                src={user.picture.large}
                alt="profile picture of {user.name.first} {user.name.last}"
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
