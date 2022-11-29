import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import "react-image-gallery/styles/css/image-gallery.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

//initialized Sentry for Logging errors
Sentry.init({
	dsn: "https://98817a8113454e3b9bdcb63df3ec6c62@o4504149477687296.ingest.sentry.io/4504243585613824",
	integrations: [new BrowserTracing()],

	tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Routes />
			<ToastContainer theme="colored" position="bottom-center" autoClose={5000} hideProgressBar={true} pauseOnFocusLoss pauseOnHover />
		</PersistGate>
	</Provider>
);
