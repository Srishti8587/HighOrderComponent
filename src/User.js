import React from 'react'
import EnhanceElement from './HOC';

const User = ({data}) => {
    let filteredUsers = data.map((user) =>{
        return (
            <div key={user.id}>
                <h2>{user.name}</h2>
            </div>
        );
    });

    return (
         <>
             <div>
              <h1>{filteredUsers}</h1>
             </div>
         </>
    )
}

export default EnhanceElement(User,"users");
