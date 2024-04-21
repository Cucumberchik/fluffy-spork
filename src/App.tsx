import React from 'react'
import Navbar from './components/Navbar/navbar'
import { WellcomePage } from './components/pages/wellcome-page/WellcomePage'
import { KitchenPage } from './components/pages/kitchen-page/KitchenPage'
const App:React.FC = ():React.ReactNode => {
  return (
    <>
      <Navbar />
      <main>
        <WellcomePage />
        <KitchenPage />
      </main>
    </>
  )
}

export default App
