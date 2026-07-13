import Layout from "@components/Layout"
import HomeView from "@features/HomeView"
import StatsView from "@features/StatsView"
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="users/stats" element={<StatsView />} />
      </Route>
    </Routes>
  )
}

export default App
