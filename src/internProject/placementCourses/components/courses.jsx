import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { CourseCard } from "./courseCard";
export function Courses() {
  const course = useSelector((state) => state.courses.data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <>
      <Slider {...settings} className="m-10 cursor-pointer ">
        {course.map((data) => {
          return <CourseCard data={data} />;
        })}
      </Slider>
    </>
  );
}
