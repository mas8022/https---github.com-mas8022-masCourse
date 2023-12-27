import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import './Player.css'

export default function Player({url}) {
  
  const plyrProps = {
    source: {
      type: "video",
      title: "Example title",
      sources: [
        {
          src: `${url}`,
          type: "video/mp4",
          size: 720,
        },
      ],
    },
    options: {
      autoplay: true,
    },
  };

  return <Plyr {...plyrProps} />;
}
