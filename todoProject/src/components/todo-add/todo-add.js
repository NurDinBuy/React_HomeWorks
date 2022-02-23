import React from 'react';


class TodoAdd extends React.Component {
  state = {
    text: ''
  }

  render() {
    return (
      <form onSubmit={(event) => {
        const {onAdd} = this.props;

        onAdd(this.state.text)
        this.setState({text: ''})

        event.preventDefault()
      }}>
        <input
          onChange={(event) => this.setState(
              {text: event.target.value.toUpperCase()}
            )
          }
          type='text'
          value={this.state.text}
        />
        <input type='submit' value='send' />
      </form>
    )
  }
}

export default TodoAdd;
