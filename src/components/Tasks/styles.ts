import styled from 'styled-components'

interface HeaderTextProps {
  side: 'left' | 'right'
}

export const TaskListContainer = styled.div`
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderText = styled.span<HeaderTextProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 700;
  color: ${(props) =>
    (props.side === 'left' && props.theme.blue) ||
    (props.side === 'right' && props.theme.purple)};
`

export const Counter = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  background: ${(props) => props.theme.gray400};
  color: ${(props) => props.theme.gray200};
  font-size: 0.75rem;
  font-weight: 700;
`

export const StateContainer = styled.div`
  padding-top: 25px;
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  gap: 16px;
  padding: 64px 24px;

  border-radius: 8px;
  border-top: 1px solid ${(props) => props.theme.gray400};
`

export const EmptyFeedback = styled.p`
  display: grid;
  text-align: center;
  font-size: 1rem;
  line-height: 140%;
  margin-top: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.gray300};
`

export const Highlighted = styled.span`
  font-weight: 700;
`
