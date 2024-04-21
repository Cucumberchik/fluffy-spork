import "./index.scss"
import { FC, ReactNode } from "react"
import { SideBaar } from "../../Navbar/navbar"


export const WellcomePage:FC = ():ReactNode => {
  return (
    <main id="wellcome_page">
        <SideBaar />
    </main>
  )
}
