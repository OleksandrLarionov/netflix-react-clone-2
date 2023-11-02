import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Netflix_2015_logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Profile from './Profile';

const NavBar = () => {
	const location = useLocation();
	return (
		<Navbar expand='lg' className='pt-4 bg-black'>
			<Container fluid className='bg-black'>
				<Navbar.Brand href='#home'>
					<Image src={Logo} width='85' height='38' alt='logo' />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-between'>
					<Nav className='d-flex text-white'>
						<Link to='/' className='nav-link text-white'>
							Home
						</Link>
						<Link
							to={'/tvShow'}
							className={
								location.pathname === '/tvShow'
									? 'nav-link active text-white '
									: 'nav-link text-white'
							}>
							TV Shows
						</Link>
						<Nav.Link href='#home' className='text-white'>
							Movies
						</Nav.Link>
						<Nav.Link href='#home' className='text-white'>
							Recently Added
						</Nav.Link>
						<Nav.Link href='#home' className='text-white'>
							My List
						</Nav.Link>
					</Nav>
					<Profile />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
