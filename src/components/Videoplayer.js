import './Videoplayer.css';
function Videoplayer(props) {
  return (
    <div className='video'>
    <div className="player-wrapper">
     <iframe src={props.url}
     className='iframe'></iframe>
    </div></div>
  );
}
export default Videoplayer;