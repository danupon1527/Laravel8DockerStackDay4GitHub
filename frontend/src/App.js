import axios from 'axios'
import { useState, useEffect } from 'react'

// const baseURL = "http://localhost:8100/api/stores"
const baseURL = "http://localhost:8100/api/products"

function App() {

  // สร้างตัวแบบ state ไว้เก็บข้อมูลที่ได้จาก API
  // การสร้างตัวแปรแบบ State ด้วย React Hook
  const [products, setProducts] = useState(null)

  useEffect(()=> {

    const token = "4|hToqT98ouB76JXIjdYTDfR4z5e9SbCQZVetmvLNY"
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    // เขียนฟังก์ชันการอ่านข้อมูลจาก API ด้วย axios
    axios.get(baseURL, config).then((response) => {
      // console.log(response.data)
      // ทำการเก็บค่าลงตัวแปร products
      setProducts(response.data)
    })

  },[])

  if (!products) return null

  console.log(products)

  return (
    <div>
      <h1>Product List ({products.length})</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>CreatedDate</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(element => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.price}</td>
                  <td>{element.created_at}</td>
                  <td>{element.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )

  /*
  return (
    <>
     <h1>Product List ({products.length})</h1>
     <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>ProductName</th>
          <th>UnitPrice</th>
          <th>UnitInStock</th>
          <th>CreatedDate</th>
          <th>ModifiedDate</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(element => {
            return (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td><img src={element.ProductPicture} width="100" alt="" /></td>
                <td>{element.ProductName}</td>
                <td>{element.UnitPrice}</td>
                <td>{element.UnitInStock}</td>
                <td>{element.CreatedDate}</td>
                <td>{element.ModifiedDate}</td>
              </tr>
            )
          })
        }
      </tbody>
     </table>
    </>
  )
  */

}

export default App
