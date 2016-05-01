import React from 'react'

class Header extends React.Component {
  render () {
    return (
        <header>
        <section id="title">
            <a href="#"><h3>AQIVisualization</h3></a>
        </section>

        <nav className="menu">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CITY</a></li>
            <li><a href="#">ABOUT</a></li>
          </ul>
        </nav>

        <form action="#" className="search" method="post">
          <label for="search">Search</label>
          <input type="text" name="which_city" placeholder="Which city?" />
        </form>
      </header>
    )
  }
}

export default Header;
