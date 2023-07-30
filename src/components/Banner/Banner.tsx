import { Link } from "react-router-dom";
import { LiaDownloadSolid } from "react-icons/lia";
import bannerInfo1 from "../../assets/Images/banner_info_1.jpg";
import bannerInfo2 from "../../assets/Images/banner_info_2.jpg";
import bannerInfo3 from "../../assets/Images/banner_info_3.jpg";
import { FaChevronRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="gradient-hero">
        <div className="noise"></div>
      </div>
      <section id="banner">
        {/* <div className="banner_bc"></div> */}

        <div className="max-w-[1250px] m-auto py-[35px] px-[15px] w-[100%] grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[30px] items-center">
          <div className="banner_info flex flex-col gap-[40px]  items-center justify-start  w-full  ">
            <div className="heading w-full text-center md:text-start">
              <h1 className="font-Space_Grotesk text-[14vw] sm:text-[70px] leading-[65.8px] md:leading-[74.2px] text-[#ffffff] text-center md:text-start  ">
                <h1>Unleash</h1> <h1>your creativity</h1> <h1>with BeterAI</h1>
              </h1>
            </div>
            <div className="banner_des w-[100%]">
              <p className="leading-[1.5em] text-white font-Space_Grotesk text-[1.2em] text-center md:text-start md:max-w-[450px] font-[100] font-medium">
                Discover unlimited variations of yourself and create unique
                avatars. Convert yourself into any character or be in any place.
              </p>
            </div>

            <div className="banner_buttons flex flex-row w-full justify-evenly md:justify-start gap-4">
              <Link
                to={"#"}
                className="rounded-[30px] bg-[black] font-Space_Grotesk flex gap-[5px] py-[0.9em] px-[1.2em]  text-white shadow-lg text-[15px] md:text-[16px] gap-[10px]"
              >
                <span className="btn_icon flex items-center justify-center">
                  <LiaDownloadSolid className="text-white" />
                </span>
                Get the App
              </Link>

              <Link
                to={"#"}
                className="rounded-[30px] bg-[#1616130a] backdrop-blur-[40px] font-Space_Grotesk flex gap-[5px]  shadow-lg text-[15px] md:text-[16px] gap-[10px] h-fit items-center pr-[20px] text-[#161613]"
              >
                <span className="btn_icon flex items-center justify-center rounded-full bg-white px-[18px] py-[18px]">
                  <FaChevronRight />
                </span>
                Learn More
              </Link>
            </div>
          </div>
          <div className="banner_info_image flex justify-center md:justify-end items-center">
            <div className="banner_img_1">
              <img
                src={bannerInfo1}
                alt="Banner_Info_1"
                className="w-full max-w-[300px] max-h-[90vh] transition-transform rotate-3d rounded-3xl"
              />
            </div>
            <div className="banner_img_2">
              <img
                src={bannerInfo2}
                alt="Banner_Info_1"
                className="w-full max-w-[300px] max-h-[90vh] transition-transform rotate-3d rounded-3xl"
              />
            </div>
            <div className="banner_img_3">
              <img
                src={bannerInfo3}
                alt="Banner_Info_1"
                className="w-full max-w-[300px] max-h-[90vh] transition-transform rotate-3d rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
