import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const plyrProps = {
  source: {
    type: "video",
    title: "Example title",
    sources: [
      {
        src: "https://tech.sabzlearn.ir/uploads/ce01010101it/reactjs/01.mp4?h=uy3qQeXMa4A82CjPteuCdw&t=1702656074",
        type: "video/mp4",
        size: 720,
      },
    ],
  },
  options: undefined,
};

export default function Player() {
  return <Plyr {...plyrProps} />;
}
