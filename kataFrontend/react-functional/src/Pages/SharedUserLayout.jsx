import { Outlet } from "react-router-dom";

export const SharedUserLayout = () => {
  return (
    <>
      <div>USER</div>
      <Outlet/>
    </>
  )
}