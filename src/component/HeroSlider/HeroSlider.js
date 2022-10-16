import React from "react";
// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./styles.css";
export default function HeroSlider() {

  const listFlims =
  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
        "genre_ids": [
          27,
          53
        ],
        "id": 760161,
        "original_language": "en",
        "original_title": "Orphan: First Kill",
        "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        "popularity": 8098.027,
        "poster_path": "/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg",
        "release_date": "2022-07-27",
        "title": "Orphan: First Kill",
        "video": false,
        "vote_average": 7,
        "vote_count": 814
      },
      {
        "adult": false,
        "backdrop_path": "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
        "genre_ids": [
          28,
          35,
          53
        ],
        "id": 718930,
        "original_language": "en",
        "original_title": "Bullet Train",
        "overview": "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        "popularity": 7949.491,
        "poster_path": "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        "release_date": "2022-07-03",
        "title": "Bullet Train",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1232
      },
      {
        "adult": false,
        "backdrop_path": "/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
        "genre_ids": [
          53
        ],
        "id": 985939,
        "original_language": "en",
        "original_title": "Fall",
        "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
        "popularity": 6379.598,
        "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
        "release_date": "2022-08-11",
        "title": "Fall",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1141
      },
      {
        "adult": false,
        "backdrop_path": "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
        "genre_ids": [
          10749,
          18
        ],
        "id": 744276,
        "original_language": "en",
        "original_title": "After Ever Happy",
        "overview": "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
        "popularity": 4017.342,
        "poster_path": "/6b7swg6DLqXCO3XUsMnv6RwDMW2.jpg",
        "release_date": "2022-08-24",
        "title": "After Ever Happy",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 210
      },
      {
        "adult": false,
        "backdrop_path": "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
        "genre_ids": [
          14,
          12,
          10751
        ],
        "id": 532639,
        "original_language": "en",
        "original_title": "Pinocchio",
        "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
        "popularity": 3239.378,
        "poster_path": "/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
        "release_date": "2022-09-07",
        "title": "Pinocchio",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 800
      },
      {
        "adult": false,
        "backdrop_path": "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
        "genre_ids": [
          12,
          18,
          27
        ], "id": 760741,
        "original_language": "en",
        "original_title": "Beast",
        "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
        "popularity": 3372.682,
        "poster_path": "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
        "release_date": "2022-08-11",
        "title": "Beast",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 544

      }
    ]
  }

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
        {listFlims.results.map((movie, i) => {
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


