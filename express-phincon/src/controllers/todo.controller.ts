import { Request, Response } from 'express';
import Todo from '../models/todo.model';
import { TodoInput } from '../types/todo.type';

export function getAllTodos(req: Request, res: Response): Promise<any> {
  return Todo.findAll()
    .then(todos => res.status(200).json(todos))
    .catch(error => {
      console.error('Error getting todos:', error);
      res.status(500).json({ error: 'Failed to retrieve todos' });
    });
}

export const getTodoById = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  return Todo.findByPk(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      return res.status(200).json(todo);
    })
    .catch(error => {
      console.error('Error getting todo:', error);
      res.status(500).json({ error: 'Failed to retrieve todo' });
    });
};

export const createTodo = (req: Request, res: Response): Promise<any> => {
  const { title, description, completed } = req.body as TodoInput;
  
  if (!title) {
    return Promise.resolve(res.status(400).json({ error: 'Title is required' }));
  }
  
  return Todo.create({
    title,
    description,
    completed: completed || false,
  })
    .then(newTodo => res.status(201).json(newTodo))
    .catch(error => {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: 'Failed to create todo' });
    });
};

export const updateTodo = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const { title, description, completed } = req.body as TodoInput;
  
  return Todo.findByPk(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      
      return todo.update({
        title: title || todo.title,
        description: description !== undefined ? description : todo.description,
        completed: completed !== undefined ? completed : todo.completed,
      }).then(updatedTodo => res.status(200).json(updatedTodo));
    })
    .catch(error => {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Failed to update todo' });
    });
};

export const deleteTodo = (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  
  return Todo.findByPk(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      
      return todo.destroy().then(() => res.status(204).send());
    })
    .catch(error => {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Failed to delete todo' });
    });
};