import React, { Component } from 'react';
import './AddComment.scss';
import { Form, Image, Input, Button } from "semantic-ui-react";

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  render() {
    return (
      <div className='add-comment'>
        <Image className='user-image' src='http://via.placeholder.com/48x48' circular />
        <Form onSubmit={this.props.addComment}>
          <Form.Field>
            <Input 
              className='comment-input'
              placeholder='comment'
              onChange={this.onInputChange}
              value={this.state.comment}
              size='small'
            />
            <div className='comment-button'>
              <Button className='submit-comment-button' onClick={() => this.props.addComment(this.state.comment)} type='submit'>Add Comment</Button>
            </div>
          </Form.Field>

        </Form>
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
}

