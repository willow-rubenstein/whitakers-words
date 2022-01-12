import {Component, React} from 'react';

import Definition from './definition';

export default class Textbox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return (
          <form>
            <div class="inner">
              <input type="text" spellcheck="false" value={this.state.value} onChange={this.handleChange} /><br/>
            </div>
            <Definition word={this.state.value} />
          </form>
        );
      }
    
}