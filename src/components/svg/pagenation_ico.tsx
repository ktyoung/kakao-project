import React from "react";
import { ReactComponent as Pagenation } from "../../svg/pagenation.svg";

function PagenationIcon(props: any): JSX.Element {
  return <Pagenation className={props.className} />;
}

export default PagenationIcon;
