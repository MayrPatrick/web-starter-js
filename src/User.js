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
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>an error happened {JSON.stringify(error)}</p>
      ) : (
        <div>
          {data.map((user) => (
            <div key={user.id.value}>
              <h1>
                {user.name.first} {user.name.last}
              </h1>
              <img
                src={user.picture.medium}
                alt="profile picture of {user.name.first} {user.name.last}"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
