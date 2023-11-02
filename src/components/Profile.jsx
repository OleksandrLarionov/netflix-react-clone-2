import { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileImg from '../assets/1801287.svg';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
// icons
import { FiSearch } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';
class Profile extends Component {
	render() {
		return (
			<div className='d-flex align-items-center'>
				<IoNotifications className='fs-2 me-3 text-white' />
				<span className=' text-white'>KIDS</span>
				<FiSearch className='fs-2 mx-3 text-white' />
				<Image
					src={ProfileImg}
					width='50'
					height='50'
					alt='avatar logo'
					className='bg-success'
				/>

				<DropdownButton
					title=''
					key='start'
					id={`dropdown-button-drop-start`}
					size='small'
					drop='start'
					variant='dark'
					className='text-white'>
					<Dropdown.Item eventKey='1'>
						{' '}
						<Link to={'/logIn'} className='nav-link'>
							Profile
						</Link>
					</Dropdown.Item>
					<Dropdown.Item eventKey='2'>
						<Link to={'/settings'} className='nav-link'>
							Settings
						</Link>
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey='3'>Log Out</Dropdown.Item>
				</DropdownButton>
			</div>
		);
	}
}
export default Profile;
