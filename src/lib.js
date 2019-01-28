export const data = {
  foo: 'bar'
}

export function updateData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Object.assign(data, value)
      console.log(`internal data`, data);
      resolve()
    }, 1000)
  }) 
}

