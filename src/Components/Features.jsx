const Features = ({ featureRef }) => {
	return (
		<section ref={featureRef} className="max-w-8xl px-16 bg-white pb-16">
			<h1 className="text-5xl text-center my-16 font-bold">Features</h1>
			<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
				<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
					<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<rect className="fill-current text-[#272343]" width="64" height="64" rx="32" />
							<g strokeWidth="2">
								<path className="stroke-current text-[#eed132]" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
								<path className="stroke-current text-[#eed132]" d="M20.571 37.714h5.715L36.57 26.286h8" />
								<path className="stroke-current text-[#eed132]" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
								<path className="stroke-current text-[#eed132]" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
							</g>
						</g>
					</svg>
					<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Easy Hazard Sharing</h4>
					<p className="text-gray-600 text-center">You can share your hazard with solution easily</p>
				</div>
				<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
					<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<rect className="fill-current text-[#272343]" width="64" height="64" rx="32" />
							<g strokeWidth="2" transform="translate(19.429 20.571)">
								<circle className="stroke-current text-[#eed132]" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
								<path
									className="stroke-current text-[#eed132]"
									d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
								/>
								<path
									className="stroke-current text-[#eed132]"
									d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
								/>
							</g>
						</g>
					</svg>
					<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Location based Filter</h4>
					<p className="text-gray-600 text-center">You can sort and Filter hazards by location</p>
				</div>
				<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-md">
					<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<rect className="fill-current text-[#272343]" width="64" height="64" rx="32" />
							<g strokeLinecap="square" strokeWidth="2">
								<path className="stroke-current text-[#eed132]" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
								<path
									className="stroke-current text-[#eed132]"
									d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"
								/>
							</g>
						</g>
					</svg>
					<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Safety Leaderboard</h4>
					<p className="text-gray-600 text-center">Hazguard has safety Leaderboard based on number of post shared</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
