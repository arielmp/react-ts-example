import * as React from "react";
import { ITask } from "./Task";

interface ITaskListProps {
  tasks: ITask[];
  deleteTask: (id: number) => void;
}

class TaskList extends React.Component<ITaskListProps, any> {
  render(): JSX.Element[] {
    return this.props.tasks.map((task: ITask, i: number) => {
      return (
        <div key={task.id} className="col-md-4 mt-2">
          <div className="card card-body">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button
              onClick={() => this.props.deleteTask(task.id)}
              className="btn btn-danger btn-block"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }
}

export default TaskList;
