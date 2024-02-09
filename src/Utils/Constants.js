export const SHADOW_BG = '#00000095'
export const UI_EL_OPACITY = 0.5
export const ACTIVE_UI_EL_OPACITY = 0.9
export const CONTENT_AREA_WIDTH = '900px'
export const CONTENT_AREA_HEIGHT = '265px'
export const CONTENT_AREA_BORDER_RADIUS = '20px'
export const H1_MARGIN = '0 0 15px'
export const LAYOUT_EL_ZINDEX = 4
export const MAX_MOBILE_WIDTH = 1023
export const MAX_MOBILE_HEIGHT = 1960
export const TEXT_GOLDEN_COLOR = '#ffb44f'
export const TEXT_SHADOW_COLOR = 'rgb(34, 30, 31)'
export const TEXT_OUTLINE = `1px 1px 1px ${TEXT_SHADOW_COLOR}, -1px 1px 1px ${TEXT_SHADOW_COLOR}, 1px -1px 1px ${TEXT_SHADOW_COLOR}, -1px -1px 1px ${TEXT_SHADOW_COLOR}`
export const TEXT_SHADOW = `0px 0px 18px #000`
export const TEXT_REGULAR_OPACITY = 0.75
export const MIN_DESKTOP_HEIGHT = 500
export const MOBILE_CONTENT_WIDTH = 350
export const MODAL_SHADOW = 'rgba(12, 12, 12, 0.5)'
export const MODAL_PADDING = '20px 30px'
export const INPUT_BORDER_RADIUS = '5px'
export const INPUT_BORDER = '1px solid #B5B5B5'
export const INPUT_BG_COLOR = '#D9D9D9'
export const SKY_HEIGHT = 1550
export const isMobile = `@media (max-width: ${MAX_MOBILE_WIDTH}px)`
export const isDesktop = `@media (min-width: ${MAX_MOBILE_WIDTH + 1}px)`
export const isHorizontal = `@media (orientation: landscape)`
export const isShort = '@media (max-height: 700px)'
export const isTall = '@media (min-height: 701px)'
export const mediaOr = arr => `@media ${arr.map(m => m.slice(7)).join(', ')}`
export const mediaAnd = arr => `@media ${arr.map(m => m.slice(7)).join(' and ')}`
export const sections = ['products', 'partners', 'info']

export const GOOGLE_API_KEY = 'AIzaSyDKm6e9ZygDCRxtlvOKAShtM6Qie7KhKUQ'
export const GOOGLE_MAPS_API_KEY = 'AIzaSyBxT3wp37bKCxRFDvAh0S3ecUOyynfEWQM'
export const EMAIL_SECURITY_KEY = '773f46eb-8c97-4e10-8cae-f4bd15432259'
export const RECEIVING_EMAIL = 'info@sunsetroad.beer'
export const SENDER_EMAIL = 'customer@sunsetroad.beer'
export const partnersGradient = 'linear-gradient(to bottom, rgba(221, 159, 161, 1) 0%, 3.549382835626602%, rgba(245, 187, 168, 1) 7.098765671253204%, 9.259259328246117%, rgba(219, 199, 159, 1) 11.419752985239029%, 16.35802499949932%, rgba(244, 214, 159, 1) 21.296297013759613%, 30.86419776082039%, rgba(221, 207, 138, 1) 40.432098507881165%, 43.981482088565826%, rgba(215, 205, 101, 1) 47.53086566925049%, 50.30864179134369%, rgba(205, 213, 140, 1) 53.08641791343689%, 54.7839492559433%, rgba(171, 172, 131, 1) 56.48148059844971%, 60.80246865749359%, rgba(120, 145, 80, 1) 65.12345671653748%, 69.2901223897934%, rgba(159, 152, 113, 1) 73.45678806304932%, 75%, rgba(167, 154, 131, 1) 76.54321193695068%, 81.0185194015503%, rgba(129, 133, 98, 1) 85.4938268661499%, 86.57407462596893%, rgba(114, 130, 85, 1) 87.65432238578796%, 89.5061731338501%, rgba(78, 114, 69, 1) 91.35802388191223%, 95.67901194095612%, rgba(61, 155, 105, 1) 100%);'

export const productsGradient = 'linear-gradient(to bottom, rgba(198, 59, 64, 1) 0%, 7.251908630132675%, rgba(218, 83, 87, 1) 14.50381726026535%, 19.65648904442787%, rgba(238, 126, 137, 1) 24.809160828590393%, 29.770992696285248%, rgba(192, 120, 122, 1) 34.7328245639801%, 38.54961842298508%, rgba(224, 146, 161, 1) 42.36641228199005%, 45.70610672235489%, rgba(195, 131, 101, 1) 49.04580116271973%, 51.04961693286896%, rgba(189, 112, 95, 1) 53.05343270301819%, 56.29770755767822%, rgba(164, 133, 74, 1) 59.54198241233826%, 62.69083917140961%, rgba(80, 96, 56, 1) 65.83969593048096%, 67.84351170063019%, rgba(85, 108, 52, 1) 69.84732747077942%, 71.75572514533997%, rgba(79, 88, 38, 1) 73.66412281990051%, 75.85877776145935%, rgba(121, 106, 52, 1) 78.05343270301819%, 82.34732747077942%, rgba(81, 89, 40, 1) 86.64122223854065%, 90.07633626461029%, rgba(23, 44, 25, 1) 93.51145029067993%, 96.75572514533997%, rgba(45, 64, 36, 1) 100%);'

export const infoGradient = 'linear-gradient(to bottom, rgba(244, 120, 53, 1) 0%, 8.49282294511795%, rgba(250, 163, 50, 1) 16.9856458902359%, 18.899521231651306%, rgba(228, 164, 54, 1) 20.81339657306671%, 24.401913583278656%, rgba(219, 173, 96, 1) 27.9904305934906%, 30.382774770259857%, rgba(221, 177, 55, 1) 32.775118947029114%, 34.569378197193146%, rgba(226, 185, 54, 1) 36.36363744735718%, 37.081339955329895%, rgba(210, 183, 48, 1) 37.79904246330261%, 42.34449714422226%, rgba(205, 135, 51, 1) 46.88995182514191%, 51.435406506061554%, rgba(202, 157, 52, 1) 55.9808611869812%, 59.090909361839294%, rgba(160, 140, 50, 1) 62.20095753669739%, 64.47368562221527%, rgba(109, 114, 51, 1) 66.74641370773315%, 73.44497740268707%, rgba(122, 90, 43, 1) 80.14354109764099%, 82.17703402042389%, rgba(130, 99, 44, 1) 84.21052694320679%, 88.0382776260376%, rgba(55, 100, 50, 1) 91.86602830886841%, 95.9330141544342%, rgba(47, 93, 47, 1) 100%);'