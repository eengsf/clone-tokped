import NavbarBottom from './Navbar/NavbarBottom';
import NavbarTop from './Navbar/NavbarTop';

function Navbar() {
  return (
    <div className="flex flex-col sticky top-0 z-20 border-b bg-white">
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
}

export default Navbar;
