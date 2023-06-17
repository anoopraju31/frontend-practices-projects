import { HeroSection, Navbar } from './components'

const App = () => {
	return (
		<div className='max-w-[1600px] mx-auto bg-white'>
			<Navbar />
			<HeroSection />
			{/* <div className='h-[600vh] bg-slate-500'></div> */}
		</div>
	)
}

export default App
