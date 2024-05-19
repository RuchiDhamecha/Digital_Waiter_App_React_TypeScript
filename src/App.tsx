import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.scss'
import Header from './layout/Header/Header'
import Table from './component/Table/Table'
import TableScreen from './pages/TableScreen/TableScreen'
import KitchenScreen from './pages/KitchenScreen/KitchenScreen'
import UserScreen from './pages/UserScreen/UserScreen'

const App=()=>{
  return(
    <div>
    {/* <TableScreen /> */}
    <KitchenScreen/>
    {/* <UserScreen/> */}
    </div>
  )
}

export default App
