import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";

const Product = () => {
	const NextArrow = ({ className, onClick }) => {
		return (
			<button className={className} onClick={onClick}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={64} height={64}>
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="#EED132" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z" />
				</svg>
			</button>
		);
	};
	const PrevArrow = ({ className, onClick }) => {
		return (
			<button className={className} onClick={onClick}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={64} height={64}>
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="#EED132" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z" />
				</svg>
			</button>
		);
	};
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow className={"slick-arrow slick-next"} />,
		prevArrow: <PrevArrow className={"slick-arrow slick-prev"} />,
		pauseOnHover: true,
		pauseOnDotsHover: true,
	};
	return (
		<section className="heroslider relative bg-white">
			<Slider {...settings}>
				<div className="h-[700px]">
					<img src={image1} alt="" />
				</div>
				<div className="h-[700px]">
					<img src={image2} alt="" />
				</div>
				<div className="h-[700px]">
					<img src={image3} alt="" />
				</div>
				<div className="h-[700px]">
					<img src={image4} alt="" />
				</div>
			</Slider>
		</section>
	);
};

export default Product;
