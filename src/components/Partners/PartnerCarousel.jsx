import Carousel from '../Carousel'
import { useMemo, useRef } from 'react'
import { PartnerGroup } from './PartnerGroup'

const PartnerCarousel = ({ maxGroupSize = 5, getControls, ...restProps }) => {
		const partnerContainerRef = useRef(null)
		const partnerGroups = useMemo(() => {
				const doublePartnerArray = Object.keys(doublePartnerMap)
				const singlePartnerArray = Object.keys(singlePartnerMap)
				let result = []

				const maxShortRowSize = Math.floor(maxGroupSize / 2)
				const maxLongRowSize = maxGroupSize - maxShortRowSize
				const maxDoublePartnerPerGroupCount = Math.floor(maxLongRowSize / 2) + Math.floor(maxShortRowSize / 2)
				const doublePartnerRemainder = doublePartnerArray.length % maxDoublePartnerPerGroupCount
				let totalGroupCount = Math.floor(doublePartnerArray.length / maxDoublePartnerPerGroupCount)
				let singlePartnerCount = singlePartnerArray.length - totalGroupCount * (maxGroupSize - maxDoublePartnerPerGroupCount * 2)
				if (doublePartnerRemainder) {
						totalGroupCount++
						singlePartnerCount -= maxGroupSize - doublePartnerRemainder * 2
				}

				if (singlePartnerCount > 0) totalGroupCount += Math.ceil(singlePartnerCount / maxGroupSize)
				const minDoublePartnerPerGroupCount = Math.floor(doublePartnerArray.length / totalGroupCount)
				let doublePartnerPerGroupRemainder = doublePartnerArray.length % totalGroupCount
				let compensatingSinglePartnerPerGroupCount = (totalGroupCount - doublePartnerPerGroupRemainder) * 2
				if (compensatingSinglePartnerPerGroupCount > singlePartnerArray.length) compensatingSinglePartnerPerGroupCount = singlePartnerArray.length
				let singlePartnerPerGroupRemainder = (singlePartnerArray.length - compensatingSinglePartnerPerGroupCount) % totalGroupCount
				if (singlePartnerPerGroupRemainder < 0) singlePartnerPerGroupRemainder = 0

				for (let i = 0; i < totalGroupCount; i++) {
						let shortRowSlotCount = maxShortRowSize
						let longRowSlotCount = maxLongRowSize
						let doublePartnerPerCurrentGroupCount = minDoublePartnerPerGroupCount
						let singlePartnerPerCurrentGroupCount = 0
						if (doublePartnerPerGroupRemainder) {
								doublePartnerPerCurrentGroupCount++
								doublePartnerPerGroupRemainder--
						} else if (compensatingSinglePartnerPerGroupCount) {
								singlePartnerPerCurrentGroupCount += compensatingSinglePartnerPerGroupCount > 1 ? 2 : 1
						}

						if (singlePartnerPerGroupRemainder) {
								singlePartnerPerCurrentGroupCount++
								singlePartnerPerGroupRemainder--
						}

						let doublePartnerPerLongRowCount = Math.ceil(doublePartnerPerCurrentGroupCount / 2)
						let doublePartnerPerShortRowCount = doublePartnerPerCurrentGroupCount - doublePartnerPerLongRowCount
						shortRowSlotCount -= doublePartnerPerShortRowCount * 2
						longRowSlotCount -= doublePartnerPerLongRowCount * 2
						let longRow = []
						let shortRow = []

						while (singlePartnerPerCurrentGroupCount || doublePartnerPerLongRowCount || doublePartnerPerShortRowCount) {
								if (doublePartnerPerShortRowCount) {
										const $partnerName = doublePartnerArray.pop()
										const $link = doublePartnerMap[$partnerName]
										shortRow.push({ $partnerName, $link, $double: true })

										doublePartnerPerShortRowCount--
								}

								if (singlePartnerPerCurrentGroupCount) {
										const $partnerName = singlePartnerArray.pop()
										const $link = singlePartnerMap[$partnerName]
										if (shortRowSlotCount >= longRowSlotCount) {
												shortRow.push({ $partnerName, $link })
												shortRowSlotCount--
										} else {
												longRow.push({ $partnerName, $link })
												longRowSlotCount--
										}

										singlePartnerPerCurrentGroupCount--
								}

								if (doublePartnerPerLongRowCount) {
										const $partnerName = doublePartnerArray.pop()
										const $link = doublePartnerMap[$partnerName]
										longRow.push({ $partnerName, $link, $double: true })

										doublePartnerPerLongRowCount--
								}
						}

						result.push([
								shortRow,
								longRow
						])
				}

				return result
		}, [maxGroupSize])

		const carouselProps = {
				dataSet: partnerGroups,
				content: [{
						ref: partnerContainerRef,
						childEl: PartnerGroup,
						getControls,
						...restProps
				}],
				autoRun: true
		}

		return (
				<Carousel {...carouselProps} />
		)
}

const doublePartnerMap = {
		Fabbrica: 'https://instagram.com/pizzafabbricabali?igshid=MzRlODBiNWFlZA==',
		Hubble: 'https://instagram.com/hubblebali?igshid=MzRlODBiNWFlZA==',
		LigaTennis: 'https://instagram.com/bali.tennis?igshid=MzRlODBiNWFlZA==',
		SouthEast: 'https://instagram.com/southeastbrewing?igshid=MzRlODBiNWFlZA==',
		Accent: 'https://www.instagram.com/accent.bali?igsh=MXZxa2t1em1wNGRyNA==',
		Amplitude: 'https://www.instagram.com/amplitude.coffee?igsh=MWlic2c2aXN6bmM2Nw==',
		EatMe: 'https://maps.app.goo.gl/xnsHoFvCsCaDLpn97?g_st=ic',
		Finns: 'https://www.instagram.com/finnsrecclub?igsh=MTY1c2I0MGc5aDN0OA==',
		Lolas: 'https://www.instagram.com/reel/CtTW90gxePE/?igsh=b3dzNjdwcHpiMWRv',
		NowBeer: 'https://instagram.com/nowbeerbar?igshid=MzRlODBiNWFlZA==',
		Mamu: 'https://www.instagram.com/mamu_bali?igsh=MTF3anAzOTg5cGMxYQ==',
		Crayfish: 'https://www.instagram.com/crayfish_bar/?igshid=MzRlODBiNWFlZA%3D%3D',
		Boogaloo: 'https://www.theboogaloobali.com/products/beer/'
}

const singlePartnerMap = {
		Draniki: 'https://instagram.com/draniki.bali?igshid=MzRlODBiNWFlZA==',
		BaliWood: 'https://instagram.com/baliwood.fun?igshid=MzRlODBiNWFlZA==',
		StarkBotique: 'https://instagram.com/starkcraftbeergarden?igshid=MzRlODBiNWFlZA==',
		Gabets: 'https://instagram.com/gabetspub?igshid=MzRlODBiNWFlZA==',
		MeltingPot: 'https://meltingpotbali.com/',
		TwoThousandEighty: 'https://www.2080burger.net',
		Izzi: 'https://instagram.com/izzi.bali?igshid=MzRlODBiNWFlZA==',
		SushiShop: 'https://instagram.com/sushishop.bali?igshid=MzRlODBiNWFlZA==',
		WarungCanteen: 'https://instagram.com/warung_canteen?igshid=MzRlODBiNWFlZA==',
		AnythingBrew: 'https://www.instagram.com/anythingbrew?igsh=ZXB3OThvc3JjdjNi',
		Ele: 'https://www.instagram.com/ele.rest?igsh=Y3EyMnJrd2V1dWgy',
		GrandHyatt: 'https://www.instagram.com/grandhyattbali?igsh=OWV3ZmZtbGtrejhq',
		Hedonist: 'https://www.instagram.com/hedonist_space_bali?igsh=bHdkdWdic2NrMHdv',
		Joy: 'https://www.instagram.com/joycafe.bali?igsh=MTYxZ2NpdHViamlxZg==',
		Seed: 'https://www.instagram.com/seed_bali_?igsh=MXBwczlnNnkwMnY4aw==',
		TippsyShop: 'https://www.tippsyshop.com/'
}

export { PartnerCarousel }