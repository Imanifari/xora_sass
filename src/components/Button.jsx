import React from "react";

const Button = ({ icon, children, href, onclick }) => {
  const Inner = () => <>Text</>;

  return href ? (
    <a
      href={href}
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
    >
      {" "}
      <Inner />
    </a>
  ) : (
    <button
      onClick={onclick}
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
    >
      Children
    </button>
  );
};

export default Button;
