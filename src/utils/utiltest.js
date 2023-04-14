import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

// As a basic setup, import your same slice reducers
import taskReducer from '../features/task/taskSlice'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { tasks: taskReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
