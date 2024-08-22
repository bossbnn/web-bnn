import React from "react";

function Kets(props) {
  return (
    <tr>
      <td className="border-t text-start px-2 md:px-4 py-2 font-medium align-top sm:w-auto w-20 sm:text-base text-sm">
        {props.name}
      </td>
      <td className="border-t px-0 md:px-4 py-2 align-top">:</td>
      <td className="border-t px-0 md:px-4 py-2 align-top w-auto text-start sm:w-full sm:text-base text-sm">
        <div dangerouslySetInnerHTML={{ __html: props.ket }} />
      </td>
    </tr>
  );
}

export default Kets;
