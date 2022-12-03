import AWS from "aws-sdk";

AWS.config.update({
	accessKeyId: import.meta.env.VITE_S3_ACCESS_KEY_ID,
	secretAccessKey: import.meta.env.VITE_S3_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
	params: { Bucket: import.meta.env.VITE_S3_BUCKET_NAME },
	region: import.meta.env.VITE_S3_REGION_NAME,
});

const uploadFile = async (path, file) => {
	return await myBucket
		.putObject({
			ACL: "public-read",
			Body: file,
			Bucket: import.meta.env.VITE_S3_BUCKET_NAME,
			Key: path,
		})
		.on("complete", (data) => {
			return { error: false, data: data };
		})
		.on("error", (data) => {
			return { error: true, data: data };
		})
		.send((err) => {
			if (err) console.log(err);
		});
};

export const uploadToS3 = async (type, file, info) => {
	switch (type) {
		case "profilePictures":
			return await uploadFile(`profilePictures/${info}/${file.name}`, file);
		case "hazardImages":
			return uploadFile(`hazardImages/${info}/${file.name}`, file);
	}
};
