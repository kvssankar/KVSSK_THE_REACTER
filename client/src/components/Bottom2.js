import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Progress,
} from "reactstrap";
import "../css/bottom1.css";
const Bottom2 = () => {
  const data = [
    {
      matter:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa reiciendis cum sunt maiores, labore consequuntur assumenda laboriosam minima, dignissimos voluptatem esse",
      img:
        "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      link: "#",
    },
    {
      matter:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa reiciendis cum sunt maiores, labore consequuntur assumenda laboriosam minima,matter esse",
      img:
        "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      link: "#",
    },
    {
      matter:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ipsa reiciendis cum sunt maiores, labore consequuntur assumenda laboriosam minima, dignissimos matter 3 esse",
      img:
        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      link: "#",
    },
  ];
  const [index, setIndex] = useState(1);
  const [matter, setMatter] = useState(data[0].matter);
  const [link, setLink] = useState(data[0].link);
  const [img, setImg] = useState(data[0].img);
  const changerplus = () => {
    setIndex(index + 1);
    if (index < 2) {
      setMatter(data[index].matter);
      setLink(data[index].link);
      setImg(data[index].img);
    } else {
      setIndex(0);
      setMatter(data[index].matter);
      setLink(data[index].link);
      setImg(data[index].img);
    }
  };
  const changerminus = () => {
    setIndex(index - 1);
    if (index > 0) {
      setMatter(data[index].matter);
      setLink(data[index].link);
      setImg(data[index].img);
    } else {
      setIndex(2);
      setMatter(data[index].matter);
      setLink(data[index].link);
      setImg(data[index].img);
    }
  };
  return (
    <div className="bottom2">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <div className="top-left">
            <img
              src="https://image.flaticon.com/icons/svg/523/523047.svg"
              alt=""
              onClick={changerminus}
            />
            <img
              src="https://image.flaticon.com/icons/svg/523/523007.svg"
              alt=""
              onClick={changerplus}
            />
          </div>

          <Progress value={((index + 1) / 3) * 100} />
        </div>
        <div className="remain">
          <div className="remain-bg"></div>
          <div className="fadey"></div>
          <h4>{matter}</h4>
          <a href={link}>{"READ MORE -->"}</a>
        </div>
      </div>
    </div>
  );
};

export default Bottom2;
