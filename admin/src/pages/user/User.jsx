import './user.css';
import noAvatar from '../../img/no-avatar.gif';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateUsers } from '../../redux/apiCalls';

const User = () => {
    const location = useLocation();
    const userId = location.pathname.split('/')[2];
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const user = useSelector((state) =>
        state.users.users.find((user) => user._id === userId)
    );

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (file) {
            const fileName = new Date().getTime() + file?.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            const userUd = {
                                ...user,
                                ...inputs,
                                avatar: downloadURL,
                            };
                            updateUsers(userId, userUd, dispatch);
                        }
                    );
                }
            );
        } else {
            const userUd = {
                ...user,
                ...inputs,
            };
            updateUsers(userId, userUd, dispatch);
        }
    };

    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img
                            src={user.avatar || noAvatar}
                            alt='img'
                            className='userShowImg'
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>
                                {user.username}
                            </span>
                            <span className='userShowUserTitle'>
                                Software Engineer
                            </span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                {user.fullName || 'Luong Anh Tuan'}
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                {user.birthday || '07.04.2000'}
                            </span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                {user.phone || '+1 123 456 67'}
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                {user.email || 'tuanluong0704@gamil.com'}
                            </span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                {user.address || 'Ho Chi Minh City'}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input
                                    type='text'
                                    name='username'
                                    placeholder={user.username || 'username'}
                                    className='userUpdateInput'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input
                                    type='text'
                                    name='fullName'
                                    placeholder={
                                        user.fullName || 'Luong Anh Tuan'
                                    }
                                    className='userUpdateInput'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input
                                    type='text'
                                    name='email'
                                    placeholder={
                                        user.email || 'email@gmail.com'
                                    }
                                    className='userUpdateInput'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input
                                    type='text'
                                    name='phone'
                                    placeholder={user.phone || '+1 123 456 67'}
                                    className='userUpdateInput'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input
                                    type='text'
                                    name='address'
                                    placeholder={
                                        user.address || 'Ho Chi Minh City'
                                    }
                                    className='userUpdateInput'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img
                                    src={user.avatar || noAvatar}
                                    alt='img'
                                    className='userUpdateImg'
                                />
                                <label htmlFor='file'>
                                    <Publish className='userUpdateIcon' />
                                </label>
                                <input
                                    type='file'
                                    id='file'
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </div>
                            <button
                                className='userUpdateButton'
                                onClick={handleClick}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;
