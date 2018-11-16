import React from "react";
import Meta from "../components/Meta";
import Header from "../components/Header";
class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
