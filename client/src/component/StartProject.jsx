import React from "react";
import Button from "@mui/material/Button";
import FormDialog from "./FormModal";
import { TextField } from "@mui/material";
import { TransactionContext } from '../Context/TransactionContext';

export default function StartProject() {
  const {handleChangeProject, inputData, StartProject, open, setOpen} = React.useContext(TransactionContext)
  const {isLoading} = React.useContext(TransactionContext)
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputData, 'data');
    StartProject()
  }
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Start Project
      </Button>

      <FormDialog open={open} loading={isLoading} handleClose={handleClose} title="Create Project" handleProceed={handleSubmit}>
        <form action="" onSubmit={handleSubmit}>
        <div className="pt-4">
          <TextField
            label="Title"
            name="title"
            fullWidth
            required
            size="small"
            variant="outlined"
            onChange={handleChangeProject}
            value={inputData.title}
            className='border-none focus:ring-0'
          />
        </div>
        <div className="py-5">
          <TextField
            label="Description"
            name="description"
            fullWidth
            required
            size="small"
            multiline
            minRows={3}
            variant="outlined"
            onChange={handleChangeProject}
            value={inputData.description}
            className='border-none focus:ring-0'
          />
        </div>
        <div className="py-3 flex justify-between">
          <div className="pr-2">
            <TextField
              label="Amount needed (in ETH)"
              name="amontToRaise"
              fullWidth
              required
              size="small"
              variant="outlined"
              type="number"
              onChange={handleChangeProject}
              value={inputData.goalAmount}
              // className='focus:outline-none focus:outline-offset-0'
            />
          </div>
          <div className="pl-2">
            <TextField
              label="Duration (in days)"
              name="durationIndays"
              fullWidth
              required
              size="small"
              variant="outlined"
              type="number"
              onChange={handleChangeProject}
              value={inputData.duration}
              className='border-transparent focus:border-transparent focus:ring-0'
            />
          </div>
        </div>
        </form>
      </FormDialog>
    </>
  );
}
