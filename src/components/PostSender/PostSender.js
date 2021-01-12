import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import './PostSender.css';


function PostSender() {

    const [input, setInput] = useState("");
    const[imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // db stuff
        setInput("");
        setImageUrl("");
    };

    return (
        <div className='postSender'> 

            <div className='postSender__top'> 
                <Avatar/>
                <form>
                    <input className='postSender__input' 
                            placeholder={"What's on your mind?"}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                             />
                    <input placeholder="image URL (optional)"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)} />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className='postSender__bottom'> 
                <div className='postSender__option'> 
                    <VideocamIcon style={{ color: "red" }} />
                    <h4> Live video </h4>
                </div>

                <div className='postSender__option'> 
                    <PhotoLibraryIcon style={{ color: "green" }}/>
                    <h4> Photo/video </h4> 
                </div>

                <div className='postSender__option'> 
                    <InsertEmoticonIcon style={{ color: "orange" }}/>
                    <h4> Feeling/activity </h4> 
                </div>

            </div>


    </div>
    )
}

export default PostSender;
