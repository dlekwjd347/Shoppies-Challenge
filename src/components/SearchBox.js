import React from 'react';

function SearchBox (props) {
	return (
		<div className='col col-sm-4'>
			<label>
			<input
				className='formControl'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			</label>
			
		</div>
	);
};

export default SearchBox;