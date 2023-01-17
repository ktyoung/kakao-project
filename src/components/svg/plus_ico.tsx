import React from "react";
import { ReactComponent as Plus } from "../../svg/plus.svg";

function PlusIcon(props: any): JSX.Element {
  return <Plus className={props.className} />;
}

export default PlusIcon;
