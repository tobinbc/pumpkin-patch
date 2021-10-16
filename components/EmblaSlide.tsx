import Image, { ImageProps } from "next/image";
import { Pumpkin } from "./Pumpkins";

const EmblaSlide = ({ name, url, goodFor, size, eatability }: Pumpkin) => (
  <div className="embla__slide" key={name}>
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
            {name}
          </h3>
        </div>
        <div
          className="image-div"
          style={{
            backgroundImage: `url(${url})`,
            height: "100vw",
            maxHeight: 600,
          }}
        ></div>
        <div>
          <div
            style={{
              padding: 10,
              display: "inline-block",
              width: "50%",
              verticalAlign: "top",
            }}
          >
            <h4
              style={{
                margin: 0,
              }}
            >
              Typical size
            </h4>
            <p
              style={{
                margin: 0,
                marginLeft: 5,
                marginTop: 5,
              }}
            >
              {size.charAt(0).toUpperCase() + size.substr(1)}
            </p>
            <h4 style={{
                marginBottom: 0,
                 
              }}>Tasting notes</h4>
            <p
              style={{
                margin: 0,
                marginLeft: 5,
                marginTop: 5,
              }}
            >
              {eatability}
            </p>
          </div>
          <div
            style={{
              padding: 10,
              display: "inline-block",
              width: "50%",
            }}
          >
            <h4
              style={{
                margin: 0,
              }}
            >
              Good for
            </h4>
            {goodFor.map((words) => (
              <div
                key={words}
                style={{
                  marginLeft: 5,
                  marginTop: 5,
                  // paddingTop: 10,
                  // paddingBottom: 10,
                  // border: "1px solid lightgrey",
                }}
              >
                {words}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default EmblaSlide;
