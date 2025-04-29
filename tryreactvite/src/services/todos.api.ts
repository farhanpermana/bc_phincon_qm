const API_URL = 'http://localhost:3000/api/todos'

export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Request failed')
  }
  return response.json()
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL)
  return handleResponse(response)
}

export const addTodo = async (todo: { title: string; description?: string }): Promise<Todo> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  return handleResponse(response)
}

export const updateTodo = async (todo: {
  id: string
  title?: string
  description?: string
  completed?: boolean
}): Promise<Todo> => {
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  return handleResponse(response)
}

export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  await handleResponse(response)
}