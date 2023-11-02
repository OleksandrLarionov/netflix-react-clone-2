import { Container, Spinner } from 'react-bootstrap/Container';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
const myKey = '5774d0d9';

const MovieDetails = () => {
	const params = useParams();
	const [MovieDetails, setMovieDetails] = useState(null);

	const getFilm = async () => {
		try {
			const response = await fetch(
				'http://www.omdbapi.com/?apikey=' + myKey + '&i=' + params.movieId
			);
			if (response.ok) {
				const data = await response.json();
				const films = data.Search;
				// setFilms(films);
				console.log('Questi sono i film della ricerca', films);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};

	useEffect(() => {
		console.log('ciao', params.movieId);
		getFilm();
	}, []);
	return (
		<Container>
			<Row>
				<Col>
					{MovieDetails === null && (
						<div className='text-center h-100 d-flex justify-content-center align-items-center'>
							<Spinner animation='border' variant='success' />
						</div>
					)}
					{MovieDetails && (
						<Image
							src={MovieDetails.Poster}
							alt='test'
							width='240px'
							className='mx-2'
							key={MovieDetails.movieId}
						/>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default MovieDetails;
