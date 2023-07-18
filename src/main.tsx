/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './Components/App'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
)

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') ).render(
    <RouterProvider router={router} />
  )
})
