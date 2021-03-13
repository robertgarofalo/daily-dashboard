import React, { useState, useEffect } from 'react';
import './Messages.css';
import axios from 'axios';

    
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '6049862f04bf8a800056cfab';

    const fetchRandomData = () => {
        return axios.get(`${BASE_URL}/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10`, { headers: { 'app-id': APP_ID } })
        // return axios.get('https://www.randomuser.me/api')
                .then(({data}) => {
                    console.log('.then', data);
                    return data;
                })
                .catch(err => {
                    console.log(err);
                });
    }
    
    function Messages() {
        const [loading, setLoading] = useState(true);
        const [content, setContent] = useState([]);

        useEffect(() => {
            fetchRandomData().then((randomData) => {
                console.log('here is just randomData', randomData);
                // console.log('here is randomData,data', randomData);
                setContent(randomData.data) 
                console.log(content);               
            })
        }, []);
        
        const getFullUserName = (userInfo) => {
              const {owner: {firstName, lastName}} = userInfo;
            return `${firstName} ${lastName}`;

        }

        return (
            <div className="messages-component">
                    
                    {content.map((userInfo, index) => (
                        <div>
                            
                        <li className="message">                           
                         <div className="sender-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpWMgrpjpsJOd9MTSFUYV8MhYs7quAhqA7w&usqp=CAU" />
                            </div>

                            <div className="email-item">
                                <h3 className="from"> {getFullUserName(userInfo)}</h3>
                                <p className="subject">subject</p>
                                <p className="message">Message</p>
                            </div>

                            <div className="email-date">
                                <p>9 Mar</p>
                            </div>
                        </li> 
                        </div>
                ))} 
                
            </div>
        )
    };


export default Messages
