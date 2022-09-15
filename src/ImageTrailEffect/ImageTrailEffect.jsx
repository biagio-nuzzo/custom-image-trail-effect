import React, { useState, useEffect, useRef } from "react";

// Libraries
import styled, { keyframes } from "styled-components";

// Functions
import calculateDistanceBetweenTwoPoints from "./Functions/calculateDistanceBetweenTwoPoints";
import getRelativeCoordinates from "./Functions/getRelativeCoordinates";

// Styles
import Style from "./ImageTrailEffect.module.css";

const ImageTrailEffect = ({
  animationFadeDuration = 0.5,
  animationFadeDelay = 0.5,
  animationMoveDuration = 1,
  animationFadeType = "ease-in-out",
  animationMoveType = "ease-in-out",
  endOpacity = 0,
  endScale = 0.5,
  floater = true,
  imageHeight = 600,
  imageWidth = 400,
  images,
  movementXRation = 0.5,
  movementYRation = 0.5,
  maxImageCount = 10,
  spawnAdjustmentXValue = 2,
  spawnAdjustmentYValue = 3,
  startOpacity = 1,
  startScale = 1,
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
          const x3 = (relativeCoordinates.x - p1.x) * movementXRation;
          const y3 = (relativeCoordinates.y - p1.y) * movementYRation;

          // Set the first point
          setFirstPoint({ x: relativeCoordinates.x, y: relativeCoordinates.y });

          // Create styled-components element in order to create the new image
          // Animations
          const animationMove = keyframes`
                  0% {
                    transform: translate(${spawnAdjustmentX}px, ${spawnAdjustmentY}px));
                  }
      
                  100% {
                    transform: translate(${x3}px, ${y3}px);
                  }
                `;

          const animationFade = keyframes`
          0% {
            opacity: ${startOpacity};
            transform: scale(${startScale});
          }
          100% {
            opacity: ${endOpacity};
            transform: scale(${endScale});
          }`;

          const animationFloat = keyframes`
          0% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(0px, -${Math.floor(
              Math.random() * (15 - 10 + 1) + 10
            )}px);
          }
          100% {
            transform: translate(0px, 0px);
          }`;

          // Styled-component
          const Floater = styled.div`
            animation: ${animationFloat}
              ${Math.floor(Math.random() * (3 - 2 + 1) + 2)}s linear infinite;
          `;

          const Translator = styled.div`
            animation: ${animationMove} ${animationMoveDuration}s
              ${animationMoveType} forwards;
            position: absolute;
            top: ${relativeCoordinates.y + spawnAdjustmentX}px;
            left: ${relativeCoordinates.x + spawnAdjustmentY}px;
          `;

          const AnimatedImg = styled.img`
            animation: ${animationFade} ${animationFadeDuration}s
              ${animationFadeType} ${animationFadeDelay}s forwards;
          `;

          // Create the new image
          const image = floater ? (
            <Floater key={Math.floor(Math.random() * 100000000000)}>
              <Translator>
                <AnimatedImg
                  alt="trail-effect"
                  width={imageWidth}
                  height={imageHeight}
                  src={images[Math.floor(Math.random() * images.length)]}
                />
              </Translator>
            </Floater>
          ) : (
            <Translator key={Math.floor(Math.random() * 100000000000)}>
              <AnimatedImg
                alt="trail-effect"
                width={imageWidth}
                height={imageHeight}
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

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={animationContainerRef} className={Style.animationContainer}>
      {imageList && imageList}
    </div>
  );
};

export default ImageTrailEffect;
