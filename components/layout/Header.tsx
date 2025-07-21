const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">StayFinder</div>
      <nav className="flex space-x-4">
        <button className="text-gray-600">Rooms</button>
        <button className="text-gray-600">Mansion</button>
        <button className="text-gray-600">Countryside</button>
      </nav>
      <div className="space-x-2">
        <button className="text-blue-500">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;