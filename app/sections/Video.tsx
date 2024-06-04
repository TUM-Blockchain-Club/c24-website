const Video = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center lg:mt-[-125px]">
      <div className="w-full flex justify-center max-w-[275px] sm:max-w-[500px] xl:max-w-full">
        <video
          className="glow cta-border"
          controls
          id="vid-hero"
          width={850}
          height={480}
          style={{ objectFit: "cover" }}
          ref={(elm) => {
            if (elm)
              elm.onclick = () => {
                elm.muted = false;
              };
          }}
        >
          <source src="/hero/conference.mp4" />
          Your browser does not support videos
        </video>
      </div>
    </section>
  );
};

export default Video;
