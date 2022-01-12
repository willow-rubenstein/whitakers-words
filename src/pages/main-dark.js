import Textbox from "../components/textbox";
import { Component } from "react";
import '../style/dark-theme.css';

export default class Mainlight extends Component {
    state = {translation: ''}

    handleTranslation = (feed) => {
        this.setState({translation: feed});
    }

    renderTranslation = () => {
        return (
            <div>
                <p>{this.state.translation}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="parent">
                <div className="child">
                    <div className="container">
                        <div className="head">Translate Latin</div>
                        <Textbox onTranslation={this.handleTranslation} />
                        <br/>
                        {this.renderTranslation()}
                    </div>
                </div>
            </div>
        )
    }
}