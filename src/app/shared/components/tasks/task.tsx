import React from 'react';
import { UserDto } from '../../interface/user.dto';

export class TaskComponent extends React.Component<UserDto> {
  
    render() {
        //const userData = { id: '1', name: 'Ohad Sahar' };
        return <div>
               <h1 className="btn btn-primary">Submit answers</h1>
             <button className="btn btn-dark">Submit dark</button>
             <div className="navbar"></div>
        </div>
     
       
    }
}