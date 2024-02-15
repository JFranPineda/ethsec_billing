import { HomeIcon } from "@heroicons/react/24/outline";
import { Icon } from "@tremor/react";
import React from "react";
import { Link } from "react-router-dom";

const GoBackButton = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        Inicio
        <Icon
          icon={HomeIcon}
          variant="simple"
          tooltip="Shows sales performance per employee"
        />
      </Link>
    </div>
  );
};

export default GoBackButton;
