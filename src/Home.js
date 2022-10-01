import { Navbar, Nav, Container, Stack } from 'react-bootstrap'
import { Link, Outlet, useNavigate } from "react-router-dom"
import styles from "./Home.module.css"


function Home() {

  let navigate = useNavigate()
  function handleChange(e) {
      if ( e.target.value === "") return;
      navigate("/search/" + e.target.value)
  }

  return (
    <>
        <Navbar  className={styles.navbar}>
          <Container fluid>
            <Navbar.Brand className={styles.brand}>
                <img
                alt=""
                src="https://previews.123rf.com/images/teploleta/teploleta1810/teploleta181000043/133518012-cute-print-with-cartoon-closed-eyes-with-long-eyelashes.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Bek's Beauty
            </Navbar.Brand>
            <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/products" className="nav-link">Products</Link>
            </Nav>
            <input placeholder="Search" onChange={handleChange}/>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
      </>
  )
}

export default Home