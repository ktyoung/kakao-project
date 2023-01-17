import React from "react";
import { ReactComponent as Arrow } from "../../svg/arrow.svg";

function ArrowIcon(props: any): JSX.Element {
  return <Arrow className={props.className} />;
}

export default ArrowIcon;
