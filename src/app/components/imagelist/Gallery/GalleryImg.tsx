import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styles from "./galleryImg.module.css";
import { Button, Typography } from "@mui/material";
import { fontSize } from "../../theme/fontsize";
import { ThemeColor } from "../../theme/color";
import { fontWeight } from "../../theme/fontWeight";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const initialItems = [
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 1,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 2,
    rows: 3,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 3,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 4,
    rows: 1,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 5,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 6,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 7,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 8,
    rows: 2,
    cols: 2,
  },
];

const moreItems = [
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 1,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 2,
    rows: 3,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 3,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 4,
    rows: 1,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 5,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 6,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 7,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 8,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 9,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 10,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 11,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 12,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 1,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 2,
    rows: 3,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 3,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 4,
    rows: 1,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 5,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 6,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 7,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 8,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 9,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 10,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 11,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 12,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 1,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 2,
    rows: 3,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 3,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 4,
    rows: 1,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 5,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 6,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 7,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 8,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 9,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 10,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 11,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 12,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 1,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 2,
    rows: 3,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 3,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 4,
    rows: 1,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 5,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 6,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 7,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 8,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-pro.png",
    title: "Image 1",
    index: 9,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-air.png",
    title: "Image 2",
    index: 10,
    rows: 2,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x-plus.png",
    title: "Image 3",
    index: 11,
    cols: 2,
  },
  {
    img: "/electricscooter/ola/ola-s1-x.png",
    title: "Image 4",
    index: 12,
    cols: 2,
  },
];

const ITEMS_TO_SHOW_INITIAL = 10;
const ITEMS_TO_LOAD = 10;

export default function GalleryImg() {
  const [visibleItems, setVisibleItems] = React.useState(ITEMS_TO_SHOW_INITIAL);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + ITEMS_TO_LOAD, moreItems.length)
    );
  };

  return (
    <div className={styles.imagelist}>
      <ImageList variant="quilted" cols={4} gap={8}>
        {moreItems.slice(0, visibleItems).map((item, index) => (
          <ImageListItem key={index} cols={index % 4 === 0 ? 2 : 1} rows={1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {visibleItems < moreItems.length && (
        <div>
          <Typography align="center" color={ThemeColor.LIGHTBLUE} fontWeight={fontWeight.W600} fontSize={fontSize.h3.medium} onClick={handleViewMore}>
            View More({moreItems.length - visibleItems})
          </Typography>
        </div>
      )}
    </div>
  );
}
