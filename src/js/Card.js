import React, { Component } from 'react';
import logo from '../assets/img/NC_logo_white.png';
import * as audio from './audio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faWindowClose} from '@fortawesome/free-solid-svg-icons'
class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {view: 'number', completed: false};
    }

    clickHandler(event) {
        if (this.state.view === 'number') {
             audio.play("flip");
            setTimeout(() => {
                if (this.state.view === "question") {
                    if(this.props.question.type === "A"){
                        audio.play("tada");
                    }
                    else if(this.props.question.type === "B"){
                        audio.play("lost");
                    }      
                }
            }, 700);
            this.setState({view: 'question', flipping: true});
        } 
        else {
            audio.play("flipBack");
            this.setState({view: 'number', completed: true, flipping: true});
        }
    }

    getLabelBack() {
        // return {__html: this.state.view === 'question' ? this.props.question.question : null};
        // console.log(JSON.stringify(this.props.question.icon));
        
    //    return {__html: <img src = {this.props.question.icon} alt=""/> + this.props.question.question}
    return {__html: this.props.question.question}       
    }

    transitionEndHandler(event) {
        if (event.propertyName === 'width') {
            this.setState({flipping: false});
            // console.log("event.propertyName === 'width'",event.propertyName === 'width')
            // console.log('event.propertyName',event.propertyName);
        }
    }

    render() {
        let style = {
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                transform: 'translate3d(' + this.props.left + 'px,' +0+ 'px,0)',
                WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
            },
            front = this.state.completed ?  <FontAwesomeIcon icon={faCheckCircle}/> : <span className='number'>{this.props.question.number}</span>,
            className = 'flipper';
            let showImage;

        if (this.state.view !== 'number') {
            className = className + ' flipped';
        }
        if (this.state.flipping) {
            className = className + ' flipping';

        }
        if(this.props.question){
                showImage = <img src={this.props.question.icon } alt='Question img' height="150" width="300"/>

            }
        

        let frontStyle ={
            backgroundColor: this.props.question.color,
            border: '1px solid'+ this.props.question.color
        }
        
        return (
            <div style={style} className={className}  onTransitionEnd={this.transitionEndHandler.bind(this)}>
                <div className='card'>
                    <div style={frontStyle} className='front' onClick={this.clickHandler.bind(this)}>
                        {front}
                    </div>
                    <div className='back'>
                        <span className='close' onClick={this.clickHandler.bind(this)}><FontAwesomeIcon icon={faWindowClose}/></span>
                        <p>{showImage}</p>
                        <span dangerouslySetInnerHTML={this.getLabelBack()}/>
                        <img src={logo } alt='Netcentric logo' />
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;