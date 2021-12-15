import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';


function ResultsPage() {

  const activity = useSelector((store) => store.activity);
  const dispatch = useDispatch();

  useEffect( () =>{
    dispatch({ type: "FETCH_ACTIVITY" });
  }, []);
  
  
  return (
    <main>
    <div>
      <p>here are the results:</p>
      {/* <p>{JSON.stringify(activity)}</p> */}
          {activity.map(activity => {
            return(
              <div>
                  <h3>activity: {activity.activity_name}</h3>
              </div>
            );
      })}  
    </div>
</main>
  )
}

export default ResultsPage;
