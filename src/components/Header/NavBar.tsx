import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';
import NavigationStyled from './NavigationStyled';

function NavBar() {
  return (
    <NavigationStyled>
      <ul>
        {navigation.map((item) => (
          <li>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
}

export default NavBar;
