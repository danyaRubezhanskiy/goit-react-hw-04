import axios from "axios";
import SearchBox from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);

  const notify = () => toast.error("Please enter your search query");

  const fetchPhotos = async (query) => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=${12}&client_id=ta_gU_VpEth5AI66-U4EWKQ4xudh-a8yAmiRRXyuWM0`
      );
      console.log(data);
      setImages(data.results.map((result) => result.urls.small));
      if (data.results.length === 0) {
        toast.error("no photos");
      }
    } catch (error) {
      toast.error("Error fetching photos");
      console.error(error);
    }
  };

  const onSubmit = (values, actions) => {
    if (values.query === "") {
      notify();
    } else {
      fetchPhotos(values.query);
    }
    actions.resetForm();
  };

  return (
    <div>
      <SearchBox onSubmit={onSubmit}></SearchBox>
      <Toaster position="top-right" reverseOrder={false} />
      <ImageGallery images={images}></ImageGallery>
      <Loader></Loader>
    </div>
  );
}

export default App;
