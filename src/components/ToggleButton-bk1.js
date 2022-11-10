import { useState, useContext } from "react";
import ThemeContext, {themes} from "../contexts/ThemeContext";

export default function ToggleButton({ statusIndex, texts }) {
  console.log({ statusIndex });
  const [myIndex, setMyIndex] = useState(statusIndex);
  const {name, setTheme} = useContext(ThemeContext);

  const classNames = ["btn"];
  classNames.push(!myIndex ? "btn-primary" : "btn-outline-primary");
  const myClick = () => {
    setMyIndex(myIndex === 0 ? 1 : 0);
    setTheme(myIndex === 0 ? themes.light : themes.dark);
  };

  return (
    <>
      <button
        type="button"
        className={classNames.join(" ")}
        onClick={myClick}
      >
        {texts[myIndex]}
      </button>
    </>
  );
}

ToggleButton.defaultProps = {
  statusIndex: 0,
  texts: ["關", "開"],
};
