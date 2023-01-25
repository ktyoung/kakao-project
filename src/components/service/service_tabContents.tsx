import ServiceAI from "./service_tabAI";
import ServiceTabAll from "./service_tabAll";
import ServiceBusiness from "./service_tabBusiness";
import ServiceCommerce from "./service_tabCommerce";
import ServiceCommunication from "./service_tabCommunication";
import ServiceEntertainment from "./service_tabEntertainment";
import ServiceKaKaoTalk from "./service_tabKakaotalk";
import ServiceLife from "./service_tabLife";
import ServiceSocial from "./service_tabSocial";

function ServiceTabContents(props: any) {
  switch (props.tab) {
    case 1:
      return <ServiceTabAll />;
    case 2:
      return <ServiceKaKaoTalk />;
    case 3:
      return <ServiceCommunication />;
    case 4:
      return <ServiceLife />;
    case 5:
      return <ServiceCommerce />;
    case 6:
      return <ServiceEntertainment />;
    case 7:
      return <ServiceBusiness />;
    case 8:
      return <ServiceAI />;
    case 9:
      return <ServiceSocial />;
    default:
      return <ServiceTabAll />;
  }
}

export default ServiceTabContents;
