import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import {
  WrapperHeader,
  Navigation,
  Link,
  NavList,
  NavItem,
  ReactIcons,
} from './Header.styled';

export default function Header() {
  return (
    <>
      <WrapperHeader>
        <Navigation>
          <ReactIcons />
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/movies">Movies</Link>
            </NavItem>
          </NavList>
        </Navigation>
      </WrapperHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
