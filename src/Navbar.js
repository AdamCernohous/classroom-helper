import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/setup">Setup</Link>
      <Link to="/order">Order</Link>
      <Link to="/random">Random</Link>
      <Link to="/student">Student</Link>
    </div>
  );
}
 
export default Navbar;