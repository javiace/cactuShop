import React, {Component} from 'react'
import { Alert } from 'react-bootstrap'

class Msg extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()  
        
    }

    componentDidUpdate =() =>{
        console.log('INIT Msg.componentDidMount')
        console.log('props=', this.props,'MyRef=', this.myRef.current)

        
        if(this.props.msg.variant && this.props.msg.variant!='primary'){
            window.scrollTo(0, this.myRef.current.offsetTop) 
            if(this.props.onCloseDo)
                setTimeout(() => {
                    //alert('timeout')
                    this.props.onCloseDo({text:''})
                },
                4000)
        }                

    }

    render(){
        if(this.props.msg && this.props.msg.text){
            return (<div ref={this.myRef}>
                    <Alert variant={this.props.msg.variant}
                           onClose={() => this.props.onCloseDo({text:''})}
                           dismissible>
                    {this.props.msg.text}
                    </Alert>
                    </div> )
        }else
            return (<div ref={this.myRef}/>)    

    }
    
}

export default Msg