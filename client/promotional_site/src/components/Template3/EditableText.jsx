import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { ClassNames } from '@emotion/react';


const EditableText = ({ initialValue, className,backColor, color, selectedFont, fontSize,textAlign}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(initialValue);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditingText(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <TextareaAutosize
          className={className}
          style={{outline: 'none', border: "none", resize: "none", backgroundColor:`${backColor}`, textAlign: `${textAlign}`, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }}
          type='text'
          value={editingText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        // <p className={className} onClick={handleTextClick}>{editingText}</p>
        <div className={className} onClick={handleTextClick} style={{textAlign: `${textAlign}`, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px`}}>{editingText}</div>

      )}
    </div>
  );
};

export default EditableText;
