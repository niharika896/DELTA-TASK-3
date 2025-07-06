import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setName } from "../features/Name";
import { setEmail } from "../features/Email";
import { setImage } from "../features/Image";
import { setvendorId } from "../features/vendorId";

const VendorDetails = () => {
  const { method } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Name = useSelector((state) => state.Name?.value);
  const Email = useSelector((state) => state.Email?.value);
  const Image = useSelector((state) => state.Image?.value);
  const vendorId = useSelector((state) => state.vendorId?.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const destination = method==="waiting"? "/waitpage" : "/home"
    dispatch(setName(data.name));
    dispatch(setEmail(data.email));
    dispatch(setvendorId(data.vendorId));

    const res = await fetch("http://localhost:4000/vendor/profile/updatedata", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        image: Image,
        vendor_id: data.vendorId,
      }),
    });
    console.log(res);

    console.log("updated successfully");
    navigate(destination);

};

  const ImageUpload = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("uploaded_photo", file);

    const res = await fetch("http://localhost:4000/profile/uploadphoto", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      console.log("file uploaded successfully");
      const img_url = `http://localhost:4000/uploads/${data.filename}`;
      dispatch(setImage(img_url));
    } else {
      console.log("error uploading file");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef6f3] to-[#f3f9fe] flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-3xl border-t-[6px] border-[#FF6B00] space-y-8 flex flex-col md:flex-row gap-10">
        <div className="space-y-4 w-full md:w-1/3">
          {Image && (
            <img
              src={Image}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
          )}
          <div className="relative w-fit">
            <input
              id="customFile"
              type="file"
              onChange={ImageUpload}
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <button
              type="button"
              className="bg-[#FF6B00] text-white font-semibold px-4 py-2 rounded-lg z-0 pointer-events-none"
            >
              Choose File
            </button>
          </div>
          <input
            type="file"
            name="uploaded_file"
            onChange={ImageUpload}
            className="py-2 px-4 bg-[#FF6B00] text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition duration-200 opacity-0"
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/3 space-y-6"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#FF6B00]">User Details</h2>
            <p className="text-gray-500 mt-1">
              Please fill in the following information.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={Name}
                {...register("name", { required: true })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#FF6B00]`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={Email}
                {...register("email", { required: true })}
                disabled
                className={`w-full px-4 py-2 rounded-lg border bg-gray-100 text-gray-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none`}
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Vendor ID <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue={vendorId}
                {...register("vendorId", { required: true })}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.vendorId ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#FF6B00]`}
                placeholder="Your vendor Id"
              />
              {errors.vendorId && (
                <p className="text-red-500 text-xs mt-1">Id is required</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-[#FF6B00] to-[#ff944d] text-white font-bold rounded-lg hover:shadow-md transition duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );

};

export default VendorDetails;
