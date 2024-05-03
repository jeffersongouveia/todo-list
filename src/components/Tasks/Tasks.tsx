import { useContext } from 'react'

import TaskList from '../TaskList/TaskList.tsx'
import { TasksContext } from '../../contexts/TasksContext.tsx'

import {
  Counter,
  EmptyFeedback,
  EmptyState,
  Header,
  HeaderText,
  Highlighted,
  StateContainer,
  TaskListContainer,
} from './styles.ts'
import clipboard from '../../assets/clipboard.svg'

export default function Tasks() {
  const { tasks } = useContext(TasksContext)

  const countCreatedTasks = tasks.length
  const hasTasks = countCreatedTasks > 0
  const countFinishedTasks = tasks.reduce((count, task) => {
    return task.done ? count + 1 : count
  }, 0)

  let finishedText = '0'
  if (countFinishedTasks > 0 && countFinishedTasks < countCreatedTasks) {
    finishedText = `${countFinishedTasks} of ${countCreatedTasks}`
  } else if (
    countFinishedTasks > 0 &&
    countCreatedTasks === countFinishedTasks
  ) {
    finishedText = 'All'
  }

  return (
    <TaskListContainer>
      <Header>
        <HeaderText side="left">
          Created tasks
          <Counter>{countCreatedTasks}</Counter>
        </HeaderText>

        <HeaderText side="right">
          Finished
          <Counter>{finishedText}</Counter>
        </HeaderText>
      </Header>

      <StateContainer>
        {hasTasks ? (
          <TaskList />
        ) : (
          <EmptyState>
            <img src={clipboard} alt="" />

            <EmptyFeedback>
              <Highlighted>
                You still don&apos;t have any tasks registered.
              </Highlighted>
              Create tasks and organize your to-do items.
            </EmptyFeedback>
          </EmptyState>
        )}
      </StateContainer>
    </TaskListContainer>
  )
}
