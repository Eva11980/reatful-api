import { useState } from "react";
//會用不到盡量是一個來源作設定
// import { useState, useContext } from "react";
// import ThemeContext, {themes} from "../contexts/ThemeContext";

//1 export default function ToggleButton({statusIndex}) {

//1     const classNames = ['btn'];
//1    console.log({statusIndex})

//toogle 功能1
// export default function ToggleButton({ statusIndex }) {

//屬性設定元件
// export default function ToggleButton({ statusIndex, texts }) {

//theme功能在Navbar
export default function ToggleButton({ statusIndex, texts, handler }) {
  console.log({ statusIndex });
  const [myIndex, setMyIndex] = useState(statusIndex);
  //3 const {name, setTheme} = useContext(ThemeContext);

  //1 classNames.push(statusIndex === 0 ? "btn-primary" : "btn-outline-primary");
   const classNames = ["btn"];
  //2 const text = myIndex === 0 ? "暗" : "亮";
  //2 classNames.push(myIndex === 0 ? "btn-primary" : "btn-outline-primary");
  classNames.push(!myIndex ? "btn-primary" : "btn-outline-primary");
  const myClick = () => {
    //3  setMyIndex(myIndex === 0 ? 1 : 0);
    //3  setTheme(myIndex === 0 ? themes.light : themes.dark);
    const nextStatusIndex = myIndex === 0 ? 1 : 0;
    setMyIndex(nextStatusIndex);
    handler(nextStatusIndex);
  };

  return (
    <>
      {/* 1 <button type="button" className={classNames.join(" ")}>Primary</button> */}
      {/* <button
        type="button"
        className={classNames.join(" ")}
        //3 onClick={() => setMyIndex(myIndex === 0 ? 1 : 0)}
        //toggle theme
        onClick={myClick}
      > */}
      <button type="button" className={classNames.join(" ")} onClick={myClick}>
        {/* {text} */}
        {texts[myIndex]}
      </button>
    </>
  );
}

ToggleButton.defaultProps = {
  // statusIndex: 0,
  texts: ["關", "開"],
  handler: (index) => {},
};
