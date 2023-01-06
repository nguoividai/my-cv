import React from "react";

type RankProgressProps = {
  title: string;
  percent: number;
};

const RankProgress: React.FC<RankProgressProps> = ({ title, percent }) => {
  return (
    <div className="progress-area">
      <div className="progress-title">{title}</div>
      <div className="progress">
        <div className="progress--percent">{percent} %</div>
        <div
          className="progress-bar"
          style={{
            width: percent + "%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(RankProgress);
