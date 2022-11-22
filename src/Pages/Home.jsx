import Filter from "../Components/Filter";
import Post from "../Components/Post";
import Base from "./Base";

export default function Home() {
	return (
		<Base>
			<div className="w-[100vw] h-[100vh] overflow-hidden">
				<Filter />
				<Post />
			</div>
		</Base>
	);
}
