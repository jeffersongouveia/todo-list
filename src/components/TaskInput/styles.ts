import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: -27px;
`

export const Input = styled.input`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.gray700};
  background: ${(props) => props.theme.gray500};
  color: ${(props) => props.theme.gray300};
  font-size: 1rem;
  line-height: 140%;

  width: 100%;
  height: 54px;
  min-width: 40%;

  &:not(:placeholder-shown) {
    border: 1px solid ${(props) => props.theme.purpleDark};
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  border: none;
  border-radius: 8px;

  background: ${(props) => props.theme.blueDark};
  color: ${(props) => props.theme.gray100};

  &:hover {
    background: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`
