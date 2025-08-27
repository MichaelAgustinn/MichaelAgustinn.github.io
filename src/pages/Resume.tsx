import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Universitas Sulawesi Barat</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
             Prodi Informatika
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2023 - Present
            </code>
          </div>
        </div>
          <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
          <br />
            <code className="text-blue_vs">SMKN 1 Rangas</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Jurusan Multimedia
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2020 - 2023
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Freelancer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Mamuju, Sulawesi Barat, Indonesia{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2023 - Present</code>
            <br />
            <code className="text-sm">
            <br />• FinLoan – Platform simulasi kredit KPR dan pengajuan online; mengerjakan frontend dan backend secara remote.
            <br />• Website Profil Organisasi – Website untuk memperkenalkan visi, misi, kegiatan, serta publikasi karya anggota.
            <br />• Website Profil Desa – Website informatif yang menampilkan data desa, struktur organisasi, serta layanan digital untuk masyarakat.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• HTML – Bahasa markup dasar untuk membangun struktur halaman web.  
              <br />• CSS – Digunakan untuk styling halaman agar tampilan lebih menarik dan responsif.  
              <br />• JavaScript – Bahasa pemrograman utama untuk membuat website interaktif dan dinamis.  
              <br />• PHP – Bahasa pemrograman server-side untuk membangun aplikasi web dinamis.  
              <br />• Bootstrap – Framework CSS untuk mempercepat pembuatan desain responsif.  
              <br />• Laravel – Framework PHP untuk membangun aplikasi web dengan arsitektur modern (MVC).  
              <br />• Flutter – Framework UI untuk membuat aplikasi mobile lintas platform (Android & iOS).  
              <br />• SCSS – Preprocessor CSS dengan fitur variabel, nesting, dan modularisasi.  
              <br />• Java – Bahasa pemrograman OOP yang banyak digunakan untuk aplikasi enterprise dan Android.  
              <br />• SQL – Bahasa query untuk mengelola database relasional.  
              <br />• MongoDB – Database NoSQL berbasis dokumen yang fleksibel dan scalable.  
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
