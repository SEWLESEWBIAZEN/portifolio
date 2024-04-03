import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = ({star}) => {
  return (
    <div className="mt-4">
      {[...Array(star)].map(star => {
        return (
          <>
            <label className="mx-1">              
              <FontAwesomeIcon style={{cursor:'pointer'}} color="#f9ab00"  icon={faStar}/>
            </label>
          </>
        );
      })}({star} of 5)
    </div>
  );
};

export default Stars;
