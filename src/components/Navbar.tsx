type Theme = 'dark' | 'light' | 'terminal' | 'purple'

type NavbarProps = {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

function Navbar({ theme, setTheme }: NavbarProps) {
  const themes: Theme[] = ['dark', 'light', 'terminal', 'purple']

const nextTheme = () => {
  document.documentElement.classList.remove('theme-changing')
  void document.documentElement.offsetWidth
  document.documentElement.classList.add('theme-changing')

  const currentIndex = themes.indexOf(theme)
  const nextIndex = (currentIndex + 1) % themes.length
  setTheme(themes[nextIndex])

  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-changing')
  }, 650)
}

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#top" className="site-logo">
          Boris TS<span>.</span>
        </a>

        <nav className="site-nav">
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={nextTheme}>
  {theme}
</button>

          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="nav-cta">
            CV
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar