import React, {Component} from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      calculatedValue: 0,
      askingCalculatedValue: 0,
    };
    this.calculateFinalCost = this.calculateFinalCost.bind(this);
    this.calculateAskingFinalCost = this.calculateAskingFinalCost.bind(this);
  }

  calculateFinalCost = (e) => {
    const finalCost = this.props.data.value * e.target.value;
    this.setState({calculatedValue: finalCost});
  };
  calculateAskingFinalCost = (e) => {
    const finalCost = this.state.calculatedValue * e.target.value;
    this.setState({askingCalculatedValue: finalCost});
  };
  render() {
    return (
      <>
        <button
          type="button"
          className={this.props.class}
          data-toggle="modal"
          data-target={`#${this.props.rowIndex}`}
          key={this.props.rowIndex}
        >
          {this.props.title}
        </button>
        <div
          className="modal fade"
          id={this.props.rowIndex}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id={`${this.props.rowIndex}exampleModalLongTitle`}
                >
                  {this.props.data.key}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="weight" className="col-form-label">
                      Weight in kgs:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      onChange={this.calculateFinalCost}
                    />
                  </div>
                  <div className="form-group">
                    <label for="price" className="col-form-label">
                      Price:
                    </label>
                    {this.props.data.value}
                  </div>
                  <div className="form-group">
                    <label for="price" className="col-form-label">
                      Asking Price:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="askingPrice"
                      onChange={this.calculateAskingFinalCost}
                    />
                  </div>
                  <div className="form-group">
                    <label for="weight" className="col-form-label">
                      Calculative Price:
                    </label>
                    {this.state.calculatedValue}
                  </div>
                  <div className="form-group">
                    <label for="weight" className="col-form-label">
                      Asking Calculative Price:
                    </label>
                    {this.state.askingCalculatedValue}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
