function Menu({active}: {active:boolean}) {
  return (
    <>
      <div className={`${active ? "block ": "hidden "}absolute bg-slate-200/20 inset-0 backdrop-blur-xs`}></div>
        <nav className={`menu${active? " active ":""} flex max-md:hidden pl-6 space-y-2 space-x-0 text-sm font-medium w-2xs h-screen shadow-lg flex-col justify-center md:bg-white md:h-auto md:flex-row md:space-x-6 md:w-auto md:pl-0 md:space-y-0`}>
          <a href="#projects">Projects</a>
          <a href="#projects">Experience</a>
        </nav>
    </>
    
    
  );
}


export default Menu;

{/* <div className={`${active ? "backdrop-blur-sm opacity-100 ": "backdrop-blur-none opacity-0 hidden "}absolute bg-slate-200/20 inset-0 backdrop-blur-xs transition-all duration-500 ease-in-out`}></div> */}
