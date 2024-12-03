interface ItemProps {
    Customer: CustomerType,
    selectedProduct?: productType,
    SelectedAmount?: number,
}
const Item: React.FC<ItemProps> = ({ selectedProduct, Customer, SelectedAmount })=> {
  return (
      <article className="my-8 grid place-content-center bg-transparent">
          <article className="my-2">
              <p>
                  Please Confirm that {Customer.Name} is {selectedProduct ? "Crediting" : "Detibing"} R{selectedProduct?.price.toFixed(2) || SelectedAmount?.toFixed(2)} on {new Date().toUTCString()}
              </p>
          </article>
          
          {selectedProduct ? <>
              <img alt={selectedProduct.Name} src={selectedProduct.image} className="size-40 m-2 rounded-l-2xl" />
              <ul className="w-full pr-2">
                  <li><b>Product:</b> {selectedProduct.Name}</li>
                  <li><b>Price:</b> R{selectedProduct.price.toFixed(2)} </li>
              </ul>
          </> : null}
          {SelectedAmount ? <ul className="w-full pr-2">
              <li><b>Name:</b> {Customer.Name}</li>
              <li><b>Price:</b> R{SelectedAmount.toFixed(2)} </li>
          </ul>:null}
      </article>
  )
}

export default Item