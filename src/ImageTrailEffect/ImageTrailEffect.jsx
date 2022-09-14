import React, { useState, useEffect, useRef } from "react";

// Libraries
import styled, { keyframes } from "styled-components";

// Functions
import calculateDistanceBetweenTwoPoints from "./Functions/calculateDistanceBetweenTwoPoints";
import getRelativeCoordinates from "./Functions/getRelativeCoordinates";

// Styles
import Style from "./ImageTrailEffect.module.css";

const ImageTrailEffect = ({
  animationDuration = 1,
  animationType = "ease-in-out",
  endOpacity = 0,
  endScale = 0.5,
  imageHeight = 600,
  imageWidth = 400,
  images,
  maxImageCount = 10,
  spawnAdjustmentXValue = 2,
  spawnAdjustmentYValue = 3,
  startOpacity = 1,
  startScale = 1,
  switchAnimation = "20%",
  triggerDistance = 80,
}) => {
  // States
  const [firstPoint, setFirstPoint] = useState(null);
  const [imageList, setImageList] = useState([]);

  // Constants
  const spawnAdjustmentX = -imageWidth / spawnAdjustmentXValue;
  const spawnAdjustmentY = -imageHeight / spawnAdjustmentYValue;

  // Refs
  const animationContainerRef = useRef(null);
  const firstPointRef = useRef();

  // Refs Declaration
  firstPointRef.current = firstPoint;

  // Main Function
  function handleMouseMove(event) {
    let distance;

    if (event) {
      // Get the relative coordinates of the mouse regarding the animation container
      const relativeCoordinates = getRelativeCoordinates(
        event,
        animationContainerRef.current
      );

      if (firstPointRef.current === null) {
        // Initialize the first point
        setFirstPoint({ x: relativeCoordinates.x, y: relativeCoordinates.y });

        // Remove and addListener to avoid unnecessary calculations
        document.removeEventListener("mousemove", handleMouseMove);
        setTimeout(() => {
          document.addEventListener("mousemove", handleMouseMove);
        }, 10);
      } else {
        // Calculate the distance between the first point and the current point
        distance = calculateDistanceBetweenTwoPoints(firstPointRef.current, {
          x: relativeCoordinates.x,
          y: relativeCoordinates.y,
        });

        // If the distance is greater than the setted value spawn a new image
        if (distance > triggerDistance) {
          // Remove and addListener to avoid unnecessary calculations
          document.removeEventListener("mousemove", handleMouseMove);
          setTimeout(() => {
            document.addEventListener("mousemove", handleMouseMove);
          }, 10);

          // Set the coordinates for the new image
          const p1 = firstPointRef.current;
          const x3 = relativeCoordinates.x - p1.x;
          const y3 = relativeCoordinates.y - p1.y;

          // Set the first point
          setFirstPoint({ x: relativeCoordinates.x, y: relativeCoordinates.y });

          // Create styled-components element in order to create the new image
          // Animation
          const animationMove = keyframes`
                  0% {
                    transform: translate(0px, 0px);
                    opacity: ${startOpacity};
                  }

                ${switchAnimation}{
                    transform: translate(${x3}px, ${y3}px);
                    scale: ${startScale};
                    opacity: ${startOpacity};
                    }
      
                  100% {
                    transform: translate(${x3}px, ${y3}px);
                    opacity: ${endOpacity};
                    scale: ${endScale};
                  }
                `;

          // Styled-component
          const Translator = styled.div`
            animation: ${animationMove} ${animationDuration}s ${animationType}
              forwards;
            position: absolute;
            top: ${relativeCoordinates.y}px;
            left: ${relativeCoordinates.x}px;
          `;

          // Create the new image
          const image = (
            <Translator key={Math.floor(Math.random() * 100000000000)}>
              <img
                alt="trail-image"
                style={{
                  width: imageWidth,
                  height: imageHeight,
                }}
                src={images[Math.floor(Math.random() * images.length)]}
              />
            </Translator>
          );

          // Add the new image to the list of images
          setImageList((oldImageList) => {
            const listLen = oldImageList.length;
            if (listLen > maxImageCount) {
              oldImageList.shift();
            }
            return [...oldImageList, image];
          });
        }
      }
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={animationContainerRef} className={Style.animationContainer}>
      {imageList && imageList}
    </div>
  );
};

export default ImageTrailEffect;
