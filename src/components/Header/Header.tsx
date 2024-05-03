import { HeaderContainer } from './styles.ts'

import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}
