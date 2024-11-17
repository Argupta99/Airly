import type 
{ PropsWithChildren } from "react"

//taken children as a prop and rendering the prop inside it
const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
       <main className="min-h-screen mx-auto px-4 py-8">{children}</main> 
        </div>
  )
}

export default Layout