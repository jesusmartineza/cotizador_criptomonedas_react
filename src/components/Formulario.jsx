//importaciones de react y/o terceros
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
//Componentes propios
import { Error } from './Error';
//Custom Hooks
import { useSelectMonedas } from '../hooks/useSelectMonedas';
//Archivos de ayuda(funciones y mas)
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
	background-color: #80308077;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	margin-top: 30px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #51195177;
		cursor: pointer;
	}
`;

export const Formulario = ({ setMonedas }) => {
	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);

	//El state que creamos en nuestro customhook lo pasamos a este componente y aunque se llame state nosotros podemos darle otro nombre dado que esta rentornando un id, en este caso es asi pero en otros casos seria usar el nombre que mas no haga sentido segun lo que estemos haciendo

	const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
	const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
		'Elige tu Criptomoneda',
		criptos
	);

	useEffect(() => {
		const consultarApi = async () => {
			//Este es el endpoint de la api
			const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
			//Realizamos la peticion con fecth de la variable url
			const respuesta = await fetch(url);
			//Convertimos a json para poder hacer uso de la respuesta
			const resultado = await respuesta.json();

			//Crearemos un nuevo arreglo de un objeto usando map
			const arrayCriptos = resultado.Data.map((cripto) => {
				const objetoCripto = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName,
				};
				// console.log(objetoCripto);
				return objetoCripto;
			});
			setCriptos(arrayCriptos);
		};

		consultarApi();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([moneda, criptomoneda].includes('')) {
			setError(true);
			return;
		}

		setError(false);
		setMonedas({
			moneda,
			criptomoneda,
		});
	};

	return (
		<>
			{error && <Error>Todos los campos son obligatorios</Error>}
			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCriptomoneda />

				<InputSubmit type='submit' value='Cotizar' />
			</form>
		</>
	);
};
