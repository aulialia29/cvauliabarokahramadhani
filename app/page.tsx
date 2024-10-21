import Hero from "./components/Hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import "./aulia-style.css";

export default function CVonline () {
  return ( 
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>
  );
}