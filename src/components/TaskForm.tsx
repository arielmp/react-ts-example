import * as React from "react";
import { ITask } from "./Task";

interface ITaskFormProps {
  addNewTask: (task: ITask) => void;
}

interface ITaskFormState {
  title: string;
  description: string;
}

class TaskForm extends React.Component<ITaskFormProps, any> {
  constructor(props: ITaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  getCurrentTimestamp(): number {
    const date: Date = new Date();
    return date.getTime();
  }

  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: ITask = {
      id: this.getCurrentTimestamp(),
      title: this.state.title,
      description: this.state.description,
      completed: false
    };
    this.props.addNewTask(newTask);
    this.setState({
      title: "",
      description: ""
    });
  }

  handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card card-body">
        <form onSubmit={e => this.handleNewTask(e)}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={e => this.handleInputChange(e)}
              className="form-control"
              placeholder="Titulo de la Tarea"
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="description"
              onChange={e => this.handleInputChange(e)}
              placeholder="Descripción de la tarea"
              value={this.state.description}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
