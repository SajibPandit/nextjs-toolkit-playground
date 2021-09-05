export default function Userssg({ data }) {
    return (
      <div>
        <h2>User List</h2>
        {data && data.map((d) => <p key={d.id}>{d.name}</p>)}
      </div>
    );
  }
  
  export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  }