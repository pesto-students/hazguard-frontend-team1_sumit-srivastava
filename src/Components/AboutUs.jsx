const AboutUs = ({ aboutUsRef }) => {
	return (
		<section ref={aboutUsRef} className="max-w-8xl px-16 bg-white pb-16">
			<h1 className="text-5xl text-center my-16 font-bold">About Us</h1>
			<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 md:max-w-2xl lg:max-w-none">
				<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
					<img className="h-16 w-16" src="" alt="" />
					<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Devansh Dalmia</h4>
					<p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
					<img className="h-16 w-16" src="" alt="" />
					<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Dharmik Abhangi</h4>
					<p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
