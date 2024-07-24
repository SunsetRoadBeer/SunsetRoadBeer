import styled from 'styled-components'
import { C } from '../../Utils'
import { SocialMediaLink } from './'

const contactMap = {
		facebook: 'https://www.facebook.com/people/SunsetroadBeer/100088255544244/',
		instagram: 'https://www.instagram.com/sunsetroad.beer/',
		whatsapp: 'https://wa.me/6282130003735',
		telegram: 'https://t.me/6282130003735'
}

const contactArray = Object.keys(contactMap)

const SocialMediaList = () => {
		return (
				<StlSocialMediaList>
						{contactArray.map(contact => (
								<SocialMediaLink
										key={contact}
										contact={contact}
										href={contactMap[contact]} />))}
				</StlSocialMediaList>
		)
}

const StlSocialMediaList = styled.ul`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0;
		list-style: none;
		${C.isDesktop} {
				width: 212px;
				margin: -15px auto 0;
		};
		${C.isMobile} {
				width: 260px;
				margin: 0 auto;
		};
`

export { SocialMediaList }
