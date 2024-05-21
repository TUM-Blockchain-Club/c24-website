
const Video = () => {
  return (
    <section
      className={
        "w-full flex flex-col lg:flex-row justify-center items-center mt-20"
      }
    >
        <div className="w-full flex justify-center xl:mt-20 max-w-[500px] xl:max-w-full">
            <video
                className="glow"
                autoPlay
                muted
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
  )
}

export default Video