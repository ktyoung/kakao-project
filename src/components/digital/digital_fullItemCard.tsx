function DigitalItemCard(props: any) {
  return (
    <li>
      <div
        className="item_card card_full"
        style={{
          backgroundImage: props.bg_url,
        }}
      >
        <a href={props.href} className="cont_resposible">
          <span role={"text"}>
            <strong className="tit_responsible">{props.tit_responsible}</strong>
            <span className="txt_responsible">{props.txt_responsible}</span>
          </span>
        </a>
      </div>
    </li>
  );
}

export default DigitalItemCard;
