import React, { useContext, useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import { TasksContext } from '../../contexts/TasksContext.tsx'
import { Button, Form, Input } from './styles.ts'

export default function TaskInput() {
  const { addTask } = useContext(TasksContext)
  const [newTask, setNewTask] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  return (
    <Form onSubmit={handlerSubmit}>
      <Input
        type="text"
        placeholder="Add a new task"
        required
        value={newTask}
        onChange={handleChange}
      />

      <Button type="submit">
        Add
        <PlusCircle size={16} />
      </Button>
    </Form>
  )
}
