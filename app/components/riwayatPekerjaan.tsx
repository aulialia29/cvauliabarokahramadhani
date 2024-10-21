function RowRiwayatpekerja (props:any) {
    return (<div className="border-2 border-indigo-500/75 rounded-lg bg-purple-200 p-2 my-5">
        <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">{props.tahunkerja}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
        <div className="col-span-12 md:col-span-4">{props.pekerjaan}</div>
        </div>
        </div>
        </div>
    );
    }

    export default function RiwayatPekerjaan() {
        return (
            <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl">Riwayat Pekerjaan</h2>

            <RowRiwayatpekerja tahunkerja="2023" instansi="PT Ma'soem Pusat" pekerjaan="Staff Auditing"/>
            <RowRiwayatpekerja tahunkerja="2024" instansi="SMK Pasundan Rancaekek" pekerjaan="Staff Tata Usaha"/>
            <RowRiwayatpekerja tahunkerja="2024" instansi="Prama Babakan Sari" pekerjaan="SPG Event Zanana"/>
            <RowRiwayatpekerja tahunkerja="2024" instansi="SuperIndo" pekerjaan="SPG Event Zanana"/>
            </div>
    );
    }