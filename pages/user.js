import { useDispatch } from "react-redux";
import { setData } from "../store/reducers/demoSlice";
export default function User({ data }) {
  return (
    <div>
      <h2>User List</h2>
      {data && data.map((d) => <p>{data.name}</p>)}
    </div>
  );
}

export async function getServerSideProps() {
  const dispatch = useDispatch();
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  dispatch(setData(data));
  return {
    props: {
      data,
    },
  };
}
