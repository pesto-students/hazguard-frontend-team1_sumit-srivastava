export const loadRazorpay = (callback) => {
	const existingScript = document.getElementById("razorpay");
	if (!existingScript) {
		const script = document.createElement("script");
		script.src = "https://checkout.razorpay.com/v1/checkout.js";
		script.id = "razorpay";
		document.body.appendChild(script);
		script.onload = () => {
			if (callback) callback();
		};
	}
	if (existingScript && callback) callback();
};
