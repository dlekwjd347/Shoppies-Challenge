import React from 'react';
import RemoveBtn from './RemoveBtn'

function allNominatedMovies(props) {
    return (
        <div className="Nominations card col-1-of-2">
        {props.nominees.length ? (
          <h2 className="card-heading">Nominations</h2>
        ) : (
          ""
        )}
        {props.nominees.length >= 5 && <Banner />}
        {props.nominees.length ? (
          <List
            buttonType="Remove"
            buttonAction={props.onRemove}
            movieList={props.nominees}
          />
        ) : (
          <CardState
            name="No nominations yet."
            detail="Add up to 5 movies to your list of nominations."
          />
        )}
         {<RemoveBtn movieTitle={movie.Title} />}
      </div>
           
       
    )
}

export default allNominatedMovies;