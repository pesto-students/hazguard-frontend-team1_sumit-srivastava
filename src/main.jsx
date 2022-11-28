import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import "react-image-gallery/styles/css/image-gallery.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Routes />
			<ToastContainer theme="colored" position="bottom-center" autoClose={5000} hideProgressBar={true} pauseOnFocusLoss pauseOnHover />
		</PersistGate>
	</Provider>
);
