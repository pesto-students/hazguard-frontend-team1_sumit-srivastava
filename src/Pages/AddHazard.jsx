import { useState } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addHazard } from "../Helpers/hazard";
import { useSelector, useDispatch } from "react-redux";
import {
	setNewPostDataIndustry,
	setNewPostDataType,
	setNewPostDataHazardLevel,
	setNewPostDataEffectDuration,
	setNewPostDataProblem,
	setNewPostDataSolution,
	setNewPostDataDateOccurred,
	setNewPostDataIsPublic,
	setCheckChange,
} from "../Store/storingData";

const AddHazard = () => {
	const userData = useSelector((state) => state.userData);
	const accessToken = useSelector((state) => state.accessToken);
	const [values, setValues] = useState({
		department: userData.department,
		companyName: userData.companyName,
		state: userData.state,
		country: userData.country,
	});
	const { department, companyName, state, country } = values;
	const newPostDataIndustry = useSelector((state) => state.newPostDataIndustry);
	const newPostDataType = useSelector((state) => state.newPostDataType);
	const newPostDataHazardLevel = useSelector((state) => state.newPostDataHazardLevel);
	const newPostDataEffectDuration = useSelector((state) => state.newPostDataEffectDuration);
	const newPostDataProblem = useSelector((state) => state.newPostDataProblem);
	const newPostDataSolution = useSelector((state) => state.newPostDataSolution);
	const newPostDataDateOccurred = useSelector((state) => state.newPostDataDateOccurred);
	const newPostDataIsPublic = useSelector((state) => state.newPostDataIsPublic);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const createHazard = (e) => {
		e.preventDefault();
		if (
			newPostDataIndustry !== "" &&
			newPostDataType !== "" &&
			department !== "" &&
			newPostDataHazardLevel !== "" &&
			newPostDataEffectDuration !== "" &&
			newPostDataProblem !== "" &&
			newPostDataSolution !== "" &&
			newPostDataDateOccurred !== "" &&
			newPostDataIsPublic !== "" &&
			companyName !== "" &&
			state !== "" &&
			country !== ""
		) {
			addHazard(
				{
					type: newPostDataType,
					industry: newPostDataIndustry,
					department: department,
					hazardLevel: newPostDataHazardLevel,
					effectDuration: newPostDataEffectDuration,
					problem: newPostDataProblem,
					solution: newPostDataSolution,
					dateOccurred: newPostDataDateOccurred,
					isPublic: newPostDataIsPublic,
					companyName: companyName,
					state: state,
					country: country,
				},
				accessToken
			)
				.then((response) => {
					if (!response?.error) {
						setValues({
							department: "",
							companyName: "",
							state: "",
							country: "",
						});
						dispatch(setNewPostDataIndustry(""));
						dispatch(setNewPostDataType(""));
						dispatch(setNewPostDataHazardLevel(""));
						dispatch(setNewPostDataEffectDuration(""));
						dispatch(setNewPostDataProblem(""));
						dispatch(setNewPostDataSolution(""));
						dispatch(setNewPostDataDateOccurred(""));
						dispatch(setNewPostDataIsPublic(""));
						dispatch(setCheckChange());
						toast.success("Hazard added!");
						navigate("/myposts");
					} else if (response?.error) {
						return toast.error(response?.message);
					}
				})
				.catch((e) => {
					toast.error("Not able to add! Please try again!");
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
											value={newPostDataType}
											onChange={(e) => dispatch(setNewPostDataType(e.target.value))}
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md  font-medium bg-transparent border-0 border-b-2 border-[#677094]"
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
											value={newPostDataHazardLevel}
											onChange={(e) => dispatch(setNewPostDataHazardLevel(e.target.value))}
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md  font-medium bg-transparent border-0 border-b-2 border-[#677094]"
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
											value={newPostDataIndustry}
											onChange={(e) => dispatch(setNewPostDataIndustry(e.target.value))}
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md  font-medium bg-transparent border-0 border-b-2 border-[#677094]"
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
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md  font-medium bg-transparent border-0 border-b-2 border-[#677094]"
											value={newPostDataEffectDuration}
											placeholder="Enter Effect Duration"
											onChange={(e) => dispatch(setNewPostDataEffectDuration(e.target.value))}
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
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md  font-medium bg-transparent border-0 border-b-2 border-[#677094]"
											value={newPostDataDateOccurred}
											onChange={(e) => dispatch(setNewPostDataDateOccurred(e.target.value))}
										/>
									</div>
									<div className="flex flex-col justify-center items-start mt-2">
										<label htmlFor="isPublic" className="text-[#272343] ml-1">
											Do you want to make it public now?<span className="text-red-600">*</span>
										</label>
										<input
											id="isPublic"
											name="isPublic"
											type="checkbox"
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md  font-medium bg-transparent border-0 border-b-2 border-[#677094] mt-2"
											defaultChecked="true"
											onChange={(e) => dispatch(setNewPostDataIsPublic(e.target.checked))}
										/>
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
										value={newPostDataProblem}
										onChange={(e) => dispatch(setNewPostDataProblem(e.target.value))}
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
										value={newPostDataSolution}
										onChange={(e) => dispatch(setNewPostDataSolution(e.target.value))}
									/>
								</div>
							</div>
						</form>
						<button
							className="bg-[#EED132] w-[175px] h-[50px] mt-10 rounded-3xl font-semibold text-[#000] text-[20px] hover:bg-[rgba(238,209,50,0.8)]"
							onClick={(e) => {
								createHazard(e);
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

export default AddHazard;
