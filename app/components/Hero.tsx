 import foto from "../Aulia.jpeg";

 function Profile() {
    return (
    <img 
    src={foto.src}
    alt="Aulia" className="fotoku" />);
  }

  export default function Hero () {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-400 font-bold"> CV ONLINE</h1>
        <h2 className="text-3xl"> Aulia Barokah Ramadhani</h2>
        <Profile />
        <p>
          Saya seorang mahasiswa Universitas Ma'soem jurusan Komputerisasi Akuntansi Semester 5
        </p>
        </div>
    );
  }