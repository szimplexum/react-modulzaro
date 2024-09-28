import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import TaskWindow from './TaskWindow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskWindow/>
  </StrictMode>,
)
