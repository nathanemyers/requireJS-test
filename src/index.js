import { data, updateData } from './lib'
console.log(`data:`, data)

updateData({ baz: 'poop' })
  .then(console.log(`new data:`, data))

