import React, { Component } from "react";
import { connect } from "react-redux";
import { getTweetsAction } from "./redux/tweetaction";
// import { booleanLiteralTypeAnnotation } from "@babel/types";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { limit, page } = this.props.data;
    this.props.getTweets({ limit, page });
  }

  search = e => this.setState({ [e.target.name]: e.target.value });

  loadmore() {
    const { limit, page } = this.props.data;
    this.props.getTweets({ limit, page: page + 1 });
  }
  render() {
    const { isFetching } = this.props.data;
    if (isFetching) {
      return <h1>Loading.....</h1>;
    }

    return (
      <div className='App'>
        <center>
          <input
            type='text'
            onChange={this.search}
            placeholder='Please search here'
            name='search'
          />

          <hr />

          {this.props.data.tweets.map((tweet, i) => {
            return (
              <div
                style={{
                  border: "1px solid grey",
                  padding: 10,
                  display: "flex"
                }}
                key={i}
              >
                <div style={{ flex: 1 }}>{i}</div>
                <div style={{ flex: 2 }}>{tweet.id}</div>
              </div>
            );
          })}
          <button name='load' onClick={() => this.loadmore()}>
            More
          </button>
        </center>
      </div>
    );
  }
}

export default connect(
  state => ({ data: state }),
  dispatch => ({ getTweets: payload => dispatch(getTweetsAction(payload)) })
)(App);
