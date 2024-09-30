import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>Home Page</h2>
        <Link to="/about">Go To About Page</Link> <br />
        <Link to="/form">Go To Form</Link> <br />
    </div>
  )
}
