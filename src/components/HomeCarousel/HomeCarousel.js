import { Carousel } from "react-carousel-minimal";

// https://reactjsexample.com/easy-to-use-responsive-and-customizable-carousel-component-for-react/

function HomeCarousel() {
  const data = [
    {
      image: "https://www.plus.rs/wp-content/uploads/2020/01/html5.png",
      caption: "Html 5",
    },
    {
      image: "https://miro.medium.com/max/1400/0*6zs8a4sWecKzE1sU",
      caption: "Css skills",
    },
    {
      image:
        "https://www.smartschool.rs/wp-content/uploads/2020/06/react-logo.png",
      caption: "React",
    },
    {
      image:
        "https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png",
      caption: "JavaScript",
    },
    {
      image:
        "https://softwareengineeringdaily.com/wp-content/uploads/2015/08/nodejs_logo_green.jpg",
      caption: "NodeJS",
    },
    {
      image: "https://miro.medium.com/max/1366/1*HFYKWq92BcXJIdata7d-JQ.png",
      caption: "Sass",
    },
    {
      image:
        "https://engineering.linecorp.com/wp-content/uploads/2019/06/frontend_meetup1-1024x576.jpg",
      caption: "Web Development skills",
    },
  ];

  const captionStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    // display: 'none',
  };

  return (
    <div>
      <div className="carousel__div">
        <Carousel
          data={data}
          time={2000}
          width="25rem"
          // height="27rem"
          captionStyle={captionStyle}
          slideNumber={false}
          captionPosition="bottom"
          automatic={true}
          dots={false}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
          // thumbnailWidth="100px"
          style={{
            textAlign: "center",
            minWidth: "100%",
            height: "27rem",
            // margin: "0rem auto 4rem auto",
          }}
        />
      </div>
    </div>
  );
}

export default HomeCarousel;
