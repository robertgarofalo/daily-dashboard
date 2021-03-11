import React, { useState, useEffect } from 'react';
import './Messages.css';
import axios from 'axios';

    // const BASE_URL = 'https://dummyapi.io/data/api';
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '6049862f04bf8a800056cfab';
    
    function Messages() {
        const [loading, setLoading] = useState(false);
        const [content, setContent] = useState([]);
    
        useEffect(() => {
            setLoading(true);
            axios.get(`${BASE_URL}/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10`, { headers: { 'app-id': APP_ID } })
                .then(({data}) => {
                    setContent(data.data[0]);
                    console.log('the data: ', data.data[0]);
                })
                .catch(console.error)
                .finally(() => {
                    setLoading(false);
                    console.log(content)
                });
        }, []);
    
        
        return (
            <div className="messages-component">
                {/* {content.map(item => (
                    <div className="sender-image">
                        <div>
                        <img src="" />
                        </div>

                    <div className="email-item">
                        <h3 className="from">{item}</h3>
                        <p className="subject">Subject</p>
                        <p className="message">Message</p>
                    </div>
                    <div className="email-date">
                        <p>9 Mar</p>
                        </div>

                    </div>
              ))}  */}

              {/* <p>{content}</p> */}
            </div>
        )
    };


export default Messages
