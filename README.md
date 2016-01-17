# rc-navabr
=========================
<pre>Navbar for web</pre>


## Installation
----------------
<pre>npm install rc-navbar --save</pre>

## Usage example
-----------------
<pre>
import Navbar from 'rc-navbar';

ReactDOM.render((
  <Navbar fixed="top">
    <Navbar.Brand>rc-navbar</Navbar.Brand>
    <Navbar.Nav>
      <Navbar.Item><a href="#">Nav 1</a></Navbar.Item>
      <Navbar.Item><a href="#">Nav 2</a></Navbar.Item>
      <Navbar.Item><a href="#">Nav 3</a></Navbar.Item>
    </Navbar.Nav>
    <Navbar.Nav second>
      <Navbar.Item><a href="#">Nav 4</a></Navbar.Item>
      <Navbar.Item><a href="#">Nav 5</a></Navbar.Item>
    </Navbar.Nav>
  </Navbar>
), mountNode);
</pre>
