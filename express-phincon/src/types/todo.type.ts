export interface TodoInput {
    title: string;
    description?: string;
    completed?: boolean;
  }
  
  export interface TodoOutput {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
  }