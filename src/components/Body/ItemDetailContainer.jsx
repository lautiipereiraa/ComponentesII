import ItemDetail from "../Body/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {

  const { productId } = useParams()
  //

  console.log(productId)
  return (
        <ItemDetail />
  )
}

export default ItemDetailConteiner