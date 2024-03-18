import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const image_file = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menusItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menusRes = await axiosSecure.post("/menus", menusItem);
      console.log(menusRes);
      if (menusRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} has been added in menus`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        subHeading={"What's New"}
        Heading={"add an item"}
      ></SectionTitle>
      <div className="bg-[#F3F3F3] p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6 items-center">
            {/* For Category */}
            <div className="flex-1">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue={"default"}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={"default"}>
                    Select a Category
                  </option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soups</option>
                  <option value={"dessert"}>Desserts</option>
                  <option value={"drinks"}>Drinks</option>
                </select>
              </label>
            </div>
            {/* For Price */}
            <div className="flex-1">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              type="text"
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn text-white bg-[#B58130]">
            <FaUtensils className="mr-4" /> Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
