import React from "react";
import { ReactComponent as OutlinkCircle } from "../../svg/outlink_circle.svg";

function OutlinkCircleIcon(props: any): JSX.Element {
  return <OutlinkCircle className={props.className} />;
}

export default OutlinkCircleIcon;
