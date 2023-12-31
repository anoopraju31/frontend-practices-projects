import {
	Footer,
	HeroSection,
	JobTeaser,
	JuanpeBolivar,
	Media,
	Navbar,
	ProductCollage,
	TextBody,
} from './components'
import { textBody } from './utills/textBody'

const App = () => {
	return (
		<div className='max-w-[1600px] mx-auto bg-white overflow-hidden'>
			<Navbar />
			<HeroSection />

			<TextBody
				title={textBody[0].title}
				highlightedTitleText={textBody[0].highlightedTitleText}
				description={textBody[0].description}
			/>

			<ProductCollage position='right' />

			<TextBody
				title={textBody[1].title}
				description={textBody[1].description}
			/>

			<JuanpeBolivar />

			<TextBody
				title={textBody[2].title}
				description={textBody[2].description}
			/>

			<ProductCollage position='left' />

			<TextBody
				title={textBody[3].title}
				description={textBody[3].description}
			/>

			<Media />

			<TextBody
				title={textBody[4].title}
				description={textBody[4].description}
			/>

			<ProductCollage position='middle' />

			<TextBody
				title={textBody[5].title}
				description={textBody[5].description}
			/>

			<JobTeaser />

			<Footer />
		</div>
	)
}

export default App
