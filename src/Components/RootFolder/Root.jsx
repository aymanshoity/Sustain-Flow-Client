
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-slate-200'>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;