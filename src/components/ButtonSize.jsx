import React from 'react';

const Przycisk1 = ({ text="Button", size = 'medium' }) => {
    const sizeClassMap = {
        small: 'btn-sm',
        medium: '',
        large: 'btn-lg',
    };

    const sizeClass = sizeClassMap[size] || '';

    const [currentSize, setCurrentSize] = React.useState(size);

    const handleSizeChange = (newSize) => {
        setCurrentSize(newSize);
    };

    return (
        <div>
            <button style={{ fontSize: currentSize === 'small' ? '14px' : currentSize === 'large' ? '32px' : '24px' }}>{text}</button>
            <br />
            <button className={`btn ${sizeClassMap['small']}`} style={{ border: '2px solid black', backgroundColor: '#d3d3d3' }} onClick={() => handleSizeChange('small')}>Small</button>
            <button className={`btn ${sizeClassMap['medium']}`} style={{ border: '2px solid black', backgroundColor: '#d3d3d3' }} onClick={() => handleSizeChange('medium')}>Medium</button>
            <button className={`btn ${sizeClassMap['large']}`} style={{ border: '2px solid black', backgroundColor: '#d3d3d3' }} onClick={() => handleSizeChange('large')}>Large</button>
        </div>
    );
};

export default Przycisk1;