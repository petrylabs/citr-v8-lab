import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // Components must always return markup
    return React.createElement(
        'div',
        { id: 'parent-div' },
        React.createElement('h1', { id: 'h1-id' }, 'Adopt 2me')
    )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
