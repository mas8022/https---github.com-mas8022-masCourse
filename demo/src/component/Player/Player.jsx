import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const plyrProps = {
  source: {
    type: "video",
    title: "Example title",
    sources: [
      {
        src: "../../../public/videos/SampleVideo_1280x720_1mb.mp4",
        type: "video/mp4",
        size: 720,
      },
    ],
  },
  options: {
    autoplay: true,
  },
};

export default function Player() {
  return <Plyr {...plyrProps} />;
}
