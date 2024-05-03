import { createContext, ReactNode, useState } from 'react'

export interface Task {
  id: number
  description: string
  done: boolean
}

interface TasksContextData {
  tasks: Task[]
  addTask: (task: string) => void
  removeTask: (id: number) => void
  toggleTaskStatus: (id: number) => void
}

interface TasksContextProvider {
  children: ReactNode
}

const initialValue: TasksContextData = {
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  toggleTaskStatus: () => {},
}

export const TasksContext = createContext<TasksContextData>(initialValue)

export default function TasksContextProvider(props: TasksContextProvider) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  function sortDoneTasksAtBottom(tasks: Task[]) {
    return tasks.sort((a, b) => {
      if (a.done && !b.done) return 1
      if (!a.done && b.done) return -1
      return 0
    })
  }

  function persistTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  function sortAndUpdateChanges(tasks: Task[]) {
    const sortedTasks = sortDoneTasksAtBottom(tasks)
    persistTasks(sortedTasks)
    setTasks(sortedTasks)
  }

  function addTask(task: string) {
    const newTask = {
      id: new Date().getTime(),
      description: task,
      done: false,
    }

    sortAndUpdateChanges([...tasks, newTask])
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    sortAndUpdateChanges(filteredTasks)
  }

  function toggleTaskStatus(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        }
      }

      return task
    })

    sortAndUpdateChanges(updatedTasks)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleTaskStatus,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  )
}
