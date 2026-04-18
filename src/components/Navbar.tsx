function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="site-logo">
          Boris<span>.</span>
        </a>

        <nav className="site-nav">
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="nav-cta">
          CV
        </a>
      </div>
    </header>
  )
}

export default Navbar