import React, { useState, useEffect } from 'react';
import './Messages.css';
import axios from 'axios';

    
    const BASE_URL = 'https://dummyapi.io/data/api';
    const APP_ID = '6049862f04bf8a800056cfab';

    const fetchRandomData = () => {
        // return axios.get(`${BASE_URL}/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10`, { headers: { 'app-id': APP_ID } })
        return axios.get('https://www.randomuser.me/api?nat=us&results=4')
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
        const [userInfo, setUserInfo] = useState([]);

        useEffect(() => {
            fetchRandomData().then((randomData) => {
                console.log('here is just randomData', randomData);
                // console.log('here is randomData,data', randomData);
                setUserInfo(randomData.results) 
                            
            })
        }, []);
        
        const getFullUserName = (user) => {
              const {name: {first, last}} = user;
            return `${first} ${last}`;
        }

        const randomMessages =
            {
                subjects: ['subject1', 'subject2', 'subject3', 'subject4'],
                messages: ['messages1', 'messages2', 'messages3', 'message4']
            }

        return (
            <div className="messages-component">
                 <h1>Messages</h1>   
                    {userInfo.map((user, index) => (
                        <div>
                            
                        <li className="message">     

                                <div className="sender-image">
                                    <img src={user.picture.thumbnail} />
                                </div>

                                <div className="email-item">
                                    <h4 className="from">{getFullUserName(user)}</h4>
                                    <p className="email">{user.email}</p>
                                    <p className="subject">{randomMessages.subjects[index]}</p>
                                    <p className="message-item">{randomMessages.messages[index]}</p>
                                </div>

                                <div className="email-date">
                                    <p>9 Mar</p>
                                </div>

                        </li> 

                        </div>
                ))}  

                <h3>All</h3>
                
            </div>
        )
    };


export default Messages
