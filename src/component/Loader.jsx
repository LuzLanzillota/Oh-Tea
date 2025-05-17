import React from 'react';
import { MoonLoader} from 'react-spinners';

function Loader() {
    const loaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: 'white'
    };

    return (
        <div style={loaderStyle}>
            <MoonLoader
                size={50}
                margin={5}
                color="#E385A0"
                loading={true}
            />
        </div>
    );
}

export default Loader;
