import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    username: 'Van',
    items: [
      { id: 1, text: 'The first todo' },
      { id: 2, text: 'The second todo' },
      { id: 3, text: 'The third todo' }
    ]
  },
  reducers: {
    removeOne: (state, action) => {
      // don't do the below. this is an example of what not to do
      state.items.pop()
    }
  }
})