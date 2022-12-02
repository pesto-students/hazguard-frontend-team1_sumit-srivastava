import React, { useEffect, useState } from "react";
import AWS from "aws-sdk";

AWS.config.update({
	accessKeyId: import.meta.env.VITE_S3_ACCESS_KEY_ID,
	secretAccessKey: import.meta.env.VITE_S3_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
	params: { Bucket: import.meta.env.VITE_S3_BUCKET_NAME },
	region: import.meta.env.VITE_S3_REGION_NAME,
});

const UploadToS3 = () => {
	const [progress, setProgress] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);
	const uploadFile = (file) => {
		const params = {
			ACL: "public-read",
			Body: file,
			Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
			Key: path,
		};
		myBucket
			.putObject(params)
			.on("httpUploadProgress", (evt) => {
				setProgress(Math.round((evt.loaded / evt.total) * 100));
			})
			.send((err) => {
				if (err) console.log(err);
			});
	};
	useEffect(() => {
		console.log(progress);
	}, [progress]);
	return (
		<div>
			<div>React S3 File Upload</div>
			<input
				type="file"
				onChange={(e) => {
					setSelectedFile(e.target.files[0]);
				}}
			/>
			<button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
		</div>
	);
};

export default UploadToS3;
