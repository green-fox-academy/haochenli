'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var teaching_title = "HELOOOOOOOOOOOO";
var HTMLhead = document.getElementsByClassName("HEAD")[0];
var HTMLTeaching = document.getElementsByClassName("TEACHING")[0];
var HTMLmiddle = document.getElementsByClassName("MIDDLE")[0];
var HTMLbutton = document.getElementsByClassName("BUTTOM")[0];
var updateAt;
var data;
var commitNumber = 0;
var commitContent = [null,null,null,null,null];
var Httprequest = new XMLHttpRequest;

localStorage.setItem("username", "");
localStorage.setItem("token" , "");

import './git_project.scss';

var Todoheader = React.createClass({
    render : function(){
        return (
            <div>
                <nav className = "header">
                    <button className = 'github'>GitHub</button>
                    <button className = 'mdn'>MDN</button>
                    <button className = 'stack overflow'>Stack Overflow</button>
                </nav>
            </div>
        )
    }
});

ReactDOM.render(<Todoheader />,HTMLhead);



var Inputfiled = React.createClass({
    render : function(){
        return(
        <div className = "Teaching_block">
            <p className = "input title">greenfox-academy/</p>
            <input className = "input_repo_name"></input>
            <button className = "go"  onClick={this.getInfo}>Go</button>
        </div>
        );
    },
    getInfo:function(){
        let value = document.getElementsByClassName("input_repo_name")[0].value;
        onReadyStateChange(value);
        getCommit(value);

    }
});

ReactDOM.render(<Inputfiled />,HTMLTeaching);

var Teachingmaterial = React.createClass({
   
    render : function(){
        return (
            <div>
                <div className = "left_teaching">
                    <h1 className = "teaching_h1">  Teaching-materials</h1>
                    <p className = "Central repository">{this.props.i}</p>
                    <p className = "name_and_time">Last updated at {this.props.time}..</p>
                </div>
                <div className = "right_teaching">
                    <h1 className = "authenticate_h1">Authenticate</h1>
                    <input className = "input_username" placeholder = "username"></input>
                    <input className = "input_Token" placeholder = "password"></input>
                    <button className = "login" onClick={this.getInfo}>login</button>
                </div>
            </div>
        );
    },
    getInfo:function(){
        let username = document.getElementsByClassName("input_username")[0].value;
        let input_token = document.getElementsByClassName("input_Token")[0].value;

        localStorage.setItem("username", username);
        localStorage.setItem("token" , "basic "+input_token);
        

        onReadyStateChange(username);
        getCommit(username);

    }
});

ReactDOM.render(<Teachingmaterial i={teaching_title} time={updateAt}/>,HTMLmiddle);

var Content = React.createClass({
    render : function (){
        return(
        <div className = "content">
            <div className = "left_bar">
                <h1>Commits</h1>
                <p className = "commitInfo1">{this.props.number}</p>
                <p className = "commitInfo2">{this.props.content[1].commit.author.name+" at "+this.props.content[1].commit.author.date}</p>
                <p className = "commitInfo3">{this.props.content[2].commit.author.name+"at"+this.props.content[2].commit.author.date}</p>
                <p className = "commitInfo4">{this.props.content[3].commit.author.name+"at"+this.props.content[3].commit.author.date}</p>
                <p className = "commitInfo5">{this.props.content[4].commit.author.name+"at"+this.props.content[4].commit.author.date}</p>
            </div>
            {/* <div className = "right_bar">
                <h1>Recommend</h1>
                <p>fake name</p>
                <p>fake name</p>
                <p>fake name</p>
                <p>fake name</p>
                <p>fake name</p>
            </div> */}
        </div>
        );
    }
});
ReactDOM.render(<Content number={commitNumber} content ={commitContent}/>,HTMLbutton);


function onReadyStateChange(value){
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization',localStorage.getItem("token"));
    const myInit = {
        method: 'GET',
        headers: myHeaders,
    }
    fetch("https://api.github.com/repos/greenfox-academy/"+value,myInit).
    then(function (response) {
        console.log(response.headers.get('content-type'));
        response.json().then(function (body) {
            setContent(body);

        })
      });
}
function getCommit(value){
    const myHeaders2 = new Headers();
    myHeaders2.append('Content-Type', 'application/json');
    myHeaders2.append('Authorization',localStorage.getItem("token"));
    const myInit = {
        method: 'GET',
        headers: myHeaders2,
    }
    fetch("https://api.github.com/repos/greenfox-academy/"+value+"/commits",myInit).
    then(function (response) {
        console.log(response.headers.get('content-type'));
        response.json().then(function (body) {
            setCommit(body);
        })
      });
}

function setCommit(body){
    commitNumber = body.length;
    commitContent = body;
    ReactDOM.render(<Content number={commitNumber} content ={commitContent}/>,HTMLbutton);
    console.log(commitContent[1]);
}

function setContent(arr,updated_at){
    teaching_title = arr.description;
    updateAt = arr.updated_at
    ReactDOM.render(<Teachingmaterial i={teaching_title} time={updateAt}/>,HTMLmiddle);
    return arr.description;

}

