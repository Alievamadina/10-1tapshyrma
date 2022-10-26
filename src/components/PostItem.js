import "./PostItem.css";
const PostItem = (props) => {
  return (
    <div className="post">
      <li>
        <div className="post-item">
          <h4>{props.title}</h4>
          <p>{props.id}</p>
        </div>
        <img src={props.thumbnailUrl} alt="url" />
      </li>
    </div>
  );
};
export default PostItem;
