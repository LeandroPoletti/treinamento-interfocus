import Navbar from "./Navbar";
import {RenderComponent} from 'simple-react-routing'

function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <RenderComponent></RenderComponent>
    </>
  );
}

export default Layout;
