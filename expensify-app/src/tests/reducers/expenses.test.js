import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' })
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = 'example expense'
  const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense })
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { description: 'example description' }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].description).toBe('example description')
})

test('should edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { description: 'example description' }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})