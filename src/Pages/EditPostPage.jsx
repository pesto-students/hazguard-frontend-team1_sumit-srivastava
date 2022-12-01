import Base from "./Base";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { editHazard } from "../Helpers/hazard";
import { useSelector, useDispatch } from "react-redux";
import {
	setEditPostDataIndustry,
	setEditPostDataType,
	setEditPostDataHazardLevel,
	setEditPostDataEffectDuration,
	setEditPostDataProblem,
	setEditPostDataSolution,
	setEditPostDataDateOccurred,
	setEditPostDataIsPublic,
	setCheckChange,
	setLoading,
} from "../Store/storingData";
import { useEffect } from "react";

const EditPost = () => {
	const { hazardId } = useParams();
	const dispatch = useDispatch();
	const hazard = useSelector((state) => state.allHazards.filter((data) => data.hazardId === hazardId)[0]);
	const accessToken = useSelector((state) => state.accessToken);
	useEffect(() => {
		dispatch(setEditPostDataType(hazard.type));
		dispatch(setEditPostDataIndustry(hazard.industry));
		dispatch(setEditPostDataHazardLevel(hazard.hazardLevel));
		dispatch(setEditPostDataEffectDuration(parseInt(hazard.effectDuration) >= 1 ? parseInt(hazard.effectDuration) * 24 : hazard.effectDuration.toFixed(1) * 24));
		dispatch(setEditPostDataProblem(hazard.problem));
		dispatch(setEditPostDataSolution(hazard.solution));
		dispatch(setEditPostDataDateOccurred(hazard.dateOccurred.slice(0, 10)));
		dispatch(setEditPostDataIsPublic(hazard.isPublic));
	}, []);
	const editPostDataType = useSelector((state) => state.editPostDataType);
	const editPostDataIndustry = useSelector((state) => state.editPostDataIndustry);
	const editPostDataHazardLevel = useSelector((state) => state.editPostDataHazardLevel);
	const editPostDataEffectDuration = useSelector((state) => state.editPostDataEffectDuration);
	const editPostDataProblem = useSelector((state) => state.editPostDataProblem);
	const editPostDataSolution = useSelector((state) => state.editPostDataSolution);
	const editPostDataDateOccurred = useSelector((state) => state.editPostDataDateOccurred);
	const editPostDataIsPublic = useSelector((state) => state.editPostDataIsPublic);
	const navigate = useNavigate();
	const updateHazard = (e) => {
		e.preventDefault();
		if (
			editPostDataType !== "" &&
			editPostDataIndustry !== "" &&
			editPostDataHazardLevel !== "" &&
			editPostDataEffectDuration !== "" &&
			editPostDataProblem !== "" &&
			editPostDataSolution !== "" &&
			editPostDataDateOccurred !== "" &&
			editPostDataIsPublic !== ""
		) {
			editHazard(
				{
					hazardId: hazardId,
					type: editPostDataType,
					industry: editPostDataIndustry,
					hazardLevel: editPostDataHazardLevel,
					effectDuration: editPostDataEffectDuration,
					problem: editPostDataProblem,
					solution: editPostDataSolution,
					dateOccurred: editPostDataDateOccurred,
					isPublic: editPostDataIsPublic,
				},
				accessToken
			)
				.then((response) => {
					if (!response?.error) {
						dispatch(setEditPostDataType(""));
						dispatch(setEditPostDataIndustry(""));
						dispatch(setEditPostDataHazardLevel(""));
						dispatch(setEditPostDataEffectDuration(""));
						dispatch(setEditPostDataProblem(""));
						dispatch(setEditPostDataSolution(""));
						dispatch(setEditPostDataDateOccurred(""));
						dispatch(setEditPostDataIsPublic(""));
						dispatch(setLoading(true));
						dispatch(setCheckChange());
						toast.success("Hazard edited!");
						navigate("/myposts");
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to edit! Please try again!");
					console.log(e);
				});
		} else {
			return toast.warning("Please enter all the fields!");
		}
	};
	return (
		<>
			<Base>
				<div className="w-full sxl:h-full sm:h-[800px] sxl:p-[15px] sm:p-[30px]">
					<div className="w-full h-full bg-white rounded-2xl p-[30px] md:pr-12 flex flex-col justify-center items-center">
						<h1 className="text-center font-semibold text-[28px] text-[#272343] mb-10">Hazard Information</h1>
						<form className="w-full flex justify-center items-center sxl:flex-wrap sm:flex-nowrap">
							<div className="sxl:w-full sm:w-2/5 flex flex-col justify-center items-center">
								<div className="sm:w-1/2 flex flex-col justify-center items-start">
									<div className="flex flex-col justify-center items-start mb-2">
										<label htmlFor="type" className="text-[#272343] ml-1">
											Hazard Type<span className="text-red-600">*</span>
										</label>
										<select
											id="type"
											name="type"
											value={editPostDataType}
											onChange={(e) => dispatch(setEditPostDataType(e.target.value))}
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094]"
										>
											<option>Hazard Type</option>
											<option value="Biological">Biological</option>
											<option value="Chemical">Chemical</option>
											<option value="Physical">Physical</option>
											<option value="Safety">Safety</option>
										</select>
									</div>
									<div className="flex flex-col justify-center items-start my-4">
										<label htmlFor="hazardLevel" className="text-[#272343] ml-1">
											Hazard Level<span className="text-red-600">*</span>
										</label>
										<select
											id="hazardLevel"
											name="hazardLevel"
											value={editPostDataHazardLevel}
											onChange={(e) => dispatch(setEditPostDataHazardLevel(e.target.value))}
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094]"
										>
											<option>Hazard Level</option>
											<option value="Low">Low</option>
											<option value="Moderate">Moderate</option>
											<option value="High">High</option>
										</select>
									</div>
									<div className="flex flex-col justify-center items-start my-4">
										<label htmlFor="industry" className="text-[#272343] ml-1">
											Industry<span className="text-red-600">*</span>
										</label>
										<select
											id="industry"
											name="industry"
											value={editPostDataIndustry}
											onChange={(e) => dispatch(setEditPostDataIndustry(e.target.value))}
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094]"
										>
											<option>Industry Type</option>
											<option value="Agriculture">Agriculture</option>
											<option value="Apparel">Apparel</option>
											<option value="Oil & Gas Production">Oil & Gas Production</option>
											<option value="Construction">Construction</option>
											<option value="Manufacturing">Manufacturing</option>
											<option value="Mining">Mining</option>
											<option value="Forestry">Forestry</option>
											<option value="Shipping">Shipping</option>
											<option value="Transport">Transport</option>
											<option value="Utilities">Utilities</option>
										</select>
									</div>
									<div className="flex flex-col justify-center items-start my-4">
										<label htmlFor="effectDuration" className="text-[#272343] ml-1">
											Effect Duration (in Hours)<span className="text-red-600">*</span>
										</label>
										<input
											id="effectDuration"
											name="effectDuration"
											type="number"
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094]"
											value={editPostDataEffectDuration}
											placeholder="Enter Effect Duration"
											onChange={(e) => dispatch(setEditPostDataEffectDuration(e.target.value))}
										/>
									</div>
									<div className="flex flex-col justify-center items-start my-4">
										<label htmlFor="dateOccurred" className="text-[#272343] ml-1">
											Date Of Occurrence<span className="text-red-600">*</span>
										</label>
										<input
											id="dateOccurred"
											name="dateOccurred"
											type="date"
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094]"
											value={editPostDataDateOccurred}
											onChange={(e) => dispatch(setEditPostDataDateOccurred(e.target.value))}
										/>
									</div>
									<div className="flex flex-col justify-center items-start mt-2">
										<div className="text-[#272343] ml-1">
											Do you want to make it public?<span className="text-red-600">*</span>
										</div>
										<div onClick={(e) => dispatch(setEditPostDataIsPublic(e.target.value === "true" ? true : false))}>
											<input
												id="yes"
												name="isPublic"
												type="radio"
												value="true"
												defaultChecked={editPostDataIsPublic}
												className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094] mt-2"
											/>
											<label htmlFor="yes" className="text-[#272343] ml-1">
												Yes
											</label>
											<input
												id="no"
												name="isPublic"
												type="radio"
												value="false"
												defaultChecked={!editPostDataIsPublic}
												className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094] mt-2 ml-5"
											/>
											<label htmlFor="no" className="text-[#272343] ml-1">
												No
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="sxl:w-full sm:w-3/5 sxl:mt-10 sm:mt-0">
								<div className="flex flex-col justify-center items-start mb-4">
									<label htmlFor="problem" className="mb-2 text-lg">
										Problem Of Hazard<span className="text-red-600">*</span>
									</label>
									<textarea
										id="problem"
										name="problem"
										type="text"
										className="inputShadow resize-none rounded-2xl w-[100%] max-h-[200px] px-3 py-3 font-[500] text-[#677094] text-[20px]"
										cols="30"
										rows="4"
										placeholder="State your hazardous problem you found in your organization/industry...."
										value={editPostDataProblem}
										onChange={(e) => dispatch(setEditPostDataProblem(e.target.value))}
									/>
								</div>
								<div className="flex flex-col justify-center items-start mt-4">
									<label htmlFor="solution" className="mb-2 text-lg">
										Solution of Hazard<span className="text-red-600">*</span>
									</label>
									<textarea
										id="solution"
										name="solution"
										type="text"
										className="inputShadow resize-none rounded-2xl w-[100%] max-h-[200px] px-3 py-3 font-[500] text-[#677094] text-[20px]"
										cols="30"
										rows="7"
										placeholder="State your hazardous problem's solution you applied in your organization/industry to solve above stated problem..."
										value={editPostDataSolution}
										onChange={(e) => dispatch(setEditPostDataSolution(e.target.value))}
									/>
								</div>
							</div>
						</form>
						<button
							className="bg-[#EED132] w-[175px] h-[50px] mt-4 rounded-3xl font-semibold text-[#000] text-[20px] hover:bg-[rgba(238,209,50,0.8)]"
							onClick={(e) => {
								updateHazard(e);
							}}
						>
							SUBMIT
						</button>
					</div>
				</div>
			</Base>
		</>
	);
};

export default EditPost;
