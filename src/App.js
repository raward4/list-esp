import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    skills: [{ skill: "JavaScript", level: 4 }],
    skill: "type here",
    level: 3
  };

  formRef = React.createRef();

  addSkill = () => {
    this.setState(state => ({
      skills: [...state.skills, state.newSkill],
      newSkill: {skill: '', level: 3}
    }));
  };
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.formRef);
    return (
      <section>
        <h2>Skills</h2>
        <hr />
        {this.state.skills.map((s) => (
          <article key={s.skill}>
            <div>{s.skill}</div> <div>{s.level}</div>
          </article>
        ))}
        <hr />
        <form ref={this.formRef} onSubmit={this.addSkill = e => {
          e.preventDefault();
          }
        } id="events">
          <label>
            <span>Add Event</span>
            <input name="skill" 
            value={this.state.skill}
            onChange={this.handleChange}
            />
            </label>
            <label>
            <span></span>
            <select name="level" 
            value={this.state.level}    
            onChange={this.handleChange}>
              <option value="1">Feeding</option>
              <option value="2">Nap</option>
              <option value="3">Diaper</option>
            </select>
          </label>
          <button onClick={this.addSkill}>Add to Log</button>
        </form>
      </section>
    );
  }
}

export default App;