import workposts from "../../db.json";

const Work = () => (
  <div>
    <h1>Work</h1>

    <ul>
      {Object.entries(posts).map((value, index) => {
        return <li key={index}>{value[1].title}</li>;
      })}
    </ul>
  </div>
);

export default Work;
