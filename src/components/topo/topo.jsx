import React from "react";

import Cabecalhos from "../header/cabecalho";

const Topo = (props) => {
  return (
    <div>
      <Cabecalhos />

      <div>{props.children}</div>
    </div>
  );
};

export default Topo;
