// Write your code here

import {ButtonItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, getDirectionItem, isActive} = props

  const {displayText, value} = directionDetails

  const onClickDirectionButton = () => {
    getDirectionItem(value)
  }

  return (
    <ButtonItem>
      <DirectionButton
        type="button"
        onClick={onClickDirectionButton}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ButtonItem>
  )
}

export default GradientDirectionItem
