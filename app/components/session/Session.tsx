export type SessionProps = {
  session: any;
};

const Session = (props: SessionProps) => {
  console.log("FILTERED SESSION: " + props.session);

  return <div>Session</div>;
};

export default Session;
