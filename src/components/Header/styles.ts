import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 12.5rem;
  background: ${(props) => props.theme.gray700};

  img {
    width: 126px;
    height: 48px;
  }
`
