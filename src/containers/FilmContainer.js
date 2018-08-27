import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';

class FilmContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      films:[
        {title: "Saving Private Ryan", id:1},
        {title: "Pulp Fiction" , id:2},
        {title: "Hateful 8", id:3 }
      ]
  };
  }
  render() {
    return (
        <div className="film-container">This is my Film Container Component
          <FilmList films={this.state.films}/>
        </div>
      );
  }
}

export default FilmContainer;
//
// class CommentBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comments: [
//         {author: 'Dan', text: 'Yeah State!', id:123},
//         {author: 'Jarrod', text: 'It\'s ok I guess', id:321}
//       ]
//     };
//   }
//   render() {
//     return (
//       <div className="comment-box">This is my CommentBox Component
//         <CommentList comments={this.state.comments}/>
//       </div>
//     );
//   }
//  }
