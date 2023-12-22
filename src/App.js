import styled from 'styled-components'
import { Sky } from './components/MobileLayout'
import LanguageSwitch from './components/LanguageSwitch'
import { useEffect, useRef } from 'react'
import { C } from './Utils'
import DesktopLayout from './components/DesktopLayout'
import MobileLayout from './components/MobileLayout'
import { useScrollTopContext, useScreenContext } from './Contexts'
import Modal from './components/Modals/'

const App = () => {
		const appRef = useRef(null)
		const { setScrollTop } = useScrollTopContext()
		const { setScreenWidth } = useScreenContext()
		const isDesktop = document.documentElement.clientWidth > C.MAX_MOBILE_WIDTH
		const desktopLayoutRef = useRef(isDesktop ? <DesktopLayout /> : null)
		const mobileLayoutRef = useRef(isDesktop ? null : <MobileLayout />)

		console.log('RENDER APP');

		useEffect(() => {
				appRef.current?.scrollTo(0, 0)

					const onScroll = ({ target }) => {
						appRef.current.dataset.scrollTop = target.scrollTop
						setScrollTop(target.scrollTop)
				}

				if (!isDesktop) appRef.current.addEventListener('scroll', onScroll)
				const handleResize = () => {
						const { clientWidth } = document.documentElement
						const isCurrentlyDesktop = clientWidth > C.MAX_MOBILE_WIDTH
						setScreenWidth(clientWidth)

						console.log('ON RESIZE');

						if (isCurrentlyDesktop) {
								appRef.current.scrollTo(0, 0)
								if (!desktopLayoutRef.current) {
										desktopLayoutRef.current = <DesktopLayout />
								}
								appRef.current.removeEventListener('scroll', onScroll)
						} else {
								if (!mobileLayoutRef.current) mobileLayoutRef.current = <MobileLayout />
								appRef.current.addEventListener('scroll', onScroll)
						}
				}

				window.addEventListener('resize', handleResize)
				return () => {
						window.removeEventListener('resize', handleResize)
				}
		}, [])

		return (
				<StlApp
						id='app'
						ref={appRef}
						className='blurred'>
						<Sky />
						<LanguageSwitch />
						<Modal appRef={appRef} />
						{desktopLayoutRef.current}
						{mobileLayoutRef.current}
				</StlApp>
		)
}
	
const StlApp = styled.div`
		height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
		perspective: 2px;
		width: 100%;
		position: relative;
		&.blurred {
				overflow: hidden;
		}
`

export default App

//email client:
//customer: 8CD017949895C54DEBE04E9E91BA82D58E782131BB912DC89EC11B7916E6182FCCCC73AC43158947C6F03B27F1DB9E21
//password: 685DF188C26DD176C28E28224E1D9730C90C