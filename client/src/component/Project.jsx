import { Box, Button, Card, CardContent, CardHeader, LinearProgress, Stack, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react'
import ProgressBar from './ProgressBar'
import { TransactionContext } from '../Context/TransactionContext'


export default function Project({data}) {
    const {handleFunding, fundIsLoading} = React.useContext(TransactionContext)
    const [amount, setAmount] = React.useState(0)
    const handleFund = () => {
        if (amount > 0) {
            handleFunding(data, amount)
        }
    }
  return (
      <div className='py-4'>
    <Card className=''> 
        <CardHeader 
            title='Testing'
            subheader={data.duration}
            avatar={
                <Button variant="contained" color={data.status === 'Successful' ? 'secondary' : data.status === 'Expired' ? 'error' : 'primary'}>{data.status}</Button>
            }
        />
        <CardContent>
            <p >{data.description}</p>
            <p className='py-6'><strong>Goal:</strong> {data.goalAmount} ETH</p>
            <Box
                component='form'
                noValidate
                autoComplete="off"
                sx={{width: '25ch'}}
            >
               <div className='flex justify-between pb-10'>
               <TextField id="standard-basic" label="Amount (in ETH)" variant="standard" type='number' onChange={(e) => setAmount(e.target.value)} />
               <div className='pl-4 self-end'>
               <LoadingButton variant="contained" loading={fundIsLoading} loadingIndicator="Loading..." onClick={handleFund}>Fund</LoadingButton>

               </div>
                   </div> 
            </Box>
            <ProgressBar variant="determinate" value={60} />
        </CardContent>
    </Card>
    </div>
  )
}
