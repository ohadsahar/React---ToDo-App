import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../../store'
import { createTask } from '../../../store/task/task.actions'
import { TaskActionTypes } from '../../../store/task/task.types'
import { TaskDto } from '../../interface/task.dto'

interface LinkDispatchProps {
    createTask: (taskData: TaskDto) => void;
}
interface LinkStateProp {
    task: TaskDto;
}

type Props = LinkDispatchProps & TaskDto & LinkStateProp;

export class HomeComponent extends React.Component<Props> {


    render() {
        console.log(this.props);
        return <div className="home">
            <p>Wellcome to ohad sahar tasks site</p>
        </div>
    }
    componentDidMount() {
        console.log(this.props);
        
        const taskData = { id: '1', taskName: 'asd', taskDeadLine: '123' };
        this.props.createTask(taskData);
    }
}

const mapStateToProps = (state: RootState, ownProps: TaskDto): any => ({
        props: state.task
    }
);

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, any, TaskActionTypes>): any => {
    return {
        createTask: bindActionCreators(createTask, dispatch) 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);