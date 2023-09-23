import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <code style={{ display: "flex", justifyContent: 'space-evenly', marginBottom: '3rem' }}>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
    </code>
  )
}
