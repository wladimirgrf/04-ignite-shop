import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Purchase made!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Woohoo <strong>Diego Fernandes</strong>, your <strong>Beyond the Limits T-shirt</strong> is already on its way to your home.
      </p>

      <Link href="/">
        Back to catalog
      </Link>
    </SuccessContainer>
  )
}