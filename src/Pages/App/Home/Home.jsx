import Navbar from "../../../Components/Navbar/Navbar";
import Filter from '../../../Components/Filter/Filter'
import Post from "../../../Components/Post/Post";

export default function Home() {
	return (
		<>
			<Navbar />
			<Filter />
			<Post/>
		</>
	);
}
