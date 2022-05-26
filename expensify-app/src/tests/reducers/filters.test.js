import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const filterText = 'e'
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: filterText })
  expect(state.text).toBe(filterText)
})

test('should set startDate filter', () => {
  const startDateInstance = moment().add(2, 'days').valueOf()
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: startDateInstance })
  expect(state.startDate).toBe(startDateInstance)
})

test('should set endDate filter', () => {
  const endDateInstance = moment().add(5, 'days').valueOf()
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: endDateInstance })
  expect(state.endDate).toBe(endDateInstance)
})