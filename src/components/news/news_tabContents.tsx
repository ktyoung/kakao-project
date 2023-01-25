import TabAll from "./news_tabAll";
import TabMedia from "./news_tabMedia";
import TabNow from "./news_tabNow";
import TabPress from "./news_tabPress";
import TabService from "./news_tabService";
import TabSustain from "./news_tabSustain";

function TabContents(props: any) {
  switch (props.tab) {
    case 1:
      return <TabAll />;
    case 2:
      return <TabPress />;
    case 3:
      return <TabNow />;
    case 4:
      return <TabMedia />;
    case 5:
      return <TabSustain />;
    case 6:
      return <TabService />;
    default:
      return <TabAll />;
  }
}

export default TabContents;
