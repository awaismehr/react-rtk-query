import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import { history, store } from './store'
import User from './pages/User'
import AddUser from './pages/AddUser'
import Products from './pages/Products'
import RegisterUserPage from './pages/RegisterUserPage'
import ExperiencePage from './pages/ExperiencePage'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  )
}

export default App
