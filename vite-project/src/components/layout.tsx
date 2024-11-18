import type 
{ PropsWithChildren } from "react"
import Header from "./header"

//taken children as a prop and rendering the prop inside it
const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
        <Header />
       <main className="min-h-screen container mx-auto px-4 py-4">{children}</main> 
        </div>
  )
}

export default Layout