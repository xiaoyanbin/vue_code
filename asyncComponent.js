
function asyncComponent() {
  new Promise((resolve, reject) => {
    resolve({
      type: 'div',
      children: [
        {
          type: 'component',
          name: 'Button',
          props: {
            title: 'Click me'
          }
        }
      ]
    })
  })
}

export default asyncComponent