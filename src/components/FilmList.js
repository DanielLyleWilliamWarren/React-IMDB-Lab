import React, {Component} from 'react';
import Films from './Films.js'

class FilmList extends Component{
  render(){
// console.log(this.props.films);
const filmComponents = this.props.films.map((film) => {
  return(<Films title = {film.title} key={film.id}> </Films>);
})
    return(
      <ul>
        These are my films:
        {filmComponents}
      </ul>
    );
  }
}

export default FilmList;

// class CommentList extends Component{
//   render() {
//     console.log(this.props.comments);
//     const commentComponents = this.props.comments.map((comment) => {
//       return (<Comment author = {comment.author} key={comment.id}>{comment.text}</Comment> );
//       //must give react a key so it can distignuish betweene items in an array.
//     });
//     console.log(commentComponents);
//     return (
//       <ul>
//         This is the comments list:
//         {commentComponents}
//
//       </ul>
//     );
//
//   }
// }

// export default CommentList;
