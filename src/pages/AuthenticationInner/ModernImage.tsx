import React from "react";

const ModernImage = () => {
  return (
    <React.Fragment>
      <div className="object-cover inset-0 bg-pattern-2 ">
        <img src={"/img/world.webp"} alt="Mundo" width={1425} height={1080} />
      </div>
    </React.Fragment>
  );
};

export default ModernImage;
