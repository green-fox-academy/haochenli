'use strict'

var React = require('react');
var ReactDOM = require('react-dom');
var index = 0;
var button_left = document.getElementsByClassName("left button")[0];
var mainView = document.getElementsByClassName("main_view")[0];
var button_right = document.getElementsByClassName("right button")[0];
var source = [
    'fox.jpg',
    'tirtle.jpg',
    'camel.jpg',
    'tiger.jpg',
    'wolf.jpg',
    'lion.jpg'
];

var TodoButton = React.createClass({
    render : function(){
        return (
            <div>
                <div className = "left button" onClick={this.previous}></div>
                <div className = "right button" onClick={this.next}></div>
                <div className = "photo viewer">
                    <img className = "main_view" src = {this.props.src[this.props.i]}></img>
                </div>
            </div>
        );
    },
    next:function(){
        index++;
        if(index === 6){
            index = 0;
        }
       
        ReactDOM.render(<TodoButton src={source} i={index}/>,document.getElementsByClassName('main')[0]);
        
    },
    previous:function(){
        if(index === 0){
            index = 6;
        }
        index--;
        ReactDOM.render(<TodoButton src={source} i={index}/>,document.getElementsByClassName('main')[0]);
    }
});


ReactDOM.render(<TodoButton src={source} i={index}/>,document.getElementsByClassName('main')[0]);


