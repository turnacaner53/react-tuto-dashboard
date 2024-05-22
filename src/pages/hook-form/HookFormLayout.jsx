import { Outlet } from "react-router-dom"

 

const HookFormLayout = () => {
    return (
        <div className="container">  
            <Outlet />
        </div>
    )
}

 
export default HookFormLayout
