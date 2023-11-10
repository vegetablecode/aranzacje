const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">DARKMODE</div>
      <div className="swap-off">LIGHTMODE</div>
    </label>
  );
};

export default ThemeSwitcher;
