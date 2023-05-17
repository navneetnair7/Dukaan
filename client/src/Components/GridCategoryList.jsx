import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GridCategoryList = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get("http://localhost:4000/categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
      // console.log(categories);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="rounded-r-3xl border-gray-200 border-2 w-10/12 mt-32 flex-col pb-4 pl-2 items-center justify-center">
      <p className="ml-8 font-semibold text-xl mt-2">Categories</p>
      <div className="flex flex-col">
        {categories.map((category) => {
          return (
            <div
              className="rounded-3xl w-11/12 h-[44px] pt-0.5 mt-4 hover:bg-yellow-200 hover:cursor-pointer"
              onClick={() => {
                navigate(`/category/${category.Name}`);
                window.location.reload(false);
              }}
            >
              <p className="font-semibold mt-2 ml-8">{category.Name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridCategoryList;
