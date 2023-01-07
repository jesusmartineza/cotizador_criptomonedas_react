import styled from '@emotion/styled';

const ContenedorDatos = styled.div`
	color: #fff;
`;

const Texto = styled.p``;

const Precio = styled.span``;

export const Resultado = ({ resultado }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

	return (
		<ContenedorDatos>
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
		</ContenedorDatos>
	);
};
