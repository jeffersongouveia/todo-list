import { useContext } from 'react'
import { Trash } from '@phosphor-icons/react'

import { TasksContext } from '../../contexts/TasksContext.tsx'
import { TasksContainer, TaskItem, Checkbox, Label, Remove } from './styles.ts'

export default function TaskList() {
  const { tasks, toggleTaskStatus, removeTask } = useContext(TasksContext)

  return (
    <TasksContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          <Checkbox
            id={String(task.id)}
            checked={task.done}
            onChange={() => toggleTaskStatus(task.id)}
          />

          <Label htmlFor={String(task.id)} done={task.done}>
            {task.description}
          </Label>

          <Remove onClick={() => removeTask(task.id)}>
            <Trash />
          </Remove>
        </TaskItem>
      ))}
    </TasksContainer>
  )
}
