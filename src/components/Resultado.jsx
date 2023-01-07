import styled from '@emotion/styled';

const ContenedorDatos = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;

	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 18px;
`;

const Imagen = styled.img`
	display: block;
	width: 120px;
`;

const Texto = styled.p`
	font-weight: 18px;
	span {
		font-weight: 700;
	}
`;

const Precio = styled.p`
	font-size: 20px;
	span {
		font-weight: 700;
	}
`;

export const Resultado = ({ resultado }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

	return (
		<ContenedorDatos>
			<Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
			<div>
				<Precio>
					El precio es de: <span>{PRICE}</span>
				</Precio>
				<Texto>
					Precio más alto del día: <span>{HIGHDAY}</span>
				</Texto>
				<Texto>
					Precio más bajo del día: <span>{LOWDAY}</span>
				</Texto>
				<Texto>
					Variacion ultimas 24hrs: <span>{CHANGEPCT24HOUR}</span>
				</Texto>
				<Texto>
					Última Actualización: <span>{LASTUPDATE}</span>
				</Texto>
			</div>
		</ContenedorDatos>
	);
};
