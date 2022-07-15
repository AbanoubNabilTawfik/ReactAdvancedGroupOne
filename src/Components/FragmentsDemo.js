import React from 'react'
import TableData from './TableData'

function FragmentsDemo() {
    return (
        // <React.Fragment>
        //     <div>
        //         <span>Im span one</span>
        //     </div>
        //     <div>
        //         <span>Im span two</span>
        //     </div>
        // </React.Fragment>

        // <>
        //     <div>
        //         <span>Im span one</span>
        //     </div>
        //     <div>
        //         <span>Im span two</span>
        //     </div>
        // </>

      <div>
        <table>
            
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Salary</th>
            </tr>
            <TableData/>
        </table>
      </div>


    )
}

export default FragmentsDemo
