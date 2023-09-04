import React from "react";

//Icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";

const Stack = ({ stack }) => {
  function chooseIcon(tool) {
    if (!tool) return <div></div>;
    tool = tool.toUpperCase();
    let icon;
    let size = 25;
    switch (tool) {
      case "HTML":
        icon = <FaHtml5 size={size} />;
        break;
      case "CSS":
        icon = <FaCss3 size={size} />;
        break;
      case "JAVASCRIPT":
        icon = <SiJavascript size={size} />;
        break;
      case "TYPESCRIPT":
        icon = <SiTypescript size={size} />;
        break;
      case "PYTHON":
        icon = <FaPython size={size} />;
        break;
      case "MONGODB":
        icon = <SiMongodb size={size} />;
        break;
      case "EXPRESS":
        icon = <SiExpress size={size} />;
        break;
      case "REACT":
        icon = <FaReact size={size} />;
        break;
      case "NODEJS":
        icon = <FaNodeJs size={size} />;
        break;
      case "SQL":
        icon = <SiSqlite size={size} />;
        break;
      case "FIREBASE":
        icon = <SiFirebase size={size} />;
        break;
      case "NEXTJS":
        icon = <TbBrandNextjs size={size} />;
        break;
      case "SVELTE":
        icon = <SiSvelte size={size} />;
      default:
        <div></div>;
        break;
    }
    return icon;
  }
  return (
    <div>
      {stack
        ? stack.map((tool) => {
            return chooseIcon(tool);
          })
        : ""}
    </div>
  );
};

export default Stack;
