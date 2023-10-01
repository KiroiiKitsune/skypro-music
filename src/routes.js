import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page/main-page'
import LoginPage from './pages/login-page/loginpage'
import FavoritePage from './pages/favori-page/favorit-page'
import SignupPage from './pages/signuppage/signuppage'
import Category from './pages/category-page/category-page'
import ProtectedRoute from './protectroutes'
import NotFoundPage from './pages/notfound/notfound'

export default function AppRouters(prop) {
  return (
    <Routes>
      <Route
        path="/signin"
        element={<LoginPage handleLogin={prop.handleLogin} />}
      />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(prop.user)} />}>
        <Route
          path="/"
          element={<MainPage handleLogout={prop.handleLogout} />}
        />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
