
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-gray-300'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;