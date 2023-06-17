import { HeroSection, Navbar, TextBody } from './components'

const App = () => {
	return (
		<div className='max-w-[1600px] mx-auto bg-white'>
			<Navbar />
			<HeroSection />
			{/* <div className='h-[600vh] bg-slate-500'></div> */}
			<TextBody
				title='We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.'
				highlightedTitleText={['Live', 'Push', 'Link']}
			/>
		</div>
	)
}

export default App
