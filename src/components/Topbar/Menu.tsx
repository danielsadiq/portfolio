function Menu({active}: {active:boolean}) {
  return (
    // <div className={"absolute bg-slate-200/20 inset-0 backdrop-blur-sm"}>
      <nav className={`menu${active? " active ":""} flex max-md:hidden items-center space-x-0 text-sm font-medium w-2xs h-screen bg-gray-300 flex-col justify-center md:bg-white md:h-auto md:flex-row md:space-x-6 md:w-auto`}>
        <a href="#projects">Projects</a>
        <a href="#projects">Experience</a>
      </nav>
    // </div>
  );
}

export default Menu;
