import React from "react";

type CardProjectProps = {
  counter: number;
  title: React.ReactNode;
  content?: React.ReactNode;
};

const CardProject: React.FC<CardProjectProps> = ({
  counter,
  title,
  content,
}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <strong className="card-counter">{counter}</strong>
          <h3 className="card-title">{title}</h3>
          <div className="card-text">{content}</div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CardProject);
