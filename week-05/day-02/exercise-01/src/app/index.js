var React = require('react');
var ReactDOM = require('react-dom');

//create component
//react.createClass takes an object 
//and in this object , we can pass methods,
//the only required method is render method
var ToDoComponet = React.createClass({
    getInitialState:function(){
        return {
            todos: ['kobe' , 'james' , 'curry','chris'],
            age :25 //this part set the component inital states.
        }
    },
    //props means properties
    //when reference to some object , we use {};
    render:function(){
        var ager = setTimeout(function(){
           this.setState({age:30});
        }.bind(this),3000);

        var todochange = this.state.todos.map(function(item,index){
            return(
                <Todoitem item={item} key = {index}/>
            );
        });
        return(
            <div>
                <p>{this.state.age}</p>
                <ul>
                    <li>The name of the player is {this.state.todos[0]}</li>
                    <li>The name of the player is {this.state.todos[1]}</li>
                    <li>The name of the player is {this.state.todos[2]}</li>
                </ul>
                <ul>{todochange}</ul>
            </div>
        );
    },
    onDelete:function(item){
        var updatedTodos = this.state.todos.filter(function(){  
            return item!==val;
        });
        this.setState({
            todos: updatedTodos
        });
    }
});

var Todoitem = React.createClass({
    render : function(){
        return(
            <li>
                <div className = 'todo_item'>
                    <span className = "item-name">{this.props.item}</span>
                    
                </div>
            </li>
        );
    },
    handleDelete:function(){
        this.props.onDelete()
    }
});
//here is two ways to add element in html;1.properties ; 2.state

ReactDOM.render(<ToDoComponet />,document.getElementsByClassName('ToDoComponent')[0]);