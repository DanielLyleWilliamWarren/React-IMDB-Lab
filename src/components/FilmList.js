import React, {Component} from 'react';
import Films from './Films.js'

class FilmList extends Component{
  render(){
// console.log(this.props.films);
console.log(this.props.moreInfo);
const filmComponents = this.props.films.map((film) => {
  return(<Films title = {film.title} key={film.id} url={film.url}></Films>);
})
    return(
      <div>
      <ul>
        UK Opening This Week
        {filmComponents}
      </ul>
      <a class="click-button" href={this.props.moreInfo}>Show Time!</a>
      </div>
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
