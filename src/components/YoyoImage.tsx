import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  image: string;
};

const YoyoImage = ({ image }: Props) => {
  const controls = useAnimation();

  // Define animation keyframes
  const animationVariants = {
    initial: {
      y: -180, // Start position
    },
    animate: {
      y: 20, // End position
      transition: {
        duration: 8, // Animation duration
      },
    },
    yoyo: {
      y: -180, // Back to the initial position
      transition: {
        duration: 8, // Animation duration
      },
    },
  };

  useEffect(() => {
    const startAnimation = async () => {
      // Start the animation with a "yoyo" effect
      await controls.start("animate");
      await controls.start("yoyo");
    };

    // Trigger the animation automatically when the component mounts
    startAnimation();

    let isMounted = true; // Flag to check if the component is mounted

    // Define a function for the animation loop
    const animationLoop = async () => {
      while (isMounted) {
        await startAnimation(); // Start the animation
        await new Promise((resolve) => setTimeout(resolve, 200)); // Wait for a delay before running again
      }
    };

    animationLoop(); // Start the animation loop

    // Clean up the loop when the component unmounts
    return () => {
      isMounted = false; // Set the flag to false to stop the loop when the component unmounts
    };
  }, [controls]);

  return (
    <motion.img
      className="rounded-full object-cover h-72 w-72"
      initial="initial"
      animate={controls}
      variants={animationVariants}
      // src={`assets/people/${image}`}
      src={`/${image}`}
      alt="Animated Image"
    />
  );
};

export default YoyoImage;
