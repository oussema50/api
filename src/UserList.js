import React,{useState,useEffect} from 'react'
import axios from 'axios'
const UserList = () => {
    const [listOfUSer ,setListOfUSer ] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            
            setListOfUSer(res.data)
        });
    }, [])
    return (
        <div className="userList" >
            {listOfUSer.map((item)=>{
               return (
                   <div key={item.id} className="user" >
                       <div>
                            <span>Name :</span>
                            <span> {item.name}</span>
                       </div>
                       <div>
                            <span>Email :</span>
                            <span> {item.email}</span>
                       </div>
                       <div>
                            <span>Phone :</span>
                            <span> {item.phone}</span>
                       </div>
                       <div>
                            <span>WebSite :</span>
                            <a href={item.website}> {item.website}</a>
                       </div>
                   </div>
               )
            })}
        </div>
    )
}

export default UserList
