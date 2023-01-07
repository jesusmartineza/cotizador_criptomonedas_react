//importaciones de react y/o tereceros
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
//Componentes Creados
import { Formulario } from './components/Formulario';
import { Resultado } from './components/Resultado';

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
	const [monedas, setMonedas] = useState({});
	const [resultado, setResultado] = useState({});

	useEffect(() => {
		//Al usar Object.keys es pormonedas es un objeto y revisaremos por su key o id si en el objeto hay algo para que se ejecute el useEffect
		if (Object.keys(monedas).length > 0) {
			//Aqui haremos una consulta para traer la contizacion

			// console.log(monedas);
			const cotizarCripto = async () => {
				// setResultado({});
				//Haciendo un object destruccion a monedas para extrer moneda y criptomoneda
				const { moneda, criptomoneda } = monedas;

				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();
				// console.log(resultado);

				//Una forma de acceder a determinados datos o propiedades de un objeto de forma dinamica usando variables es la siguiente envolviendo la variable dentro de un [] y en este caso le estamos diciendo que busque mediante el id o las iniciales tanto de la criptomoneda como de la moneda

				setResultado(resultado.DISPLAY[criptomoneda][moneda]);
				// console.log(resultado.DISPLAY[criptomoneda][moneda]);
			};
			cotizarCripto();
		}
	}, [monedas]);

	return (
		<Contenedor>
			<Imagen src={ImagenCripto} alt='Imagen Criptos' />

			<div>
				<Heading>Cotiza Criptomonedas al Instante</Heading>
				<Formulario setMonedas={setMonedas} />

				{/* Revisamos si al momento de dar en cotizar ya tenemos una propiedad por ejemplo PRICE pues ya se mostrara el componente con los resultados de la cotizacion */}
				{resultado.PRICE && <Resultado resultado={resultado} />}
			</div>
		</Contenedor>
	);
}

export default App;
