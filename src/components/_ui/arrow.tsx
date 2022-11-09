import { CaretRight } from 'phosphor-react'
import { ArrowContainer } from '../../styles/components/arrow'

export function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''

  return (
    <ArrowContainer
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
    >
      <button onClick={props.onClick}>
        {props.left && <CaretRight size={48} weight="regular" />}
        {!props.left && <CaretRight size={48} weight="regular" />}
      </button>
    </ArrowContainer>
  )
}
