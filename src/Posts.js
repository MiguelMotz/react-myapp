import {VscCircuitBoard, VscGlobe} from 'react-icons/vsc'

export const Posts = () => {
  return (
    <button onClick={() => 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json ())
        .then(data => console.log(data))
    }>
        <VscCircuitBoard />
        <VscGlobe/>
      traer datos
    </button>
  );
};
