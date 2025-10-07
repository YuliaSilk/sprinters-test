import React, {type ReactNode} from "react";

interface ButtonGroupProps {
 buttons: ReactNode[];
 separatorColor?: string;
 separatorHeight?: string;
 gap?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
 buttons,
 separatorColor = "bg-gray-300",
 separatorHeight = "h-[48px]",
 gap = "mx-4",
}) => {
 return (
  <div className="flex items-center">
   {buttons.map((button, index) => (
    <React.Fragment key={index}>
     {button}
     {index < buttons.length - 1 && <div className={`${separatorColor} ${separatorHeight} w-[1px] ${gap}`} />}
    </React.Fragment>
   ))}
  </div>
 );
};
