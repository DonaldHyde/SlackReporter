import "../less/note.less"

import React from "react";

const Note = ({
    placeholder,
    value,
    onChange
}) => {
    return (
        <input
            className="note"
            placeholder={placeholder}
            value={value}
            onChange={(e) => { onChange(e.target.value) }}
        />
    );
};

export default Note;