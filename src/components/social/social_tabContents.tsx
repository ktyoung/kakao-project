import SocialTabAll from "./social_tabAll";
import SocialInnov from "./social_tabInnov";
import SocialITedu from "./social_tabITedu";
import SocialPartner from "./social_tabPartner";

function SocialTabContents(props: any) {
  switch (props.tab) {
    case 1:
      return <SocialTabAll />;
    case 2:
      return <SocialInnov />;
    case 3:
      return <SocialITedu />;
    case 4:
      return <SocialPartner />;
    default:
      return <SocialTabAll />;
  }
}

export default SocialTabContents;
