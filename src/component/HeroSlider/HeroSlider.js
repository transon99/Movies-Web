import React from "react";
// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { useDispatch, useSelector } from 'react-redux'
import { Autoplay, Pagination, Navigation } from "swiper";
import "./styles.css";
export default function HeroSlider() {

  const listFlims = useSelector(state => state.movies.UpComingMovies)
  console.log(listFlims);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {listFlims?.map((movie, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                style={{ position: 'relative' }}>
                <div
                  style={{
                    width: "100%",
                    height: "90vh",
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                    backgroundSize: "cover",
                    padding: "130px 0",
                    backgroundPosition: "50%"
                  }}
                >
                  <div
                    className=""
                    style={{
                      position: "absolute",
                      width: "100%",
                      top: "20%",
                      left: "40px",
                      zIndex: '100'
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        color: "white"
                      }}
                    >
                      {movie.title}
                    </h1>
                    <p
                      style={{
                        fontSize: "16px",
                        width: "80%",
                        marginBottom: "20px",
                        color: "white"
                      }}
                    >
                      {movie.overview}
                    </p>
                    <div className="my-4">
                      <button
                        style={{
                          padding: "4px 12px",
                          borderRadius: "8px",
                          backgroundColor: "#DC2626",
                          border: "1px soild #DC2626",
                          color: "white"
                        }}
                      >
                        Play
                      </button>
                      <button
                        style={{
                          padding: "4px 12px",
                          borderRadius: "8px",
                          backgroundColor: "#DC2626",
                          border: "1px soild #DC2626",
                          marginLeft: "8px",
                          color: "white"
                        }}
                      >
                        Watch Later
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,.6)",
                    height: "100%",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "100%",
                  }}
                >
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}


