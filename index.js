import React from 'react';

const CLS = {
  top: 'navbar fixed top horizontal',
  right: 'navbar fixed right vertical',
  bottom: 'navbar fixed bottom horizontal',
  left: 'navbar fixed left vertical',
};

export default class Navbar extends React.Component {
  render() {
    const { vertical, fixed, dark } = this.props;
    if (fixed) {
      var cls = CLS[fixed]
    } else {
      cls = 'navbar' + (vertical ? ' vertical': ' horizontal');
    }
    if (dark) { cls += ' dark'; }
    return (
      <div className={cls}>{this.props.children}</div>
    );
  }
}

class Brand extends React.Component {
  render() {
    return (
      <ul className="brand">
        <li>{this.props.children}</li>
      </ul>
    );
  }
}

class Item extends React.Component {
  render() {
    var cls = "item";
    if (this.props.active) { cls += ' active'; }
    return (
      <li className={cls}>{this.props.children}</li>
    );
  }
}

class Nav extends React.Component {
  render() {
    var cls = 'nav';
    if (this.props.second) { cls += ' second'; }
    return (
      <ul className={cls}>
        {this.props.children}
      </ul>
    );
  }
}

Navbar.Brand = Brand;
Navbar.Item = Item;
Navbar.Nav = Nav;
