import React from 'react'
import '@/fonts/Axiforma/stylesheet.css'
import Layout from '@theme/Layout'
import HeaderHero from '@/components/Home/HeaderHero'
import BuildStack from '@/components/Home/BuildStack'


function HomeWrapper(): React.ReactElement {
	return (
		<Layout
			description="Description will go into a meta tag in <head />"
			wrapperClassName="homepage"
		>
			<HeaderHero />
			<main>
				<BuildStack />
				{/* <BestPractices /> */}
				{/* <GetStarted /> */}
			</main>
		</Layout>
	)
}

export default HomeWrapper
