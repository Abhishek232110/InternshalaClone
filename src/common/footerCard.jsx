import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export function FooterCard() {
  return (
    <>
      <div className="flex text-white space-x-36">
        <div>
          <a href="#">About Us</a>
        </div>
        <div>
          <a href="#">Team Diary</a>
        </div>
        <div>
          <a href="#">Terms & Conditions </a>
        </div>
        <div>
          <a href="#">Sitemap</a>
        </div>
      </div>
      <div className="flex text-white space-x-40">
        <div>
          <a href="#">We're hiring </a>
        </div>
        <div>
          <a href="#">Blog</a>
        </div>
        <div>
          <a href="#">Privacy </a>
        </div>
      </div>
      <div className="flex text-white space-x-16">
        <div>
          <a href="#">Hire intern for your company</a>
        </div>
        <div>
          <a href="#">Our Services</a>
        </div>
        <div>
          <a href="#">Contact us</a>
        </div>
      </div>
      <div className="flex space-x-4 items-center mt-6  ">
        <button className="px-5 py-2 text-white border rounded-md mt-4 flex space-x-2 items-center">
          <PlayArrowIcon sx={{ fontSize: 40 }} />
          Get Android App
        </button>
        <div className="flex space-x-4 items-center mt-4">
          <InstagramIcon sx={{ fontSize: 40, fill: "white" }} />
          <FacebookIcon sx={{ fontSize: 40, fill: "white" }} />
          <YouTubeIcon sx={{ fontSize: 40, fill: "white" }} />
          <LinkedInIcon sx={{ fontSize: 40, fill: "white" }} />
        </div>
      </div>
    </>
  );
}
