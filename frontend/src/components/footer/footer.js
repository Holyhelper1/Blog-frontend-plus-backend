import { useEffect, useState } from 'react';
import styled from 'styled-components';

 const FooterContainer = ( {className}) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=acd4f346c669d7400f4dbbeb7f1350e0',
		)
			.then((res) => res.json())
			.then(({ main, name, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});

	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>
			<div>
				<div>{city}, {new Date().toLocaleDateString('ru', {day: 'numeric', month: 'long'})}</div>
				<div>{temperature}°C {weather}</div>
			</div>

		</div>
	);
};

 export const Footer = styled(FooterContainer)`
display: flex;
justify-content: space-between;
align-items: center;
width: 1000px;
height: 120px;
padding: 20px 40px;
box-shadow: 0 2px 17px #000;
background-color: #fff;
font-weight: bold;
 `
