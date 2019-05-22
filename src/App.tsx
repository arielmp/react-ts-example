import * as React from "react";
//import { Recoverable } from "repl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ITask } from "./components/Task";

//<> tipo de props y state
export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };

    //otra forma de manejar el scope
    //this.deleteTask = this.deleteTask.bind(this);
  }

  addNewTask(task: ITask) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(id: number) {
    const tasks: ITask[] = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    );
    this.setState({
      tasks
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            INICIO
          </a>
        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm addNewTask={this.addNewTask.bind(this)} />
            </div>
            <div className="col-md-8">
              <TaskList
                tasks={this.state.tasks}
                deleteTask={this.deleteTask.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface IProps {
  title: string;
}

interface IState {
  tasks: ITask[];
}
