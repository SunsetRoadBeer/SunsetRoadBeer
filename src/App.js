import styled from 'styled-components'
import LanguageSwitch from './components/LanguageSwitch'
import { useEffect, useRef } from 'react'
import { C } from './Utils'
import DesktopLayout from './components/DesktopLayout'
import MobileLayout from './components/MobileLayout'
import { useScrollTopContext, useScreenContext } from './Contexts'
import Modal from './components/Modals/'

const App = () => {
		const appRef = useRef(null)
		const shadowRef = useRef(null)
		const { setScrollTop } = useScrollTopContext()
		const { setScreenWidth } = useScreenContext()
		const isDesktop = document.documentElement.clientWidth > C.MAX_MOBILE_WIDTH
		const desktopLayoutRef = useRef(isDesktop ? <DesktopLayout /> : null)
		const mobileLayoutRef = useRef(isDesktop ? null : <MobileLayout />)
		const onScroll = ({ target }) => {
				setScrollTop(target.scrollTop)
		}

		useEffect(() => {
				appRef.current?.scrollTo(0, 0)

				if (!isDesktop) appRef.current.addEventListener('scroll', onScroll)
				const handleResize = () => {
						const { clientWidth } = document.documentElement
						const isCurrentlyDesktop = clientWidth > C.MAX_MOBILE_WIDTH
						setScreenWidth(clientWidth)

						if (isCurrentlyDesktop) {
								setScrollTop(0)
								appRef.current?.scrollTo(0, 0)
								const shadowEl = shadowRef.current
								if (shadowEl) shadowEl.style.transform = 'translateY(0)'

								if (!desktopLayoutRef.current) {
										desktopLayoutRef.current = <DesktopLayout />
								}
								appRef.current.removeEventListener('scroll', onScroll)
						} else {
								if (!mobileLayoutRef.current) mobileLayoutRef.current = <MobileLayout />
								appRef.current.addEventListener('scroll', onScroll)
								const { scrollTop, clientHeight, lastChild } = appRef.current
								const { scrollHeight } = lastChild
								if (scrollTop + clientHeight >= scrollHeight) appRef.current?.scrollTo(0, scrollHeight - clientHeight)
						}
				}

				window.addEventListener('resize', handleResize)
				const orientation = window.matchMedia('(orientation: portrait)')

				orientation.addEventListener('change', handleResize)
				return () => {
						window.removeEventListener('resize', handleResize)
						orientation.removeEventListener('change', handleResize)
				}
		}, [])

		return (
				<StlApp
						id='app'
						ref={appRef}
						className='blurred'>
						<LanguageSwitch />
						<Modal appRef={appRef} ref={shadowRef} />
						{desktopLayoutRef.current}
						{mobileLayoutRef.current}
				</StlApp>
		)
}

const StlApp = styled.div`
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		width: 100vw;
		position: relative;
		&.blurred {
				overflow: hidden;
		}
`

export default App