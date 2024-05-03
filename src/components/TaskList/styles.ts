import styled, { css } from 'styled-components'

interface LabelProps {
  done?: boolean
}

export const TasksContainer = styled.ul`
  display: grid;
  gap: 12px;
`

export const TaskItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.gray400};
  background: ${(props) => props.theme.gray500};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);
`

export const Label = styled.label<LabelProps>`
  flex: 1 0 0;
  color: ${(props) => props.theme.gray100};
  line-height: 140%;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      text-decoration: line-through;
      color: ${props.theme.gray300};
    `}
`

export const Remove = styled.button`
  appearance: none;
  border: none;
  background: none;
  color: ${(props) => props.theme.gray300};

  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 4px;
  padding: 5px;

  &:hover {
    color: ${(props) => props.theme.danger};
    background: ${(props) => props.theme.gray400};
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  appearance: none;
  outline: none;
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  cursor: pointer;

  &:before {
    content: '\\2713';
    display: none;
    width: 12px;
    height: 12px;
    margin: 6px;
    border-radius: 50%;
    background: transparent;
    transition: 0.3s;
    color: ${(props) => props.theme.gray100};
    line-height: 1;
  }

  &:checked:before {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:checked {
    background: ${(props) => props.theme.purpleDark};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purpleDark};
  }

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.blueDark};
  }

  &:checked:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    background: ${(props) => props.theme.purple};
  }
`
