import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Nav className='mt-3 justify-content-center'>
      <Nav.Item>
        <Nav.Link>
          <Link to='albums'>Albums</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='comments'>Comments</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='/'>Home</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='photos'>Photos</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='post'>Post</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link>
          <Link to='users'>Users</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
