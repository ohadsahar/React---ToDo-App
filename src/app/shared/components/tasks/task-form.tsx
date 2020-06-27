import { Field, Form, FormikProps, withFormik } from 'formik';
import React from 'react';
import { MyFormProps } from '../../interface/task-form-props.dto';
import { FormValues } from '../../interface/task-form-values.dto';
import { TaskDto } from '../../interface/task.dto';


export default class TaskFormComponent extends React.Component<{ submit: any }> {

    render() {
        const innerForm = (props: FormikProps<FormValues>) => {
            const { touched, errors, isSubmitting } = props;
            return (
                <Form>
                    <div className="form-input">
                        <label>Task name</label>
                        <Field type="text" name="taskName" />
                        {touched.taskName && errors.taskName && <div className="input-error">{errors.taskName}</div>}
                    </div>

                    <div className="form-input">
                        <label>Deadline</label>
                        <Field type="text" name="deadLine" />
                        {touched.deadLine && errors.deadLine && <div className="input-error">{errors.deadLine}</div>}
                    </div>

                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )
        };

        const MyForm = withFormik<MyFormProps, FormValues>({
            mapPropsToValues: props => {
                return {
                    taskName: props.initialTaskName,
                    deadLine: props.initalDeadLine,
                };
            },

            validate: (values: FormValues) => {
                let errors: any = {};
                if (!values.taskName) {
                    errors.taskName = 'Required';
                }
                if (!values.deadLine) {
                    errors.deadLine = 'Required';
                }

                return errors;
            },

            handleSubmit: async (values: FormValues) => {
                const newTask: TaskDto = { taskName: values.taskName, taskDeadLine: values.deadLine };
                this.props.submit(newTask);
            },
        })(innerForm);

        return <div>
            <MyForm initialTaskName='' initalDeadLine='' />
        </div>
    }
}


