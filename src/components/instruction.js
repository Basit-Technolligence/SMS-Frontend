import React from 'react'
import Typography from '@material-ui/core/Typography';

const Instructions =()=>{
    return (
        <>
            <Typography variant="h4" component="h2">
Instruction

            </Typography>
            <div style={{textAlign:"left", margin:"1em"}}> 
                       <Typography variant="h6" component="h2">
            1. This System is for School Management. From adding student/teacher to promoting them and everything related is done here.   
            </Typography>
            <Typography variant="h6" component="h2">
            2. To perform jobs related Student like adding, removing, updating  student or promoting them click on sidebar and click on the first option 'Student'. 
            </Typography>
            <Typography variant="h6" component="h2">
            3. Actions related to teachers are below it. Here you can add update or delete teachers. You can also see teachers list and print it 
            </Typography>
            <Typography variant="h6" component="h2">
            4. All expenses are maintained under Expense section. Every rupee that is spent to buy anything related stationary, books etc is recorded. 
            </Typography>
            <Typography variant="h6" component="h2">
            5. To print challan forms of students you can go to 'Print Challan' section. 
              </Typography>
            
            </div>

        </>
    )
}

export default Instructions;