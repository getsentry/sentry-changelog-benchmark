import type { KeyboardEventHandler, MouseEventHandler } from "react";

type CategoryTagProps = {
  text: string;
  active?: boolean;
  pointer?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export function CategoryTag({
  text,
  active,
  pointer,
  onClick,
}: CategoryTagProps) {
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if ((e.key === "Enter" || e.key === " ") && onClick) {
      e.preventDefault();
      onClick(e as any); // Convert keyboard event to mouse event
    }
  };

  return (
    <div
      className={`py-1 px-3 uppercase shadow-sm no-underline rounded-full text-red text-xs mr-2 ${
        pointer ? "cursor-pointer" : ""
      } ${active ? "bg-gray-300" : "bg-gray-100"}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={pointer ? 0 : undefined}
      role={pointer ? "button" : undefined}
    >
      {text.split(" ").join("-")}
    </div>
  );
}
