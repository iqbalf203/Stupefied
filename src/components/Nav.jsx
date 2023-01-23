function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <a href="#">
          <img src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Kula Outreach
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Kula Circles
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Our Story
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </li>
            <button class="nav-btn-custom">Book a demo</button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
