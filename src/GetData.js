import React from 'react';
import {useDispatch} from 'react-redux'
import {counter} from './MyComponents/counter'
class GetData extends React.Component {
   
    // Constructor 
    
    constructor(props) {
        super(props);
        const dispatch=useDispatch();
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
       
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {

        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
  
        return (
        
        <div className='page-container'>
        <h2>Data Display</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User_Name</th>
              <th>Full_Name</th>
              <th>User_Email</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
// button
<div>
  <button onClick={(e)=>dispatch({type:'Increment'})}></button>
  <counter/>
  <button onClick={(e)=>dispatch({type:'Decrement'})}></button>
</div>
      </div>
    );
}
}
export default GetData;