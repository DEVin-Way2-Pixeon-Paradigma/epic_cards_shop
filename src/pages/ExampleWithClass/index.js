import React from "react"

class Example extends React.Component {

  constructor(props) {
    console.log('construindo')
    super(props);
    this.state = {
      data: {},
      name: ''
    }
  }

  /*  executada antes da montagem do componente.
  componentWillMount() {
    console.log('Montando')
  }

  */

  async componentDidMount() {
    console.log('Montando 2')
    try {
      const response = await fetch('https://api.github.com/users/douglas-cavalcante')
      const data = await response.json()
      this.setState({ data: data })
    } catch (error) {
      console.log('Houve um erro na requisição')
    }
  }

  componentWillUpdate(prevProps, nextProps) {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => this.setState({ name: event.target.value })}
          value={this.state.name}
        />
        <p>{this.state.data.name}</p>
      </div>
    )
  }
}

export default Example