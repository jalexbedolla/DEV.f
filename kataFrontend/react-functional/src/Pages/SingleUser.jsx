import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { placeholderApi } from '../Api/placeholderApi'

export const SingleUser = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const { userId } = useParams()

  const getSingleUserData = async () => {
    try {
      setLoading(true)
      const res = await placeholderApi.get(`/users/${userId}`)
      setUser(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleUserData()
  }, [])// el arreglo de dependencias sigue marcando un error..!!

  return (
    <div>
      {loading
        ? <div>Loading...</div>
        : (
          <>
            <h1>Name: {user.name}</h1>
            <h2>Username: {user.username}</h2>
            <h3>eMail: {user.email}</h3>
            <p>Address Detail</p>
            <ul>
              <li>Street: {user.address.street}</li>
              <li>Siuite: {user.address.suite}</li>
              <li>City: {user.address.city}</li>
            </ul>
          </>
          )}
    </div>
  )
}
