import React from "react"
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Cart from './Cart'

   
    

    class ConfirmAlert extends React.Component{
        ConfirmAlert = ()=>{
            {/*state ={open: false}
      
          **open = ()=>this.setState({open:true})
          close = ()=>this.setState({open:false})}*/}
              confirmAlert({
               title:'Yo' ,
               message: 'ya' ,
               buttons:[
                   {
                       label:'Yes',
                       onClick:()=>alert('alert yes')
                   },
                   {
                      label:'No',
                      onClick:()=>alert('No')
                  }
               ] 
      
              })
          } 
        
          render(){
             
             return  ConfirmAlert
            
          }

    }
    export default ConfirmAlert


    
    
   
    