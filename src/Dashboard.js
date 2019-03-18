import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './sass/dashboard.scss'


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            h: 0,

            x1: 0,
            y2: 0,
            h1: 0,
            h2: 0,

            a1: 0,
            a2: 0,
            q: 0,

        };
    }


    onInputChange(e) {
        const val = e.target.value;
        const id = e.target.id;

        this.setState({
            [id]: val
        })
    }

     X_plus_A1_plus_Q() {
        const x = Number(this.state.x);
        const a1 = Number(this.state.a1);
        const q = Number(this.state.q);
        return Number(x + (a1 + q));
    }

    Y_plus_A1_plus_Q() {
        const num1 = Number(this.state.y);
        const num2 = Number(this.state.a1);
        const num3 = Number(this.state.q);
        return Number(num1 + (num2 + num3)); 
    }

    X1_plus_A2_plus_Q() {
        const num1 = Number(this.state.x1);
        const num2 = Number(this.state.a2);
        const num3 = Number(this.state.q);
        return Number(num1 + (num2 + num3)); 
    }

    Y2_plus_A2_plus_Q() {
        const num1 = Number(this.state.y2);
        const num2 = Number(this.state.a2);
        const num3 = Number(this.state.q);


        return Number(num1 + (num2 + num3));
    }

    getMax() {
        const val1 = this.X_plus_A1_plus_Q();
        const val2 = this.Y_plus_A1_plus_Q();
        const val3 = this.X1_plus_A2_plus_Q();
        const val4 = this.Y2_plus_A2_plus_Q();

        let outputs = [val1, val2, val3, val4];
        return Math.max(...outputs);
    }

    getMin() {
        const val1 = this.X_plus_A1_plus_Q();
        const val2 = this.Y_plus_A1_plus_Q();
        const val3 = this.X1_plus_A2_plus_Q();
        const val4 = this.Y2_plus_A2_plus_Q();

        let outputs = [val1, val2, val3, val4];
        return Math.min(...outputs);
    }

    getB() {
        return this.getMax();
    }

    getB1() {
        return this.getMin();
    }

    getH3() {
        const num1 = Number(this.state.h);
        const num2 = Number(this.state.h1);
        return Number(num1 + num2);
    }

    getH4() {
        const num1 = Number(this.state.h);
        const num2 = Number(this.state.h2);
        return Number(num1 - num2);
    }

    getB3() {
        const b = this.getB();
        const b1 = this.getB1();

        // todo: round
        return (b + b1) / 2;
    }

    getB4() {
        const b3 = this.getB3();
        const h3 = this.getH3();
        const h4 = this.getH4();

        return b3 - ((h3 + h4) / 2);
    }

    getB5() {
        const b4 = this.getB4();

        return b4 / 2;
    }

    getOutPut_1() {
        const b5 = this.getB5();
        const q = this.state.q;
        return b5 + q;
    }

    getOutPut_2() {

        const b5 = this.getB5();
        return b5 + this.state.q + this.state.a1 + this.state.b;
    }

    getOutPut_3() {
        const b5 = this.getB5();
        return b5 + this.state.q + this.state.a2 + this.state.b2; 
    }



    render() {
      return (
          <div className="dashboard">
              <div><h1>Hello, Dashboard!</h1></div>
              <div className="input-panel">
                  <div className="input-row">
                      <div className="input-row_cell">
                          <label>X:</label>
                          <input type="number" id="x" name="x" value={this.state.x} onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                      <div className="input-row_cell">
                          <label>Y:</label>
                          <input type="number" id="y" value={this.state.y} onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                      <div className="input-row_cell">
                          <label>H:</label>
                          <input type="number" id="h" value={this.state.h} onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                      <div className="input-row_cell"></div>
                  </div>
                  <div className="input-row">
                      <div className="input-row_cell">
                          <label>X1:</label>
                          <input type="number" id="x1" value={this.state.x1} onChange={ (e) => this.onInputChange(e) } />
                      </div>
                      <div className="input-row_cell">
                          <label>Y2:</label>
                          <input type="number" id="y2" value={ this.state.y2 } onChange={ (e) => this.onInputChange(e) } />
                      </div>
                      <div className="input-row_cell">
                          <label>H1:</label>
                          <input type="number" id="h1" value={ this.state.h1 } onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                      <div className="input-row_cell">
                        <label> H2: </label>
                          <input type="number" id="h2" value={this.state.h2} onChange={ (e) => this.onInputChange(e) } />
                      </div>
                  </div>

                  <div className="input-row">
                      <div className="input-row_cell">
                          <label>A1:</label>
                          <input type="number" id="a1" value={this.state.a1} onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                      <div className="input-row_cell">
                          <label>A2:</label>
                          <input type="number" id="a2" value={this.state.a2} onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                      <div className="input-row_cell">
                          <label>Q:</label>
                          <input type="number" id="q" value={this.state.q} onChange={ (e) => this.onInputChange(e) }/>
                      </div>
                  </div>

              </div>

              <hr />
              <div className="output-panel">
                  <div className="output-row">
                      <label>X + (A1 + Q) </label>
                      <span> = </span>
                      <span>{ this.X_plus_A1_plus_Q() }</span>
                  </div>
                  <div className="output-row">
                      <label>Y + (A1 + Q) </label>
                      <span> = </span>
                      <span>{ this.Y_plus_A1_plus_Q() }</span>
                  </div>
                  <div className="output-row">
                      <label>X1 + (A2 + Q) </label>
                      <span> = </span>
                      <span>{ this.X1_plus_A2_plus_Q() }</span>
                  </div>
                  <div className="output-row">
                      <label>Y2 + (A2 + Q) </label>
                      <span> = </span>
                      <span>{ this.Y2_plus_A2_plus_Q() }</span>
                  </div>
                  <div className="output-row">
                    <label>H3 </label>
                    <span> = </span>
                    <span>{ this.getH3() }</span>
                  </div>
                  <div className="output-row">
                    <label>H4 </label>
                    <span> = </span>
                    <span>{ this.getH4() }</span>
                  </div>
                  <hr />
                  <div className="output-row">
                      <label>B </label>
                      <span> = </span>
                      <span>{ this.getB() }</span>
                  </div>
                  <div className="output-row">
                      <label>B1 </label>
                      <span> = </span>
                      <span>{ this.getB1() }</span>
                  </div>
                  <hr />

                  <div className="output-row">
                      <label>B3 </label>
                      <span> = </span>
                      <span>{ this.getB3() }</span>
                  </div>

                  <div className="output-row">
                    <label>B4 </label>
                    <span> = </span>
                    <span>{ this.getB4() }</span>
                  </div>
                  <div className="output-row">
                    <label>B5 </label>
                    <span> = </span>
                    <span>{ this.getB5() }</span>
                  </div>
                  <div className="output-row">
                    <label>B5 + Q </label>
                    <span> = </span>
                    <span>{ this.getOutPut_1() }</span>
                  </div>

                  <div className="output-row">
                    <label>[B5 + Q] + A1 + B</label>
                    <span> = </span>
                    <span>{ this.getOutPut_1() }</span>
                  </div>
                  <div className="output-row">
                    <label>[B5 + Q] + A2 + B2 </label>
                    <span> = </span>
                    <span>{ this.getOutPut_1() }</span>
                  </div>
              </div>
        </div>
      )
    }
}
  

export default Dashboard