import { HeroSection, Navbar, TextBody } from './components'
import { textBody } from './utills/textBody'

const App = () => {
	return (
		<div className='max-w-[1600px] mx-auto bg-white'>
			<Navbar />
			<HeroSection />
			{/* <div className='h-[600vh] bg-slate-500'></div> */}

			{textBody.map(({ id, title, highlightedTitleText, description }) => (
				<TextBody
					key={id}
					title={title}
					highlightedTitleText={highlightedTitleText}
					description={description}
				/>
			))}
		</div>
	)
}

export default App
