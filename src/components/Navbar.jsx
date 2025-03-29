import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Default configuration
const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

// Utility function for class names (similar to cn utility)
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Dock component
const Dock = React.forwardRef(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockItem) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(
          "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10",
          "mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
          {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom",
          },
          className
        )}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);
Dock.displayName = "Dock";

// DockItem component
const DockItem = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const padding = Math.max(6, size * 0.2);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: scaleSize,
        height: scaleSize,
        padding,
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full",
        "text-sm font-medium px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
DockItem.displayName = "DockItem";

// Example usage component
const FloatingNavbar = () => {
  const navItems = [
    { label: "Home", onClick: () => console.log("Home") },
    { label: "About", onClick: () => console.log("About") },
    { label: "Blog", onClick: () => console.log("Blog") },
    { label: "Contact", onClick: () => console.log("Contact") },
  ];

  return (
    <Dock>
      {navItems.map((item) => (
        <DockItem key={item.label} onClick={item.onClick}>
          {item.label}
        </DockItem>
      ))}
    </Dock>
  );
};

export default FloatingNavbar;
