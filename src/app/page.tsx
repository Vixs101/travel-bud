import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="h-screen p-3 lg:px-28 w-full">
      <Navbar/>
      <div className="h-11/12 w-full bg-[url('/images/heroImage.png')] bg-cover bg-center">
        {/* div for hero items */}
        <div>
          <div>
            <h1>Your journey starts here-simple booking, seamless travel.</h1>
            <p>In just a few click</p>
          </div>
          {/*  card div*/}
        </div>
      </div>
    </div>
  );
}
