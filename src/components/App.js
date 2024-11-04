import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe  
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <div id="info">
        <p style={{ borderRight: "2px solid black",  paddingRight: "10px"}}>Views: {video.views.toLocaleString()}</p>
        <p style={{paddingLeft: "10px"}} >Uploaded: {video.createdAt}</p>        
      </div>
      <div>
        <button>{video.upvotes} 👍</button>
        <button>{video.downvotes} 👎</button>
      </div>
      <button id="hideComments">Hide Comments</button>
      <hr></hr>
      <h3>{video.comments.length} Comments</h3>
      {video.comments.map((comment)=>{
        return(
          <div key={comment.id}>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
