import { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Portal extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  componentDidMount() {
    this.portalContainer = document.querySelector("[data-react-portal]");

    this.element = document.createElement("div");
    this.portalContainer.append(this.element);

    this.forceUpdate();
  }

  componentWillUnmount() {
    this.portalContainer.removeChild(this.element);
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

export default Portal;
