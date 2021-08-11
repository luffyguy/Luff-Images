import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import CountSlider from "./Slider";
import { getImages } from "../../service/api";
import Images from "./Images";
import Header from "../header/Header";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("popular");
  const [count, setCount] = useState(20);

  const onTextChange = (search) => {
    console.log(search);
    setSearch(search);
  };

  const onCountChange = (count) => {
    console.log(count);
    setCount(count);
  };

  useEffect(() => {
    getImages(search, count).then((response) => {
      console.log(response.data.hits);
      setData(response.data.hits);
    });
  }, [search, count]);
  return (
    <Box>
      <Header onTextChange={onTextChange} />
      <Box>
        <CountSlider onCountChange={onCountChange} />
      </Box>
      <Box>
        <Images data={data} />
      </Box>
    </Box>
  );
};

export default Home;
