import { useSectionContext } from '../../Contexts'
import { Lo } from '../../Utils'
import styled from 'styled-components'
import { DesktopInfo } from '../Info'
import { DesktopProducts } from '../Products'
import { DesktopPartners } from '../Partners'
import { useState, useEffect, memo } from 'react'

const Content = memo(() => {
		const { section } = useSectionContext()
		const [products, setProducts] = useState(section === 'products' ? <DesktopProducts /> : null)
		const [partners, setPartners] = useState(section === 'partners' ? <DesktopPartners /> : null)
		const [info, setInfo] = useState(section === 'info' ? <DesktopInfo /> : null)

		useEffect(() => {
				if (!products) setProducts(<DesktopProducts />)
				if (!partners) setPartners(<DesktopPartners />)
				if (!info) setInfo(<DesktopInfo />)
		}, [])

		return (
				<StlContent>
						<ProductsContainer>{products}</ProductsContainer>
						<Container>
								<Logo src={Lo('logo', false, 'svg')} key='logo' alt='logo' />
								<PartnersContainer>{partners}</PartnersContainer>
								<InfoContainer>{info}</InfoContainer>
						</Container>
				</StlContent>
		)
})

const StlContent = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		position: inherit;
		.transitioning & {
				position: relative;
		}
`

const ProductsContainer = styled.div`
		position: inherit;
		overflow-y: visible;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.5s ease-in-out;
		.products & {
				opacity: 1;
				width: 100%;
				height: 100%;
				padding: 5px 0 5px;
				pointer-events: all;
		};
		.transitioning & {
				position: absolute;
				padding: 5px 0 5px;
				width: 100%;
				height: 100%;
		};
`

const Container = styled.div`
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow-x:	hidden;
		position: relative;
		.products & {
				position: absolute;
				pointer-events: none;
		};
		.transitioning & {
				position: relative;
		}
`

const PartnersContainer = styled.div`
		position: absolute;
		height: 100%;
		top: 0;
		right: 0;
		opacity: 0;
		pointer-events: none;
		transition: all 0.5s ease-in-out;
		.partners & {
				position: inherit;
				opacity: 1;
				pointer-events: all;
		};
`

const InfoContainer = styled.div`
		position: absolute;
		height: 100%;
		top: 0;
		right: 0;
		opacity: 0;
		pointer-events: none;
		transition: all 0.5s ease-in-out;
		.info & {
				position: inherit;
				opacity: 1;
				pointer-events: all;
		};
`

const Logo = styled.img`
		display: block;
		width: 195px;
		height: 200px;
		margin-left: 10px;
		opacity: 1;
		transition: all 0.5s ease-in-out;
		.products & {
				opacity: 0;
		}
`

export { Content }