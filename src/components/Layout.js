import React from "react";

class Layout extends React.Component {
  render() {
    const { isAuth } = this.props;
    return (
      <div className="Layout">
        {isAuth ? (
          <h1>Hello my friend!!!!</h1>
        ) : (
          <div
            className="form-container"
            style={{
              width: "450px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px solid lightgrey",
              borderRadius: "5px",
              padding: "30px 20px",
            }}
          >
            {this.props.children}
            <footer>
              <span className="d-flex justify-content-center mt-4 copyright">
                Copyright &#169; Your website 2020
              </span>
            </footer>
          </div>
        )}
      </div>
    );
  }
}

export default Layout;
