import React, { useState, useEffect } from 'react';
import axios from 'axios'


const UpdateMovie = (props) => {
    console.log('Form props', props)
    const [movie, setMovie] = useState({ 
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: [],});

    // useEffect(() => {
    //   const friendToEdit = props.friends.find(
    //     friend => `${friend.id}` === props.match.params.id
    //   );
  
    //   if (friendToEdit) setFriend(friendToEdit);
    // }, [props.friends, props.match.params.id]);
  

    // const editFriend = (friend) => {
    //     api().put(`/friends/${friend.id}`, friend)
    //       .then(res => {
    //         setFriend(res.data);
    //         props.history.push("/friendslist");
    //       })
    //       .catch(err => console.log(err.response));
    //   };
    
  
  const handleChange = event => setMovie({...movie, [event.target.name]: event.target.value});

  const handleSubmit = event => {
    event.preventDefault();
    axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
          .then(res => {
            props.updateMovie(res.data);
            props.history.push("/movies");
          })
          .catch(err => console.log(err.response));
      };
  

  return (
    <form onSubmit={handleSubmit}>
      <input name='title'
             placeholder="Title"
             value={movie.name}
             onChange={handleChange} />
      <input name='director'
             placeholder="Director"
             value={movie.director}
             onChange={handleChange} />
      <input name='metascore'
             placeholder='metascore'
             value={movie.metascore}
             onChange={handleChange} />   
        <input name='stars'
             placeholder='Stars'
             value={movie.stars}
             onChange={handleChange} />        
      <button type='submit'>Edit</button>
    </form>
  );
};

export default UpdateMovie