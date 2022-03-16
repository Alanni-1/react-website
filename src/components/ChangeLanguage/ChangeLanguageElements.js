import styled from 'styled-components'

export const Changeselect = styled.select`
  width: 65px;
  height: ${({height}) => (height ? height : '35px')};
  padding: 5px 10px;
  margin-right: 20px;
  outline: none;
  background-color: transparent;
  color: #fff;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 55px;
    padding: 0 5px;
    height: 30px;
  }
`

export const Changeoption = styled.option`
  color: #000;
  background-color: #fff;
`