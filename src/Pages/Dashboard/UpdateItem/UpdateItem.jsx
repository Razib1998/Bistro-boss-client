import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div>
      <h2>Update Item</h2>
    </div>
  );
};

export default UpdateItem;
