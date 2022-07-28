import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import avatar from '../../img/FB_IMG_1617646095508.jpg';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>LV7 Admin</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src={avatar} alt='avatar' className='topAvatar' />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
