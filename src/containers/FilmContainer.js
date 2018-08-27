import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';
import './styles.css';

class FilmContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      films:[
        {title: "Saving Private Ryan", id:1, url:"https://www.imdb.com/title/tt0120815/?ref_=nv_sr_1"},
        {title: "Pulp Fiction" , id:2, url:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_1"},
        {title: "Hateful Eight", id:3, url:"https://www.imdb.com/title/tt3460252/?ref_=nv_sr_1"}
      ],
      moreInfo:"https://www.imdb.com/"
  };
  }
  render() {
    return (
        <div className="film-container">This is my Film Container Component
          <FilmList films={this.state.films} moreInfo={this.state.moreInfo}/>

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
