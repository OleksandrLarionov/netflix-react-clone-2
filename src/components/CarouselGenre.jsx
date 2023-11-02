import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const myKey = '5774d0d9';

const CarouselGenge = ({ yourGenre }) => {
	const [films, setFilms] = useState([]);

	const getFilm = async () => {
		try {
			const response = await fetch(
				'http://www.omdbapi.com/?apikey=' + myKey + '&s=' + yourGenre
			);
			if (response.ok) {
				const data = await response.json();
				const films = data.Search;
				setFilms(films);
				// console.log('Questi sono i film della ricerca', films);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};

	useEffect(() => {
		getFilm();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container className='bg-black'>
			<p>{yourGenre}</p>
			<Carousel indicators={false} controls={false} className='my-5'>
				<Carousel.Item interval={4000}>
					<Row>
						<Col className='d-flex justify-content-center'>
							{films
								.map((film) => (
									<Link key={film.imdbID} to={'/movie-details/' + film.imdbID}>
										<Image src={film.Poster} alt='test' width='240px' className='mx-2' />
									</Link>
								))
								.slice(0, 5)}
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<Row>
						<Col className='d-flex justify-content-center'>
							{films
								.map((film) => (
									<Link key={film.imdbID} to={'/movie-details/' + film.imdbID}>
										<Image src={film.Poster} alt='test' width='240px' className='mx-2' />
									</Link>
								))
								.slice(5, 10)}
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
export default CarouselGenge;
