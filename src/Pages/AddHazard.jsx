import Base from "./Base";
import { useState, useCallback, useMemo } from "react";
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
	setLoading,
} from "../Store/storingData";
import { uploadToS3 } from "../Utilities/uploadToS3";
import { useDropzone } from "react-dropzone";
import { v4 } from "uuid";

//Styles
const baseStyle = {
	padding: "20px",
	borderWidth: 2,
	borderRadius: 16,
	borderColor: "transparent",
	borderStyle: "dashed",
	backgroundColor: "#ffffff",
	outline: "none",
	transition: "all .24s ease-in-out",
};
const activeStyle = {
	borderColor: "#2196f3",
};
const acceptStyle = {
	borderColor: "#00e676",
	backgroundColor: "rgba(0, 230, 118, 0.4)",
};
const rejectStyle = {
	borderColor: "#ff1744",
	backgroundColor: "rgba(255, 23, 68, 0.4)",
};

const AddHazard = () => {
	//State handler for images
	const [files, setFiles] = useState([]);

	//Creating URl for Images
	const onDrop = useCallback((acceptedFiles) => {
		setFiles(
			acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	}, []);

	//hook for drop images
	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
		maxFiles: 4,
		accept: {
			"image/png": [".png"],
			"image/jpeg": [".jpg", ".jpeg"],
		},
		onDrop,
	});

	//preview of uploaded images
	const thumbs = files.map((file) => (
		<div className="inline-flex mb-2 mr-2 w-24 h-24 p-1 box-border" key={file.name}>
			<div className="flex min-w-0 overflow-hidden rounded-md">
				<img className="block w-auto h-full" src={file.preview} />
			</div>
		</div>
	));

	//condition based styling
	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);
	//Collecting data from stores
	const userData = useSelector((state) => state.userData);
	const accessToken = useSelector((state) => state.accessToken);
	const newPostDataIndustry = useSelector((state) => state.newPostDataIndustry);
	const newPostDataType = useSelector((state) => state.newPostDataType);
	const newPostDataHazardLevel = useSelector((state) => state.newPostDataHazardLevel);
	const newPostDataEffectDuration = useSelector((state) => state.newPostDataEffectDuration);
	const newPostDataProblem = useSelector((state) => state.newPostDataProblem);
	const newPostDataSolution = useSelector((state) => state.newPostDataSolution);
	const newPostDataDateOccurred = useSelector((state) => state.newPostDataDateOccurred);
	const newPostDataIsPublic = useSelector((state) => state.newPostDataIsPublic);

	//Action Dispatcher
	const dispatch = useDispatch();

	//Hook for Navigation
	const navigate = useNavigate();

	//handle to create hazard by setting changed state to store and store to backend
	const createHazard = async (e) => {
		e.preventDefault();
		let hazardId = v4();
		let imageLinks = [];
		if (files.length > 0) {
			if (!(await uploadToS3("hazardImages", files, hazardId)).error) {
				files.forEach((data) => imageLinks.push(`https://hazguard-files.s3.ap-south-1.amazonaws.com/hazardImages/${hazardId}/${data.name}`));
			} else {
				return toast.error("Not able to update! Please try again!");
			}
		}
		if (
			newPostDataIndustry !== "" &&
			newPostDataType !== "" &&
			userData.department !== "" &&
			newPostDataHazardLevel !== "" &&
			newPostDataEffectDuration !== "" &&
			newPostDataProblem !== "" &&
			newPostDataSolution !== "" &&
			newPostDataDateOccurred !== "" &&
			newPostDataIsPublic !== "" &&
			userData.companyName !== "" &&
			userData.state !== "" &&
			userData.country !== ""
		) {
			addHazard(
				{
					hazardId: hazardId,
					type: newPostDataType,
					industry: newPostDataIndustry,
					department: userData.department,
					hazardLevel: newPostDataHazardLevel,
					effectDuration: newPostDataEffectDuration,
					problem: newPostDataProblem,
					solution: newPostDataSolution,
					dateOccurred: newPostDataDateOccurred,
					isPublic: newPostDataIsPublic,
					companyName: userData.companyName,
					state: userData.state,
					country: userData.country,
					images: imageLinks,
				},
				accessToken
			)
				.then((response) => {
					if (!response?.error) {
						dispatch(setNewPostDataIndustry(""));
						dispatch(setNewPostDataType(""));
						dispatch(setNewPostDataHazardLevel(""));
						dispatch(setNewPostDataEffectDuration(""));
						dispatch(setNewPostDataProblem(""));
						dispatch(setNewPostDataSolution(""));
						dispatch(setNewPostDataDateOccurred(""));
						dispatch(setNewPostDataIsPublic(newPostDataIsPublic));
						dispatch(setLoading(true));
						dispatch(setCheckChange());
						setFiles([]);
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
				<div className="w-full sxl:h-full sm:h-[1000px] sxl:p-[15px] sm:p-[30px]">
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
											value={newPostDataHazardLevel}
											onChange={(e) => dispatch(setNewPostDataHazardLevel(e.target.value))}
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
											value={newPostDataIndustry}
											onChange={(e) => dispatch(setNewPostDataIndustry(e.target.value))}
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
											className="sxl:py-1 sm:py-2 px-0 w-auto text-md font-medium bg-transparent border-0 border-b-2 border-[#677094]"
											value={newPostDataDateOccurred}
											onChange={(e) => dispatch(setNewPostDataDateOccurred(e.target.value))}
										/>
									</div>
									<div className="flex flex-col justify-center items-start mt-2">
										<div className="text-[#272343] ml-1">
											Do you want to make it public?<span className="text-red-600">*</span>
										</div>
										<div onClick={(e) => dispatch(setNewPostDataIsPublic(e.target.value === "true" ? true : false))}>
											<input
												id="yes"
												name="isPublic"
												type="radio"
												value="true"
												defaultChecked={newPostDataIsPublic}
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
												defaultChecked={!newPostDataIsPublic}
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
										value={newPostDataProblem}
										onChange={(e) => dispatch(setNewPostDataProblem(e.target.value))}
									/>
								</div>
								<div className="flex flex-col justify-center items-start mb-4">
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
								<div className="flex flex-col justify-center items-start mt-4">
									<label htmlFor="solution" className="mb-2 text-lg">
										Images<span className="text-red-600">*</span>
									</label>
									<div className="inputShadow flex flex-col justify-center items-center" {...getRootProps({ style })}>
										<input {...getInputProps()} />
										<p className="m-0 p-2 text-black">
											{isDragAccept ? (
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
													<path fill="none" d="M0 0h24v24H0z" />
													<path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
												</svg>
											) : isDragReject ? (
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
													<path fill="none" d="M0 0h24v24H0z" />
													<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z" />
												</svg>
											) : (
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25}>
													<path fill="none" d="M0 0h24v24H0z" />
													<path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
												</svg>
											)}
										</p>
										<p className="m-0 p-2 text-center text-black">
											Drop your image or video here, or <span className="text-[#272343]">browse!</span> Please add only 4 items.
										</p>
										<aside className="flex flex-row flex-wrap mt-4">{thumbs}</aside>
									</div>
								</div>
							</div>
						</form>
						<button
							className="bg-[#EED132] w-[175px] h-[50px] mt-6 rounded-3xl font-semibold text-[#000] text-[20px] hover:bg-[rgba(238,209,50,0.8)]"
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
