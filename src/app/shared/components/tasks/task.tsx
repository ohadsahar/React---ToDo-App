import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../../store'
import { createTask, deleteTask, getTasks } from '../../../store/task/task.actions'
import { TaskActionTypes } from '../../../store/task/task.types'
import { TaskInterfaceProp } from '../../interface/task-prop.dto'
import { TaskDto } from '../../interface/task.dto'
import AddTask from './add-task-dialog'
import { FaBeer } from 'react-icons/fa';

interface LinkDispatchProps {
    createTask: (taskData: TaskDto) => void;
    deleteTask: (taskData: TaskDto) => void;
    getTasks: () => void;
}

type Props = LinkDispatchProps & TaskInterfaceProp;

class TaskComponent extends React.Component<Props> {


    componentDidMount() {
        this.onLoadComponent();
    }

    onLoadComponent() {
        console.log(this.props.getTasks());
    }

    ResponsiveDialog() {
        return (
            <button className="btn btn-primary">Add Task</button>
        )
    }

    onSubmitTask = (value: TaskDto) => {
        const taskData = { taskName: value.taskName, taskDeadLine: value.taskDeadLine };
        this.props.createTask(taskData);
    }

    deleteTask = (taskData: TaskDto) => {
        this.props.deleteTask(taskData);
    }

    render() {
        return <div className="task-component">
            <div className="tasks">
                <h1>Tasks</h1>
                <ul>
                    {this.props.props.tasks.map((val: TaskDto, index: number) => {
                        return (
                            <li key={index}>{val.taskName} , Deadline: {val.taskDeadLine}
                                <button onClick={() => this.deleteTask(val)}> <FaBeer /></button>
                            </li>
                        )
                    })}
                </ul>
                <AddTask submit={() => this.onSubmitTask.bind(this)} />
            </div>
            <div className="completed-tasks">
                <h1>Completed Tasks</h1>
            </div>
        </div>
    }
}


const mapStateToProps = (state: RootState, ownProps: TaskDto): any => ({
    props: state.task
}
);

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, TaskActionTypes>): any => {
    return {
        createTask: bindActionCreators(createTask, dispatch),
        deleteTask: bindActionCreators(deleteTask, dispatch),
        getTasks: bindActionCreators(getTasks, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent);