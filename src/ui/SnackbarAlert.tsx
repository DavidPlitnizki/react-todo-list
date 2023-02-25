import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


interface IProps {
    text: string,
    type: "success" | "error"
    isOpen: boolean,
    handleClose: (active: boolean) => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarAler:React.FC<IProps> = ({text, type, isOpen, handleClose}) => {

    const onClose = () => {
        handleClose(false);
    }
    
    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
                {text}
            </Alert>
      </Snackbar>
    )
};

export default SnackbarAler;
