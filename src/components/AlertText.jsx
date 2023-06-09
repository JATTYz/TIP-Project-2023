import React, { useEffect } from 'react'
import { Alert, AlertTitle } from '@mui/material'

const AlertText = (props) => {

    useEffect(() => {

        const timer = setTimeout(() => {
          props.isApproveAction(false)
        }, 2000)

        return () => clearTimeout(timer)
    },[])

  return  props.type === "REJECTED" ?
              
              <Alert variant="filled" severity="warning">
              You have just successfully {props.type} a document 
              </Alert>
              :
              <Alert variant="filled" severity="success">
                You have just successfully {props.type} a document 
              </Alert>

      /// this is the default button
      //   <div id="alert-border-3" className={`rounded-lg flex p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800`} role="alert">
      //   <div className="ml-3 text-sm font-medium">
      //       You have just successfully {props.type} a document 
      //   </div>
      //     <button 
      //     onClick={() => props.isApproveAction(false)}
      //     type="button" 
      //     className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
      //       <span className="sr-only">Dismiss</span>
      //       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div> 
}

export default AlertText



