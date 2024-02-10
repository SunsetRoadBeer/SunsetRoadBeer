import { C } from '../../Utils'
import styled from 'styled-components'
import Header from '../Header'
import { DesktopFooter } from '../Footer'
import { Heading, DeliveryLink, DistributorMapTrigger } from '../Common'
import { Content, Contacts, Background } from './'
import { memo } from 'react'

const DesktopLayout = memo(() => {
		const initSection = localStorage.getItem('section') || 'products'

		return (
				<StlDesktopLayout id='desktop-layout' className={initSection}>
						<Background />
						<Header />
						<Main>
								<UpperContainer>
										<div>
												<DeliveryLink />
										</div>
										<div>
												<Heading />
										</div>
										<div>
												<DistributorMapTrigger />
										</div>
								</UpperContainer>
								<ContentContainer>
										<Content />
										<Contacts />
								</ContentContainer>
						</Main>
						<DesktopFooter />
				</StlDesktopLayout>
		)
})

const StlDesktopLayout = styled.div`
		${C.isDesktop} {
				display: flex;
		};
		${C.isMobile} {
				display: none;
		};
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		flex-direction: column;
		min-height: ${C.MIN_DESKTOP_HEIGHT}px;
		height: 100%;
		transition: background 0.5s ease-in-out;
`

const Main = styled.main`
		z-index: 1;
		flex: 1;
		width: ${C.CONTENT_AREA_WIDTH};
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 20px;
		align-items: center;
		transition: opacity 0.5s ease-in-out;
		.blurred & {
				opacity: 0;
		};
`

const UpperContainer = styled.div`
		display: flex;
		flex-direction: row;
		width: 100%;
		>	div {
				flex: 1;
				display: flex;
				align-items: top;
				&:first-child {
						justify-content: flex-start;
				};
				&:last-child {
						justify-content: flex-end;
				};
				> * {
						margin-bottom: 0;
				};
		}
`

const ContentContainer = styled.div`
		background-color: ${C.SHADOW_BG};
		width: ${C.CONTENT_AREA_WIDTH};
		height: ${C.CONTENT_AREA_HEIGHT};
		padding: 15px 10px 10px;
		border-radius: ${C.CONTENT_AREA_BORDER_RADIUS};
		display: flex;
		flex-direction: column;
`

export default DesktopLayout