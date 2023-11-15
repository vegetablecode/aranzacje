const Header = ({ showIntro = false }) => (
  <div className="text-center">
    {showIntro ? <div className="text-md uppercase">witaj w</div> : ''}
    <div className="text-transparent text-4xl font-bold bg-clip-text bg-gradient-to-b from-red-600 to-orange-600">
      Aranżacje AI <span className="text-white">🤖</span>
    </div>
  </div>
);

export default Header;
