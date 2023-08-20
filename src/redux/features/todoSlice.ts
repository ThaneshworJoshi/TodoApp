import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { externalApiEndpoints as apiEndPoint } from '../../common/constants'

interface ITodo {
  id: number
  text: string
  title?: string
  status?: string
  description?: string
  priority?: string
  tag?: string
}

interface ITodoState {
  loading: boolean
  todos: ITodo[]
  error: string | undefined
}

const initialState: ITodoState = {
  loading: false,
  todos: [],
  error: '',
}

const { baseUrl, todos } = apiEndPoint

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  try {
    const response = await axios.get(baseUrl + todos.base)
    return response.data
  } catch (error) {
    throw error
  }
})

export const addTodo = createAsyncThunk('todo/addTodo', async (newTodo) => {
  try {
    const response = await axios.post(baseUrl + todos.base, newTodo)
    return response.data
  } catch (error) {
    throw error
  }
})

export const editTodo = createAsyncThunk(
  'todo/editTodo',
  async (todo: ITodo) => {
    const { id, title, status, description, priority, tag } =
      todo as unknown as ITodo

    const apiUrl = baseUrl + todos.byId.replace('${id}', id.toString())

    try {
      const response = await axios.put(apiUrl, {
        title,
        status,
        description,
        priority,
        tag,
      })
      return response.data
    } catch (error) {
      throw error
    }
  }
) as any

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (todoId: number | string) => {
    const apiUrl = baseUrl + todos.byId.replace('${id}', todoId.toString())

    try {
      await axios.delete(apiUrl)

      return todoId
    } catch (error) {
      throw error
    }
  }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodoState: (state, action) => {
      const updatedTodo = action.payload
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id)
      if (index !== -1) {
        state.todos[index] = updatedTodo
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.error = ''
        state.loading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(addTodo.pending, (state) => {
        state.error = ''
        state.loading = true
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false
        state.todos.push(action.payload)
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(editTodo.pending, (state) => {
        state.error = ''
        state.loading = true
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.loading = false
        const editedTodo = action.payload
        const existingTodo = state.todos.find(
          (todo) => todo.id === editedTodo.id
        )
        if (existingTodo) {
          existingTodo.title = editedTodo.title
          existingTodo.status = editedTodo.status
          existingTodo.description = editedTodo.description
          existingTodo.priority = editedTodo.priority
          existingTodo.tag = editedTodo.tag
        }
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(deleteTodo.pending, (state) => {
        state.error = ''
        state.loading = true
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false
        const deletedTodoId: any = action.payload
        state.todos = state.todos.filter((todo) => todo.id !== deletedTodoId)
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { updateTodoState } = todoSlice.actions
export default todoSlice.reducer
