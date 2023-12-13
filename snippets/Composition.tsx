import React from 'react';
import Button from './Button';

export const Toolbar: React.FC = () => {
    const handleSave = () => {
        console.log('Save button clicked');
    };

    const handleDelete = () => {
        console.log('Delete button clicked');
    };

    return (
        <div>
            <Button text="Save" onClick={handleSave} />
            <Button text="Delete" onClick={handleDelete} />
        </div>
    );
};
