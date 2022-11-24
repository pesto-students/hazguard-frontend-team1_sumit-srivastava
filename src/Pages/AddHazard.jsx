import { useState } from "react";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addHazard } from "../Helpers/hazard";
import { useSelector, useDispatch } from "react-redux";
import { setNewPostDataType, setNewPostDataHazardLevel, setNewPostDataEffectDuration, setNewPostDataProblem, setNewPostDataSolution, setNewPostDataDate } from "../Store/storingData";

const AddHazard = () => {
	const userData = useSelector((state) => state.userData);
	const accessToken = useSelector((state) => state.accessToken);
	const [values, setValues] = useState({
		industry: userData.industry,
		department: userData.department,
		companyName: userData.companyName,
		state: userData.state,
		country: userData.country,
	});
	const { industry, department, companyName, state, country } = values;
	const newPostDataType = useSelector((state) => state.newPostDataType);
	const newPostDataHazardLevel = useSelector((state) => state.newPostDataHazardLevel);
	const newPostDataEffectDuration = useSelector((state) => state.newPostDataEffectDuration);
	const newPostDataProblem = useSelector((state) => state.newPostDataProblem);
	const newPostDataSolution = useSelector((state) => state.newPostDataSolution);
	const newPostDataDate = useSelector((state) => state.newPostDataDate);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e, field) => {
		e.preventDefault();
		switch (field) {
			case "type":
				dispatch(setNewPostDataType(e.target.value));
				break;
			case "hazardLevel":
				dispatch(setNewPostDataHazardLevel(e.target.value));
				break;
			case "effectDuration":
				dispatch(setNewPostDataEffectDuration(e.target.value));
				break;
			case "problem":
				dispatch(setNewPostDataProblem(e.target.value));
				break;
			case "solution":
				dispatch(setNewPostDataSolution(e.target.value));
				break;
			case "date":
				dispatch(setNewPostDataDate(e.target.value));
				break;
		}
	};
	const createHazard = (e) => {
		e.preventDefault();
		if (
			newPostDataType !== "" &&
			industry !== "" &&
			department !== "" &&
			newPostDataHazardLevel !== "" &&
			newPostDataEffectDuration !== "" &&
			newPostDataProblem !== "" &&
			newPostDataSolution !== "" &&
			newPostDataDate !== "" &&
			companyName !== "" &&
			state !== "" &&
			country !== ""
		) {
			addHazard(
				{
					type: newPostDataType,
					industry: industry,
					department: department,
					hazardLevel: newPostDataHazardLevel,
					effectDuration: newPostDataEffectDuration,
					problem: newPostDataProblem,
					solution: newPostDataSolution,
					date: newPostDataDate,
					companyName: companyName,
					state: state,
					country: country,
				},
				accessToken
			)
				.then((response) => {
					if (!response?.error) {
						setValues({
							industry: "",
							department: "",
							companyName: "",
							state: "",
							country: "",
						});
						dispatch(setNewPostDataType(""));
						dispatch(setNewPostDataHazardLevel(""));
						dispatch(setNewPostDataEffectDuration(""));
						dispatch(setNewPostDataProblem(""));
						dispatch(setNewPostDataSolution(""));
						dispatch(setNewPostDataDate(""));
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
	// state to store uploaded file
	// const [files, setFiles] = useState([]);
	// function to set new uploaded files
	// const handlefiles = (event) => {
	// 	const newFile = event.target.value.split("\\")[2];
	// 	setFiles([...files, newFile]);
	// };
	return (
		<>
			<Base>
				<div className="bg-white rounded-3xl m-8 text-center mt-[30px] p-10">
					<h1 className="font-semibold text-[#272343] text-2xl mb-[30px]">Hazard Information</h1>
					<form className="w-[100%] h-[100%] flex justify-between items-center">
						<div className="w-[30%]">
							<div className="w-[100%] flex flex-col justify-center items-start ml-5 mb-[30px]">
								<label htmlFor="type" className="font-semibold mb-1 text-[#272343] text-[18px]">
									Hazard Type<span className="text-red-600">*</span>
								</label>
								<select
									id="type"
									name="type"
									value={newPostDataType}
									onChange={(e) => handleChange(e, "type")}
									className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm font-medium bg-transparent border-0 border-b-2 border-[#677094]"
								>
									<option>Hazard Type</option>
									<option value="Biological">Biological</option>
									<option value="Chemical">Chemical</option>
									<option value="Physical">Physical</option>
									<option value="Safety">Safety</option>
								</select>
							</div>
							<div className="w-[100%] flex flex-col justify-center items-start ml-5 mb-[30px]">
								<label htmlFor="hazardLevel" className="font-semibold mb-1 text-[#272343] text-[18px]">
									Hazard Level<span className="text-red-600">*</span>
								</label>
								<select
									id="hazardLevel"
									name="hazardLevel"
									value={newPostDataHazardLevel}
									onChange={(e) => handleChange(e, "hazardLevel")}
									className="text-center sxl:py-1 md:py-2 px-0 w-auto text-sm font-medium bg-transparent border-0 border-b-2 border-[#677094]"
								>
									<option>Hazard Level</option>
									<option value="Low">Low</option>
									<option value="Moderate">Moderate</option>
									<option value="High">High</option>
								</select>
							</div>
							<div className="w-[100%] flex flex-col justify-center items-start ml-5 mb-[30px]">
								<label htmlFor="effectDuration" className="font-semibold mb-1 text-[#272343] text-[18px]">
									Effect Duration<span className="text-red-600">*</span>
								</label>
								<input
									id="effectDuration"
									name="effectDuration"
									type="number"
									className="w-[15%] py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
									value={newPostDataEffectDuration}
									onChange={(e) => handleChange(e, "effectDuration")}
								/>
							</div>
							<div className="w-[100%] flex flex-col justify-center items-start ml-5 mb-[30px]">
								<label htmlFor="date" className="font-semibold mb-1 text-[#272343] text-[18px]">
									Date<span className="text-red-600">*</span>
								</label>
								<input
									id="date"
									name="date"
									type="date"
									className="w-auto py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2"
									value={newPostDataDate}
									onChange={(e) => handleChange(e, "date")}
								/>
							</div>
						</div>
						<div className="w-[70%]">
							<div className="w-[100%] flex flex-col justify-center items-center mb-[30px]">
								<label htmlFor="problem" className="self-start font-semibold mb-3 text-[#272343] text-[18px]">
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
									onChange={(e) => handleChange(e, "problem")}
								/>
							</div>
							<div className="w-[100%] flex flex-col justify-center items-center mb-[30px]">
								<label htmlFor="solution" className="self-start font-semibold mb-3 text-[#272343] text-[18px]">
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
									onChange={(e) => handleChange(e, "solution")}
								/>
								{/* <button
									className="my-2 self-start text-blue-500"
									onClick={(event) => {
										document.getElementById("image").click();
									}}
								>
									Add Images
									{files.map((file) => (
										<span className="ml-2 text-black no-underline">{file}</span>
									))}
								</button>
								<input type="file" name="images" id="image" className="hidden" multiple="multiple" onChange={handlefiles} /> */}
							</div>
						</div>
					</form>
					<button
						className="bg-[#EED132] w-[175px] h-[50px] rounded-3xl font-medium text-[#000] text-[20px] hover:bg-[rgba(238,209,50,0.8)]"
						onClick={(e) => {
							createHazard(e);
						}}
					>
						SUBMIT
					</button>
				</div>
			</Base>
		</>
	);
};

export default AddHazard;
