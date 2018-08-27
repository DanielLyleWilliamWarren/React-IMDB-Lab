import React, {Component} from 'react';

const Films = function (props) {

  return (
    <div>
<table>

<tr>
  <td>{props.title}</td>
  <td>{props.url}></td>
</tr>


</table>
    </div>
  );
}


export default Films;
