import { useParams, useNavigate } from "react-router-dom";
import { BackArrow } from "../Assets/library";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const PostPage = () => {
	const navigate = useNavigate();
	const { hazardId } = useParams();
	const userData = useSelector((state) => state.userData);
	const hazard = useSelector((state) => state.allHazards.filter((data) => data.hazardId === hazardId)[0]);
	return (
		<div className="w-[100vw] sxl:h-fit md:h-[1080px] sxl:px-[15px] md:px-[35px] py-[35px]">
			<div className="w-[100%] h-[100%] bg-[#fff] rounded-[20px] sxl:px-[15px] md:px-[30px] py-[30px] overflow-y-hidden">
				<div className="w-[100%] h-[5%] flex justify-between items-center py-[10px]">
					<button onClick={() => navigate(-1)}>
						<img src={BackArrow} alt="back" />
					</button>
					<p className="font-[700] text-[#677094] sxl:text-[12px] md:text-[20px]">{hazard.companyName}</p>
					<p className="font-[700] text-[#677094] sxl:text-[12px] md:text-[20px]">{hazard.dateOccurred.slice(0, 10)}</p>
				</div>
				<div className="w-full h-[2%] flex justify-end items-start sxl:flex-wrap md:flex-nowrap">
					{hazard.userId === userData.userId && hazard.isPublic && (
						<svg className="mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								fill="#677094"
								d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
							/>
						</svg>
					)}
					{hazard.userId === userData.userId && (
						<>
							<Link to={`/edithazard/${hazard.hazardId}`} className="flex mr-4">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										fill="#677094"
										d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
									/>
								</svg>
							</Link>
							<button
								onClick={(e) => {
									removeHazard(e, hazard.hazardId);
								}}
								className="flex mr-4"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
									<path fill="none" d="M0 0h24v24H0z" />
									<path fill="#677094" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
								</svg>
							</button>
						</>
					)}
					{!(hazard.userId === userData.userId) && (
						<>
							{userData.saved.includes(hazard._id) ? (
								<button className="mr-4" onClick={(e) => removeFromSaved(e, hazard._id)}>
									<svg width={25} height={25} viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 27V2.53125C0 1.13326 1.2312 0 2.75 0H19.25C20.7688 0 22 1.13326 22 2.53125V27L11 21.0938L0 27Z" fill="#677094" />
									</svg>
								</button>
							) : (
								<button className="mr-4" onClick={(e) => addToSaved(e, hazard._id)}>
									<svg width={25} height={25} viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M1 25.328V2.53125C1 1.76197 1.70383 1 2.75 1H19.25C20.2962 1 21 1.76197 21 2.53125V25.328L11.4731 20.2127L11 19.9587L10.5269 20.2127L1 25.328Z"
											stroke="#272343"
											strokeWidth="2"
										/>
									</svg>
								</button>
							)}
						</>
					)}
					<div className="flex justify-center items-center mr-4">
						<svg width={25} height={25} viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M24.8489 7.69965C22.4952 3.1072 17.8355 0 12.5 0C7.16447 0 2.50345 3.10938 0.151018 7.70009C0.0517306 7.89649 0 8.11348 0 8.33355C0 8.55362 0.0517306 8.77061 0.151018 8.96701C2.50475 13.5595 7.16447 16.6667 12.5 16.6667C17.8355 16.6667 22.4965 13.5573 24.8489 8.96658C24.9482 8.77018 25 8.55319 25 8.33312C25 8.11304 24.9482 7.89605 24.8489 7.69965ZM12.5 14.5833C11.2638 14.5833 10.0555 14.2168 9.02766 13.53C7.99985 12.8433 7.19878 11.8671 6.72573 10.7251C6.25268 9.58307 6.12891 8.3264 6.37007 7.11402C6.61123 5.90164 7.20648 4.78799 8.08056 3.91392C8.95464 3.03984 10.0683 2.44458 11.2807 2.20343C12.493 1.96227 13.7497 2.08604 14.8917 2.55909C16.0338 3.03213 17.0099 3.83321 17.6967 4.86102C18.3834 5.88883 18.75 7.0972 18.75 8.33333C18.7504 9.15421 18.589 9.96711 18.275 10.7256C17.9611 11.484 17.5007 12.1732 16.9203 12.7536C16.3398 13.3341 15.6507 13.7944 14.8922 14.1084C14.1338 14.4223 13.3208 14.5837 12.5 14.5833ZM12.5 4.16667C12.1281 4.17186 11.7586 4.22719 11.4015 4.33116C11.6958 4.73119 11.8371 5.22347 11.7996 5.71873C11.7621 6.21398 11.5484 6.6794 11.1972 7.0306C10.846 7.38179 10.3806 7.5955 9.88537 7.63297C9.39012 7.67043 8.89784 7.52917 8.49781 7.23481C8.27001 8.07404 8.31113 8.96357 8.61538 9.77821C8.91962 10.5928 9.47167 11.2916 10.1938 11.776C10.916 12.2605 11.7719 12.5063 12.641 12.4788C13.5102 12.4514 14.3489 12.152 15.039 11.623C15.7291 11.0939 16.236 10.3617 16.4882 9.52951C16.7404 8.69729 16.7253 7.80693 16.445 6.98376C16.1647 6.16058 15.6333 5.44602 14.9256 4.94067C14.2179 4.43532 13.3696 4.16462 12.5 4.16667Z"
								fill="#677094"
							/>
						</svg>
						<p className="text-[#677094] sxl:text-[12px] md:text-[15px] font-[700] ml-1">{hazard.views}</p>
					</div>
					<div className="w-[100%] flex sxl:justify-center md:justify-end items-center sxl:mt-3 md:mt-0">
						<p className="text-white w-fit bg-red-400 md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{hazard.industry}</p>
						<p className="text-white w-fit bg-yellow-400 md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{hazard.type}</p>
						<p className="text-white w-fit bg-blue-400 md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">
							{hazard.hazardLevel}
						</p>
						<p className="text-white w-fit bg-green-400 md:inline-block sxl:text-[12px] sm:text-[14px] md:text-[15px] px-2 py-1 font-normal rounded-sm">
							{parseInt(hazard.effectDuration) >= 1 ? parseInt(hazard.effectDuration) : hazard.effectDuration.toFixed(1)} days
						</p>
						<svg className="ml-2" width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0z" />
							<path fill="#677094" d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
						</svg>
						<p className="text-[#677094] sxl:text-[12px] sm:text-[14px] md:text-[15px] font-medium ml-1">
							{hazard.state}, {hazard.country}
						</p>
					</div>
				</div>
				<div className="w-[100%] h-[30%] flex flex-col justify-center items-start py-[20px] sxl:leading-[18px] md:leading-[25px]">
					<div className="font-[700] text-[#677094] sxl:text-[15px] md:text-[24px] mb-3">Problem</div>
					<div className="font-[500] text-[#272343] sxl:text-[15px] md:text-[20px] md:leading-[21px] sxl:overflow-y-scroll md:overflow-auto">{hazard.problem}</div>
				</div>
				{/* condition rendering for below div based on user level of subscription */}
				<div className="w-[100%] h-[65%] flex justify-between items-start flex-wrap invisible">
					<div className="sxl:w-[100%] md:w-[50%] sxl:h-[70%] md:h-[100%]">
						<div className="font-[700] text-[#677094] sxl:text-[15px] md:text-[24px] sxl:leading-[19px] md:leading-[25px] mb-3">Solution</div>
						<div className="font-[500] text-[#677094] sxl:text-[15px] md:text-[18px] sxl:leading-[17px] md:leading-[20px]">{hazard.solution}</div>
					</div>
					<div className="sxl:w-[100%] md:w-[49%] sxl:h-[30%] md:h-[90%] flex flex-wrap justify-center items-start self-center sxl:mt-10 md:mt-0">
						{hazard.images.length === 0 ? (
							"No images available"
						) : hazard.images.length === 1 ? (
							<ImageGallery
								items={[
									{
										original: hazard.images[0],
										thumbnail: hazard.images[0],
									},
								]}
								showPlayButton={false}
							/>
						) : hazard.images.length === 2 ? (
							<ImageGallery
								items={[
									{
										original: hazard.images[0],
										thumbnail: hazard.images[0],
									},
									{
										original: hazard.images[1],
										thumbnail: hazard.images[1],
									},
								]}
								showPlayButton={false}
							/>
						) : hazard.images.length === 3 ? (
							<ImageGallery
								items={[
									{
										original: hazard.images[0],
										thumbnail: hazard.images[0],
									},
									{
										original: hazard.images[1],
										thumbnail: hazard.images[1],
									},
									{
										original: hazard.images[2],
										thumbnail: hazard.images[2],
									},
								]}
								showPlayButton={false}
							/>
						) : (
							<ImageGallery
								items={[
									{
										original: hazard.images[0],
										thumbnail: hazard.images[0],
									},
									{
										original: hazard.images[1],
										thumbnail: hazard.images[1],
									},
									{
										original: hazard.images[2],
										thumbnail: hazard.images[2],
									},
									{
										original: hazard.images[3],
										thumbnail: hazard.images[3],
									},
								]}
								showPlayButton={false}
							/>
						)}
					</div>
				</div>
				{/* condition rendering for below button based on user level of subscription */}
				{/* <button className="w-[250px] h-[40px] bg-[#EED132] rounded-[30px] font-[700] text-[#08] sxl:text-[15px] lg:text-[18px] hover:bg-[rgba(238,209,50,0.8)] relative left-[50%] translate-x-[-50%] sxl:translate-y-[-10%] md:translate-y-[-100px] mt-10">
					Subscribe to Unlock
				</button> */}
				{/* add above button with same condition if free user then button will be rendered otherwise not */}
			</div>
		</div>
	);
};

export default PostPage;
