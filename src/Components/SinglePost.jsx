import { deleteHazard, increaseViewCount } from "../Helpers/hazard";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCheckChange } from "../Store/storingData";
import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({ data, fromMyPosts }) => {
	const dispatch = useDispatch();
	const accessToken = useSelector((state) => state.accessToken);
	const navigate = useNavigate();
	const increaseView = (e, hazardId) => {
		e.preventDefault();
		if (hazardId) {
			increaseViewCount({ hazardId: hazardId }, accessToken)
				.then((response) => {
					navigate(`/post/${hazardId}`);
					dispatch(setCheckChange());
					if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to increase view count! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Did not get Hazard Id!");
		}
	};
	const removeHazard = (e, hazardId) => {
		e.preventDefault();
		if (hazardId) {
			deleteHazard({ hazardId: hazardId }, accessToken)
				.then((response) => {
					if (!response?.error) {
						toast.success("Deleted!");
						dispatch(setCheckChange());
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to increase view count! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Did not get Hazard Id!");
		}
	};
	return (
		<div className="w-[100%] p-3 sxl:h-[180px] md:h-[170px] min-h-[230px] max-h-[200px] first:mt-[0px] mt-[10px] bg-[#fff] rounded-[20px] flex flex-col items-center justify-center">
			<div className="flex mb-5 w-[100%] h-[10%] justify-between px-3 pt-1 text-[#677094] sxl:text-[12px] md:text-[22px] font-[700]">
				<p>{data.companyName}</p>
				<p className="text-base">{data.dateOccurred.slice(0, 10)}</p>
			</div>
			<div className="w-[100%] mb-4 max-h-[100px] my-[5px] h-[45%] px-3 flex justify-center items-center text-[#272343] font-[500] sxl:text-[12px] sm:text-[16px] md:text-[17px] break-words text-ellipsis sxl:leading-[12px] sm:leading-[20px]">
				{data.problem}
			</div>
			<div className="w-[100%] h-[45%] max-h-[50px] px-3 flex sxl:flex-col md:flex-row justify-between sxl:items-between md:items-center">
				<div className="sxl:w-full md:w-fit h-[40%] flex sxl:justify-start md:justify-between items-center mb-1">
					<p className=" text-white w-fit bg-red-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{data.industry}</p>
					<p className=" text-white w-fit bg-yellow-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{data.type}</p>
					<p className=" text-white w-fit bg-blue-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">{data.hazardLevel}</p>
					<p className=" text-white w-fit bg-green-400  md:inline-block sxl:text-[12px] sm:text-[14px] sxl:mr-1 md:mr-2 md:text-[15px] px-2 py-1 font-normal rounded-sm">
						{data.effectDuration.toFixed(3)} days
					</p>
				</div>
				<div className="sxl:w-full md:w-2/5 h-[60%] flex sxl:justify-end md:justify-end items-center">
					{fromMyPosts && (
						<>
							<Link to={`/edithazard/${data.hazardId}`} className="flex mr-4">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										fill="#000"
										d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"
									/>
								</svg>
							</Link>
							<button
								onClick={(e) => {
									removeHazard(e, data.hazardId);
								}}
								className="flex mr-4"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
									<path fill="none" d="M0 0h24v24H0z" />
									<path fill="#000" d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm3-3V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9zm0 8v6h2v-6H9zm4 0v6h2v-6h-2z" />
								</svg>
							</button>
						</>
					)}
					{!fromMyPosts && (
						<button className="mr-4">
							<svg width="25" height="25" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1 25.328V2.53125C1 1.76197 1.70383 1 2.75 1H19.25C20.2962 1 21 1.76197 21 2.53125V25.328L11.4731 20.2127L11 19.9587L10.5269 20.2127L1 25.328Z"
									stroke="#272343"
									strokeWidth="2"
								/>
							</svg>
						</button>
					)}
					<div className="flex mr-4">
						<svg width="20" height="20" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M24.8489 7.69965C22.4952 3.1072 17.8355 0 12.5 0C7.16447 0 2.50345 3.10938 0.151018 7.70009C0.0517306 7.89649 0 8.11348 0 8.33355C0 8.55362 0.0517306 8.77061 0.151018 8.96701C2.50475 13.5595 7.16447 16.6667 12.5 16.6667C17.8355 16.6667 22.4965 13.5573 24.8489 8.96658C24.9482 8.77018 25 8.55319 25 8.33312C25 8.11304 24.9482 7.89605 24.8489 7.69965ZM12.5 14.5833C11.2638 14.5833 10.0555 14.2168 9.02766 13.53C7.99985 12.8433 7.19878 11.8671 6.72573 10.7251C6.25268 9.58307 6.12891 8.3264 6.37007 7.11402C6.61123 5.90164 7.20648 4.78799 8.08056 3.91392C8.95464 3.03984 10.0683 2.44458 11.2807 2.20343C12.493 1.96227 13.7497 2.08604 14.8917 2.55909C16.0338 3.03213 17.0099 3.83321 17.6967 4.86102C18.3834 5.88883 18.75 7.0972 18.75 8.33333C18.7504 9.15421 18.589 9.96711 18.275 10.7256C17.9611 11.484 17.5007 12.1732 16.9203 12.7536C16.3398 13.3341 15.6507 13.7944 14.8922 14.1084C14.1338 14.4223 13.3208 14.5837 12.5 14.5833ZM12.5 4.16667C12.1281 4.17186 11.7586 4.22719 11.4015 4.33116C11.6958 4.73119 11.8371 5.22347 11.7996 5.71873C11.7621 6.21398 11.5484 6.6794 11.1972 7.0306C10.846 7.38179 10.3806 7.5955 9.88537 7.63297C9.39012 7.67043 8.89784 7.52917 8.49781 7.23481C8.27001 8.07404 8.31113 8.96357 8.61538 9.77821C8.91962 10.5928 9.47167 11.2916 10.1938 11.776C10.916 12.2605 11.7719 12.5063 12.641 12.4788C13.5102 12.4514 14.3489 12.152 15.039 11.623C15.7291 11.0939 16.236 10.3617 16.4882 9.52951C16.7404 8.69729 16.7253 7.80693 16.445 6.98376C16.1647 6.16058 15.6333 5.44602 14.9256 4.94067C14.2179 4.43532 13.3696 4.16462 12.5 4.16667Z"
								fill="#677094"
							/>
						</svg>
						<p className=" text-[#677094] sxl:text-[12px] md:text-[15px] font-[700] ml-1">{data.views}</p>
					</div>
					{!fromMyPosts && <button
						onClick={(e) => increaseView(e, data.hazardId)}
						className="bg-[#EED132] flex justify-center items-center text-[#000] sxl:w-[150px] md:w-[200px] sxl:h-[28px] md:h-[45px] rounded-[40px] sxl:text-[13px] md:text-[18px] font-[700] hover:bg-[rgba(238,209,50,0.8)]"
					>
						SOLUTION
					</button>}
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
