import React from "react";

function InfoSection(props: any) {
  return (
    <div className="info_section">
      <div className="inner_section">
        <div className="wrap_img">
          <video
            src={process.env.PUBLIC_URL + "/video/" + props.video_title}
            autoPlay
            muted
            loop
            playsInline
            className="vod_section"
          ></video>
        </div>
        <div className="wrap_cont">
          <strong className="tit_info" id="text1_2">
            {props.tit_info}
          </strong>
          <span className="txt_info">{props.txt_info}</span>
          <div className="info_cont">
            <p className="desc_info">{props.desc_info}</p>
            <div className="wrap_tag">
              <span className="txt_tag">{props.txt_tag1}</span>
              <span className="txt_tag">{props.txt_tag2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
