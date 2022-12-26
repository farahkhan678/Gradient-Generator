// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GradientGeneratorContent = styled.div`
  width: 80%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GradientHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
`

export const GradientParagraph = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const DirectionButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding-left: 0px;
`

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`

export const ColorNameAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ColorInput = styled.input`
  height: 50px;
  width: 150px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`

export const GenerateButton = styled.button`
  align-self: center;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #00c9b7;
  padding: 12px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  margin-top: 50px;
  font-weight: 500;
`
