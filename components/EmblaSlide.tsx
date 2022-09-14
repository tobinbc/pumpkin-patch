import Image, { ImageProps } from "next/image";
import { Pumpkin } from "./Pumpkins";

const EmblaSlide = ({ description, image, type, variety }: Pumpkin) => (
  <div className="embla__slide" key={type + variety}>
    <div
      className="embla__slide__inner"
      style={{
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          height: "100%",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            padding: 10,
          }}
        >
          <h3
            style={{
              margin: 0,
            }}
          >
            {variety}
          </h3>
        </div>
        <div
          className="image-div"
          style={{
            backgroundImage: `url(${image})`,
            height: "100vw",
            maxHeight: 600,
          }}
        ></div>
        <div
          style={{
            padding: "12px",
          }}
        >
          <p
            style={{
              margin: 0,
              marginLeft: 5,
              marginTop: 5,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default EmblaSlide;
