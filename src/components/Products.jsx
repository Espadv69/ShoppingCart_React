import './css/Products.css'
import { AddToCartIcon } from './icons/Icons.jsx'

export function Products ({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img 
              src={product.image} 
              alt={product.title} 
            />

            <div className='products__strongs'>
              <strong>{product.title}</strong>
              <strong>${product.price}</strong>
            </div>

            <div>
              <button style={{color: 'whitesmoke'}}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
