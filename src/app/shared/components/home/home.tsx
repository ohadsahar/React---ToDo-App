import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../../store'
import { createTask, deleteTask } from '../../../store/task/task.actions'
import { TaskActionTypes } from '../../../store/task/task.types'
import { TaskDto } from '../../interface/task.dto'

interface LinkDispatchProps {
    createTask: (taskData: TaskDto) => void;
    deleteTask: (taskId: string) => void;
}
interface LinkStateProp {
    task: TaskDto;
}

type Props = LinkDispatchProps & TaskDto & LinkStateProp;

 class HomeComponent extends React.Component<Props> {

    componentDidMount() {        
        const taskData = { id: '1', taskName: 'asd', taskDeadLine: '123' };
        this.props.createTask(taskData);
    }

    render() {
 
        return <div className="home">
            <p>Wellcome to ohad sahar tasks site</p>
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
        deleteTask:bindActionCreators(deleteTask,dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);