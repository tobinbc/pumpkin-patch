import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import EmblaSlide from "./EmblaSlide";
import pumpkins from "./Pumpkins";

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            // height: "100vh",
          }
        }
      >
        <div
          style={{
            height: 100,
          }}
          className="embla embla--thumb"
        >
          <div className="embla__viewport" ref={thumbViewportRef}>
            <div className="embla__container embla__container--thumb">
              {pumpkins.map(({ image }, index) => (
                <div
                  key={String(index)}
                  className={`embla__slide embla__slide--thumb ${
                    selectedIndex === index ? "is-selected" : ""
                  }`}
                  onClick={() => onThumbClick(index)}
                >
                  <div
                    className="embla__slide__thumbnail image-div"
                    style={{
                      backgroundImage: `url(${image})`,

                      height: "100%",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
          }}
          className="embla"
        >
          <div
            className="embla__viewport"
            ref={mainViewportRef}
            style={
              {
                // overflow: "scroll",
              }
            }
          >
            <div className="embla__container">{pumpkins.map(EmblaSlide)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
