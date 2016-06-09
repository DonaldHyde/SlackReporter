import '../less/send.less';

import React from 'react';

const Send = ({
    onClick
}) => {
    return (
        <button className="send" onClick={onClick} >SUBMIT STATUS</button>
    )
}

export default Send;