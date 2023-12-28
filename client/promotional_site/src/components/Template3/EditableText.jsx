import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { ClassNames } from '@emotion/react';


const EditableText = ({ initialValue, className, backColor, color, selectedFont, fontSize, textAlign, handleDefaultTextChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
          <TextareaAutosize
            className={className}
            style={{ outline: 'none', border: "none", resize: "none", with: "100%", backgroundColor: `${backColor}`, textAlign: `${textAlign}`, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }}
            type='text'
            value={initialValue}
            onChange={(e) => handleDefaultTextChange(e.target.value)}
            onBlur={handleInputBlur}
            autoFocus
          />
      ) : (
        // <p className={className} onClick={handleTextClick}>{editingText}</p>
        <div className={className} onClick={handleTextClick} style={{ textAlign: textAlign, fontFamily: selectedFont, color: `${color}`, fontSize: `${fontSize}px` }}>{initialValue}</div>

      )}
    </div>
  );
};

export default EditableText;
