import React from "react";
import { ReactComponent as Arr } from "../../svg/arr.svg";

function ArrIcon(props: any): JSX.Element {
  return <Arr className={props.className} />;
}

export default ArrIcon;
