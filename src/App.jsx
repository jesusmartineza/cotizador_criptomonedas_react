//importaciones de react y/o tereceros
import { useState } from 'react';
import styled from '@emotion/styled';
//Componentes Creados
import { Formulario } from './components/Formulario';

//Importaciones de imagenes
import ImagenCripto from './img/imagen-criptos.png';

//Otra de las formas de hacer y escribir estilos css, es styled-components
//Y su forma es crear componentes que ya contengan ciertas propiedades de css y son componentes por que tambien se crean con sus mismas reglas, por ejemplo que su primer letra sea en mayusculas y que despues se use la palabra styled seguida de alguna etiqueta de html y entre backsticks el css correspondiente Ejemplo: Contenedor = styled.div`propiedades css`

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`;

const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	margin: 100px auto 0 auto;
	display: block;
`;

const Heading = styled.h1`
	font-family: 'Lato', sans-serif;
	color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;
	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a0fe;
		display: block;
		margin: 10px auto 0 auto;
	}
`;

function App() {
	return (
		<Contenedor>
			<Imagen src={ImagenCripto} alt='Imagen Criptos' />

			<div>
				<Heading>Cotiza Criptomonedas al Instante</Heading>
				<Formulario />
			</div>
		</Contenedor>
	);
}

export default App;
