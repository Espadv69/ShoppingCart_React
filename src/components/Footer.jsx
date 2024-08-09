import './css/Footer.css'

export function Footer ({ filters }) {
  return (
    <footer className="footer">
      {
        JSON.stringify(filters, null, 2)
      }
      {/* <h4>Prueba Técnica de React * <span>@midudev.</span></h4>
      <h5>Shopping Cart con useContext & useReducer.</h5> */}
    </footer>
  )
}