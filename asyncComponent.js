
function asyncComponent() {
 return new Promise((resolve, reject) => {
    resolve({
      type: 'div',
      children: 'Hello World'
    })
  })
}

export default asyncComponent