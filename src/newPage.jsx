import { useParams } from "react-router-dom";

const NewPage = () => {
  const { id } = useParams();
  return <h1>Shivangi HATES Siddhant: {id} :)</h1>;
};

export default NewPage;
