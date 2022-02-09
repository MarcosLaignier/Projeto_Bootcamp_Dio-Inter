
import React, { useEffect, useState } from "react"
import axios from "axios"

class Teste extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const valor = (event.target.username.value)
    console.log(valor)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
             name="username"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Teste;