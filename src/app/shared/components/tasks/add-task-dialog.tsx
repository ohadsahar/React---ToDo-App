import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import TaskFormComponent from './task-form';


export default function AddTask(props: any) {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <div >Add Task</div>
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClickClose}
                aria-labelledby="responsive-dialog-title">
                <div className="dialog-title"  >Add Task</div>
                <DialogContent>
                    <TaskFormComponent submit={props.submit()} />
                </DialogContent>
            </Dialog>
        </div>
    );
}