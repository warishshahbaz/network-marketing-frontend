import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100vw",
  height:"100vh",
  bgcolor: 'black',
  boxShadow: 24,
  p: 4,
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
};

export default function ImgModal({setOpen,open,tempImg}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CloseIcon onClick={()=>handleClose()} sx={{position:"absolute",right:"15px", top:"15px",color:"white",fontSize:"2rem",cursor:"pointer" }} />
        <div className='w-[80vw]  h-[90vh] flex justify-center items-center objcet-fit ' >
        <img src={tempImg} width={700}  style={{objectFit:"cover"}}  alt="image" />
        </div>
        </Box>
      </Modal>
    </div>
  );
}