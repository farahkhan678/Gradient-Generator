import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  GradientGeneratorContent,
  GradientHeading,
  GradientParagraph,
  DirectionButtonsList,
  ColorsContainer,
  ColorNameAndColorContainer,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColorInput: '#014f7b',
    secondColorInput: '#8ae323',
    activeDirectionOption: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerateButton = () => {
    const {
      firstColorInput,
      secondColorInput,
      activeDirectionOption,
    } = this.state

    this.setState({
      gradientValue: `to ${activeDirectionOption}, ${secondColorInput}, ${firstColorInput}`,
    })
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  getDirectionItem = direction => {
    this.setState({
      activeDirectionOption: direction,
    })
  }

  render() {
    const {
      activeDirectionOption,
      firstColorInput,
      secondColorInput,
      gradientValue,
    } = this.state

    console.log(activeDirectionOption)

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientGeneratorContent>
          <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
          <GradientParagraph>Choose Direction</GradientParagraph>
          <DirectionButtonsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                getDirectionItem={this.getDirectionItem}
                isActive={eachDirection.value === activeDirectionOption}
              />
            ))}
          </DirectionButtonsList>
          <GradientParagraph>Pick the Colors</GradientParagraph>
          <ColorsContainer>
            <ColorNameAndColorContainer>
              <GradientParagraph>{secondColorInput}</GradientParagraph>
              <ColorInput
                type="color"
                onChange={this.onChangeSecondColor}
                value={secondColorInput}
              />
            </ColorNameAndColorContainer>
            <ColorNameAndColorContainer>
              <GradientParagraph>{firstColorInput}</GradientParagraph>
              <ColorInput
                type="color"
                onChange={this.onChangeFirstColor}
                value={firstColorInput}
              />
            </ColorNameAndColorContainer>
          </ColorsContainer>
          <GenerateButton onClick={this.onClickGenerateButton}>
            Generate
          </GenerateButton>
        </GradientGeneratorContent>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
