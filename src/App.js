
// import React, { Component } from 'react';

// class App extends Component {
//  state={
//    name:"rafik" , 
//    bio : "instructotr" ,
//    age : 27 
//  }

// //  componentDidMount() {
// //   //  alert('hello')
// //    console.log('componentDidMount')
// //  }
// componentDidUpdate(){
//   // alert('change')
//   console.log('componentDidUpdate')
// }
//   render() {

//     console.log('render')
//     return (
//       <>
//      <p> name : {this.state.name}</p>
//      <p> bio : {this.state.bio}</p>
//      <p> age : {this.state.age}</p>

//      <button onClick={()=>{this.setState({name:"jhon doe"})}}> change</button>
//       </>
//     );
//   }
// }

// export default App;


// import React ,{useState}from 'react'

// const App = () => {
//   const[person , setPerson] = useState({
//        name:"rafik" , 
//        bio : "instructotr" ,
//         age : 27 
//   })
//   return (
//     <div>
//       <p> name : {person.name}</p>
//       <p>bio : {person.bio}</p>
//       <p>age : {person.age}</p>
//       <button onClick={()=>setPerson({...person , name : "jhon doe"})}>change</button>
//     </div>
//   )
// }

// export default App



import React, { Component } from 'react'

export default class App extends Component {
  state ={
    time : 0 , 
    name : 'rafik'
  }

  tickHandler = ()=>{
    this.setState({time : this.state.time + 1})

    return this.state.time
  }

  componentDidMount(){
    var timer = setInterval(this.tickHandler , 100)
    this.setState({time : timer})
  }


  render() {
   
    const displaytime = ()=>{
      if (this.state.time < 60){
        return this.state.time + 'Seconds(s)'
      }
  
      const SS = this.state.time % 60 ;
      const MM = ((this.state.time / 60) % 60).toFixed(0)
      const HH = (this.state.time/(60*60)).toFixed(0)
      return `${HH}H: ${MM}m: ${SS}s` ;
    }
    return (
      <div>
        <p>{displaytime()} </p>
      </div>
    )
  }
}
