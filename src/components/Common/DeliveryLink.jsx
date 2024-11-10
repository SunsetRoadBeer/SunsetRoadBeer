import styled from 'styled-components'
import { C, Lo } from '../../Utils'

const DeliveryLink = ({ className }) => {
		return (
				<StlDeliveryLink
						className={className}
						href='https://www.theboogaloobali.com/products/beer/'
						target='_blank'
						rel='noreferrer' />
		)
}

const StlDeliveryLink = styled.a`
  ${C.isDesktop} {
				background-image: ${Lo('delivery-desktop', true, 'svg')};
				width: 116px;
				height: 81px;
		};
		${C.isMobile} {
				background-image: ${Lo('delivery-mobile', true, 'svg')};
				width: 200px;
				height: 45px;
		}
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		display: block;
`

export { DeliveryLink }