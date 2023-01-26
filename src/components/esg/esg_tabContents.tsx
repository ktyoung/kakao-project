import ESGTabAll from "./esg_tabAll";
import ESGEnvironment from "./esg_tabEnvironment";
import ESGGovernance from "./esg_tabGovernance";
import ESGIntro from "./esg_tabIntro";
import ESGReport from "./esg_tabReport";
import ESGSocial from "./esg_tabSocial";

function ESGTabContents(props: any) {
  switch (props.tab) {
    case 1:
      return <ESGTabAll />;
    case 2:
      return <ESGIntro />;
    case 3:
      return <ESGEnvironment />;
    case 4:
      return <ESGSocial />;
    case 5:
      return <ESGGovernance />;
    case 6:
      return <ESGReport />;
    default:
      return <ESGTabAll />;
  }
}

export default ESGTabContents;
