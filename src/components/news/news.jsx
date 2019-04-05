import React from "react";

import Toogle from "../toogle/toogle";

import Paragraph from "arui-feather/paragraph";
import Heading from "arui-feather/heading";
import Plate from 'arui-feather/plate';
import TagButton from 'arui-feather/tag-button';

class News extends React.Component {
  constructor(props) {
    console.log("####: constructor");
    super(props);

    this.state = {
      visible: false
    };
  }

  componentWillMount() {
    console.log("####: componentWillWount");
  }

  render() {
    console.log("####: render");
    const { items } = this.props;

    return items.length === 0 ? (
      <div> У вас нет новостей! </div>
    ) : (
      this.renderContent()
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderNews()}
            <p>У вас есть <TagButton size='s'>{this.props.items.length}</TagButton> новости!</p>
      </div>
    );
  }

  renderNews() {
    return this.props.items.map((item, index) => {
      return (
        <Plate hasCloser={ true } className={"news card"} key={index}>
          <Heading size="s" className={"news__title card-title"}>
            {item.title}
          </Heading>
          <div className={"news__descr card-text"}>
            <Paragraph>{item.descr}</Paragraph>
          </div>
          <Toogle title={"Подробнее..."}>
            <p className={"lead"}>{item.fullText}</p>
          </Toogle>
        </Plate>
      );
    });
  }

  componentDidMount() {
    console.log("####: componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("####: componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("####: shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("####: componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("####: componentDidUpdate");
  }
}

export default News;
