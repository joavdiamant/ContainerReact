import React from "react";

const ContainerEventOverrid =  (props) => {
    
    const childEvent =  props.children.props[props.event]
    
    const  createNewEvent = (e) =>{
        console.log('override event')
		/* this is new event to overrid old event */
		props.newEvent
        childEvent ?
        childEvent()
		: ''
    }
    const {children,event} = props
        return (         
          React.cloneElement(children,{[event]:createNewEvent})
        );
}

export default ContainerEventOverrid