import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {id: 'a', text: 'Alec'},
            {id: 'b', text: 'Ted'},
            {id: 'c', text: 'Fred'},
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
            {id: 'a', text: 'Bill'},
            {id: 'b', text: 'Fran'},
            {id: 'c', text: 'Deb'},
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
            {id: 'a', text: 'Frank'},
            {id: 'b', text: 'Gary'},
            {id: 'c', text: 'Herbert'},
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
            {id: 'a', text: 'Paul'},
            {id: 'b', text: 'Simon'},
            {id: 'c', text: 'Jesus'},
          ],
          correct: 'b'
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var results = <Results {...this.state} />
    }else{
      var results = '';
      var scorebox = <ScoreBox {...this.state} />
    }
    return (
        <div>
          {scorebox}
          <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
          {results}
        </div>
      )
  }
}

export default App;