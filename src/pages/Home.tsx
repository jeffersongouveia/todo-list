import Header from '../components/Header/Header.tsx'
import TaskInput from '../components/TaskInput/TaskInput.tsx'
import Tasks from '../components/Tasks/Tasks.tsx'
import TasksContextProvider from '../contexts/TasksContext.tsx'

import { HomeContainer, TaskContainer } from './styles.ts'

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <TasksContextProvider>
        <TaskContainer>
          <TaskInput />
          <Tasks />
        </TaskContainer>
      </TasksContextProvider>
    </HomeContainer>
  )
}
