import { products as initialProducts } from '../mocks/products.json'
import { Products } from './Products.jsx'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { useFilters } from './UseFilters.jsx'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
