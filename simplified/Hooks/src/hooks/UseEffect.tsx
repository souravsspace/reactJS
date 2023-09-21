import { useEffect, useState } from "react"

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("posts")
  const [item, setItem] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItem(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button type="button" onClick={() => setResourceType("post")}>
          Post
        </button>
        <button type="button" onClick={() => setResourceType("users")}>
          Users
        </button>
        <button type="button" onClick={() => setResourceType("comments")}>
          Comments
        </button>
      </div>
      <div>
        <h1>Preview</h1>
        <ul>
          {item.map((item, index) => (
            <li key={index}>
              {/* {JSON.stringify(item)} */}
              {item.title}
              </li>
          ))}
        </ul>
      </div>
    </>
  )
}
