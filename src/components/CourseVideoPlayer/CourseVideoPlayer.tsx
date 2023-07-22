import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { CoursesType } from "../../types/coursesInterface";
const CourseVideoPlayer = ({
  mainCourse,
}: {
  mainCourse: CoursesType;
}): JSX.Element => {
  console.log("mainCourse=> ", mainCourse);
  return (
    <section className="">
      <VideoPlayer {...mainCourse} />
    </section>
  );
};

export default CourseVideoPlayer;
