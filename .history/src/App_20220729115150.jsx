import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

        </main>
      </div>
    </div>
  )
}


