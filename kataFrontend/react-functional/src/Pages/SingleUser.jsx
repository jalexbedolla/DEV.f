import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import { placeholderApi } from '../Api/placeholderApi'

export const SingleUser = () => {
  const [user, setUser] = useState({})
  const {userId} = useParams()

  const getSingleUserData= async () => {
    try {
      const res = await placeholderApi.get(`/users/${userId}`)
      setUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleUserData()
  }, [])
  
  return (
    <div>
      {
        JSON.stringify(user)
      }
    </div>
  )
}
