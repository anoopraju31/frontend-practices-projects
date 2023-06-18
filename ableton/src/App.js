import { HeroSection, Navbar, ProductCollage, TextBody } from './components'
import { textBody } from './utills/textBody'

const App = () => {
	return (
		<div className='max-w-[1600px] mx-auto bg-white'>
			<Navbar />
			<HeroSection />

			<TextBody
				title={textBody[0].title}
				highlightedTitleText={textBody[0].highlightedTitleText}
				description={textBody[0].description}
			/>

			<ProductCollage />
		</div>
	)
}

export default App
