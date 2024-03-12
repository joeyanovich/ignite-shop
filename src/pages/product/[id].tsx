import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ Dinheiros</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis tenetur deserunt aut, praesentium, et quam minima nobis tempore aliquid laborum. Eligendi quaerat animi reiciendis consectetur ipsam repudiandae dicta deleniti.</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}