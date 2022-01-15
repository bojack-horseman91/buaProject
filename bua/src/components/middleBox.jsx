import * as React from 'react';
import { useState, useEffect } from 'react';
import Blogs from './Blogs'

function MiddleBox(props) {
    
    const [buas, setBuas]=useState()
    useEffect(()=>{
        const fetchBua=async () => {
            const response = await fetch(
                'http://127.0.0.1:8000/'
            ).then((response) => response.json())
            .then((res)=>{
                setBuas(res[0]);
                console.log("ok")
            });

        // async ()=> {
        //     try {
        //         console.log('ok')
        //       const response = await instance.get('');
        //       console.log(response);
        //     } catch (error) {
        //       console.error(error);
        //       console.log("failed")
        //     }
          };
          fetchBua();
          console.log(buas)
    },[]);

    
    
    
    return (<React.Fragment>
         
          {/* {buas.map(post=>(<Blogs name={post.firstName} subtitle={post.firstName} key={post.ID} content={post.firstName}/>))} */}
        
         
    </React.Fragment>  );
}

export default MiddleBox;