import ReactPlayer from "react-player";

export default function Player() {
  return (
    <ReactPlayer
      playing={true}
      style={{margin: "0 auto"}}
      width={"100%"}
      url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
    />
  );
}
