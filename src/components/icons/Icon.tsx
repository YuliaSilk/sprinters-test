import React from "react";

const svgs = import.meta.glob<{ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>}>("@/assets/icons/*.svg", {
 eager: true,
});

const icons = Object.fromEntries(
 Object.entries(svgs).map(([path, module]) => {
  const name = path.split("/").pop()?.replace(".svg", "") || "";
  return [name, module.ReactComponent];
 })
) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
 name: IconName;
 className?: string;
}

export const Icon: React.FC<IconProps> = ({name, className, ...props}) => {
 const SvgIcon = icons[name];
 if (!SvgIcon) {
  console.warn(`Icon "${name}" not found in assets/icons`);
  return null;
 }
 return (
  <SvgIcon
   className={className}
   {...props}
  />
 );
};
