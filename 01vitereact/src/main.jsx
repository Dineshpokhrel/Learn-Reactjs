import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1> Custom appp</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target : '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google </a>
)

const anotherUser = " react continue"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', traget:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
