import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$rocket",
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',
  cursor: "pointer",

  span: {
    fontWeight: 'bold'

  },
  
  '&:hover': {
    filter: 'brightness(0.9)'
  }
})
export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Hello World
    </Button>
  )
}
