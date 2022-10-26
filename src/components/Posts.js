import PostItem from "./PostItem";
import "./Posts.css";
const Posts = (props) => {
  return (
    <div>
      <ul className="posts">
        {props.data.map((item) => {
          return (
            <div key={item.id}>
              <PostItem
                photoId={item.photoId}
                id={item.id}
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Posts;
