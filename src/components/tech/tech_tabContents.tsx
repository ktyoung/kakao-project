import IfKakao from "./tech_IfKakao";
import TechTabAll from "./tech_tabAll";
import TechEvent from "./tech_tabEvent";
import KakaoTech from "./tech_tabKakaoTech";
import TechPlatform from "./tech_tabPlatform";
import TechService from "./tech_tabService";
import TechContents from "./tech_tabTechContents";

function TechTabContents(props: any) {
  switch (props.tab) {
    case 1:
      return <TechTabAll />;
    case 2:
      return <KakaoTech />;
    case 3:
      return <TechPlatform />;
    case 4:
      return <TechService />;
    case 5:
      return <TechContents />;
    case 6:
      return <TechEvent />;
    case 7:
      return <IfKakao />;
    default:
      return <TechTabAll />;
  }
}

export default TechTabContents;
