const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}.`

test('Should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('Should generate greeting from name', () => {
  const result = generateGreeting('Çağrı')
  expect(result).toBe('Hello Çağrı.')
})

test('Should generate greeting without name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous.')
})