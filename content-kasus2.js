// Kasus 2 Content Data
const KASUS2 = {
  materi: {
    title:'Materi Pembelajaran', icon:'📘', render:'tabs',
    tabs:[
      { label:'Capaian & Tujuan', icon:'🎯', html:`
        <h3>📌 Capaian Pembelajaran — Fase F</h3>
        <p>Peserta didik mampu menganalisis penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari, menunjukkan sikap demokratis berdasarkan UUD NRI Tahun 1945, serta menganalisis masalah hak dan kewajiban warga negara untuk merumuskan solusi yang adil dan bertanggung jawab.</p>
        <h4>🎯 Tujuan Pembelajaran</h4>
        <p>Setelah mengikuti simulasi sidang CivicCourt, peserta didik mampu:</p>
        <ol>
          <li>Menjelaskan pentingnya integritas, transparansi, dan akuntabilitas dalam pengelolaan dana kegiatan sekolah.</li>
          <li>Menganalisis dugaan penyalahgunaan dana kegiatan berdasarkan bukti yang tersedia.</li>
          <li>Menghubungkan kasus dengan nilai Pancasila, hak dan kewajiban warga sekolah, serta dasar hukum yang berlaku.</li>
          <li>Menyusun pendapat dalam bentuk klaim, bukti, alasan, dan sanggahan secara logis.</li>
          <li>Merumuskan putusan yang adil, bertanggung jawab, dan sesuai dengan nilai Pancasila.</li>
        </ol>`
      },
      { label:'Materi 1', icon:'📖', html:`
        <h3>📖 Pancasila sebagai Dasar Sikap dan Tindakan Warga Negara</h3>
        <p>Pancasila bukan hanya dasar negara, tetapi juga pedoman dalam bersikap dan bertindak dalam kehidupan sehari-hari. Peserta didik sebagai warga negara muda perlu membiasakan diri bertindak jujur, adil, bertanggung jawab, dan peduli terhadap kepentingan bersama.</p>
        <p>Dalam kehidupan sekolah, nilai Pancasila dapat diterapkan melalui kegiatan belajar, organisasi, musyawarah kelas, kerja sama, dan pengelolaan kegiatan bersama.</p>
        <h4>⚖️ Nilai yang Berkaitan dengan Kasus</h4>
        <ol>
          <li><strong>Sila Kedua</strong> — Mengajarkan sikap adil, jujur, dan menghargai hak orang lain.</li>
          <li><strong>Sila Keempat</strong> — Mengajarkan penyelesaian masalah melalui musyawarah dan pertimbangan yang bijaksana.</li>
          <li><strong>Sila Kelima</strong> — Mengajarkan bahwa kepentingan bersama harus dijaga secara adil dan bertanggung jawab.</li>
        </ol>`
      },
      { label:'Materi 2', icon:'📖', html:`
        <h3>📖 Hak, Kewajiban, dan Tanggung Jawab Warga Negara</h3>
        <p>Setiap warga negara memiliki hak dan kewajiban. Hak harus digunakan secara bertanggung jawab, sedangkan kewajiban harus dijalankan dengan jujur dan disiplin.</p>
        <p>Di lingkungan sekolah, peserta didik berhak mengikuti kegiatan yang bermanfaat, memperoleh informasi yang jelas, dan mendapatkan perlakuan yang adil. Di sisi lain, peserta didik juga berkewajiban menjaga kepercayaan, menaati aturan, dan bertanggung jawab terhadap tugas yang diberikan.</p>
        <h4>📋 Dalam Kegiatan Sekolah — Panitia Wajib:</h4>
        <ol>
          <li>Menggunakan dana sesuai tujuan kegiatan.</li>
          <li>Laporan kegiatan harus dibuat secara benar dan terbuka.</li>
          <li>Setiap pengeluaran harus dapat dibuktikan.</li>
          <li>Jika ada kesalahan, pihak yang bertanggung jawab harus memberi penjelasan.</li>
        </ol>
        <h4>🤝 Partisipasi Warga Negara dan Pengambilan Keputusan yang Bertanggung Jawab</h4>
        <p>Pendidikan Pancasila menekankan pentingnya partisipasi warga negara dalam menyelesaikan persoalan bersama. Partisipasi tidak hanya berarti ikut berbicara, tetapi juga mampu berpikir kritis, memeriksa informasi, menghargai pendapat orang lain, dan mengambil keputusan secara adil.</p>
        <p>Dalam menyelesaikan masalah, peserta didik tidak boleh langsung menuduh atau membela tanpa dasar. Setiap pendapat harus didukung oleh bukti dan alasan yang jelas.</p>
        <h4>🔍 Langkah Berpikir dalam Kasus</h4>
        <ol>
          <li>Pahami inti masalah.</li>
          <li>Periksa bukti yang tersedia.</li>
          <li>Dengarkan pendapat berbagai pihak.</li>
          <li>Hubungkan kasus dengan nilai Pancasila dan aturan yang berlaku.</li>
          <li>Ambil keputusan secara adil dan bertanggung jawab.</li>
        </ol>`
      }
    ]
  },

  berkas: {
    title:'Berkas Kasus', icon:'📂', render:'tabs',
    tabs:[
      { label:'Identitas Kasus', icon:'🏷️', html:`
        <h3>🏷️ Identitas Kasus</h3>
        <table style="width:100%;border-collapse:collapse;margin:12px 0">
          <tr><td style="padding:10px 14px;font-weight:700;width:40%;border-bottom:1px solid #d4a843aa">Judul Perkara</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Dugaan Penyalahgunaan Dana Kegiatan Sekolah</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Kegiatan</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Forum Kepemimpinan dan Anti-Korupsi OSIS</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Tempat</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">SMA Nusantara Mandiri</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Pihak Penggugat</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Perwakilan Peserta Didik dan Bendahara OSIS</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700">Pihak Tergugat</td><td style="padding:10px 14px">Ketua Panitia Kegiatan</td></tr>
        </table>`
      },
      { label:'Kronologi', icon:'📋', html:`
        <h3>📋 Kronologi Kasus</h3>
        <p>OSIS SMA Nusantara Mandiri mengadakan kegiatan <strong>Forum Kepemimpinan dan Anti-Korupsi OSIS</strong>. Kegiatan ini menggunakan dana sebesar <strong>Rp5.000.000</strong> yang berasal dari dana kegiatan sekolah dan sumbangan sukarela orang tua.</p>
        <p>Setelah kegiatan selesai, panitia menyerahkan laporan pertanggungjawaban. Namun, beberapa anggota panitia menemukan perbedaan data.</p>
        <p>Dalam laporan, konsumsi ditulis sebanyak <strong>100 paket</strong>. Padahal, nota asli menunjukkan pembelian <strong>60 paket</strong>, sedangkan daftar hadir menunjukkan peserta yang hadir hanya <strong>58 orang</strong>.</p>
        <p>Selain itu, ada dugaan sisa dana sekitar <strong>Rp500.000</strong> yang belum dijelaskan secara terbuka. Karena itu, perkara ini dibawa ke CivicCourt untuk diperiksa secara adil berdasarkan bukti.</p>`
      },
      { label:'Pokok Masalah', icon:'❓', html:`
        <h3>❓ Masalah yang Harus Diputuskan</h3>
        <ol>
          <li>Apakah laporan pertanggungjawaban sesuai dengan bukti yang ada?</li>
          <li>Apakah perbedaan jumlah konsumsi merupakan kesalahan administrasi atau dugaan manipulasi?</li>
          <li>Apakah ketua panitia sudah mengelola dana secara transparan dan akuntabel?</li>
          <li>Apakah ada sisa dana yang harus dikembalikan atau dijelaskan?</li>
          <li>Putusan apa yang paling adil bagi panitia, peserta didik, dan sekolah?</li>
        </ol>`
      },
      { label:'Posisi Penggugat', icon:'🔴', html:`
        <h3>🔴 Penggugat</h3>
        <p>Penggugat menilai bahwa ada dugaan penyalahgunaan dana kegiatan sekolah. Hal ini terlihat dari perbedaan antara laporan pertanggungjawaban, nota konsumsi, dan daftar hadir peserta.</p>
        <h4>Klaim Penggugat</h4>
        <p>Ketua panitia diduga tidak transparan dan tidak akuntabel dalam mengelola dana kegiatan.</p>
        <h4>Alasan Penggugat</h4>
        <p>Dana kegiatan adalah amanah bersama. Jika laporan tidak sesuai bukti, maka kepercayaan warga sekolah dapat terganggu.</p>
        <h4>Bukti yang Dapat Digunakan</h4>
        <p>Bukti 1, Bukti 3, Bukti 4, Bukti 5, Bukti 6, dan Bukti 7.</p>`
      },
      { label:'Posisi Tergugat', icon:'🔵', html:`
        <h3>🔵 Tergugat</h3>
        <p>Tergugat menyatakan bahwa tidak ada niat menyalahgunakan dana. Menurut tergugat, perbedaan data terjadi karena laporan disusun terburu-buru dan belum diperiksa kembali.</p>
        <h4>Klaim Tergugat</h4>
        <p>Masalah ini adalah kesalahan administrasi, bukan penyalahgunaan dana secara sengaja.</p>
        <h4>Alasan Tergugat</h4>
        <p>Kegiatan tetap terlaksana, peserta memperoleh konsumsi, dan belum ada bukti langsung bahwa dana digunakan untuk kepentingan pribadi.</p>
        <h4>Bukti yang Dapat Digunakan</h4>
        <p>Bukti 2, Bukti 4, Bukti 6, dan keterangan saksi tergugat.</p>`
      }
    ]
  },

  'dasar-hukum': {
    title:'Dasar Hukum', icon:'⚖️', render:'tabs',
    tabs:[
      { label:'Dasar Hukum', icon:'📜', html:`
        <h3>📜 Dasar Hukum dan Pertimbangan</h3>
        <ol>
          <li><strong>UUD NRI Tahun 1945 Pasal 23 ayat (1)</strong> — Pengelolaan anggaran harus dilakukan secara terbuka dan bertanggung jawab.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28D ayat (1)</strong> — Setiap orang berhak memperoleh kepastian hukum yang adil.</li>
          <li><strong>UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional Pasal 3</strong> — Pendidikan bertujuan membentuk peserta didik yang berakhlak mulia, demokratis, dan bertanggung jawab.</li>
          <li><strong>UU No. 17 Tahun 2003 tentang Keuangan Negara Pasal 3 ayat (1)</strong> — Keuangan negara dikelola secara tertib, taat aturan, efisien, efektif, transparan, dan bertanggung jawab.</li>
          <li><strong>Permendikdasmen No. 8 Tahun 2026 tentang Pengelolaan Dana BOSP Pasal 2</strong> — Dana BOSP dikelola dengan prinsip fleksibel, efektif, efisien, akuntabel, dan transparan.</li>
          <li><strong>UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi</strong> — Penyalahgunaan kewenangan yang menguntungkan diri sendiri/orang lain dan merugikan keuangan negara dapat menjadi persoalan hukum.</li>
        </ol>`
      },
      { label:'Nilai Pancasila', icon:'🇮🇩', html:`
        <h3>🇮🇩 Nilai Pancasila dalam Kasus</h3>
        <ol>
          <li><strong>Sila Kedua</strong> — Menghargai hak orang lain dan tidak merugikan kepentingan bersama.</li>
          <li><strong>Sila Keempat</strong> — Menyelesaikan persoalan melalui musyawarah dan pertimbangan yang bijaksana.</li>
          <li><strong>Sila Kelima</strong> — Menjaga keadilan agar dana bersama digunakan untuk kepentingan bersama.</li>
          <li><strong>Nilai Integritas</strong> — Jujur, tanggung jawab, disiplin, berani, adil, dan peduli.</li>
          <li><strong>Nilai Gotong Royong</strong> — Kegiatan sekolah harus dijalankan dengan kerja sama dan kepercayaan.</li>
        </ol>`
      }
    ]
  },

  'kartu-peran': {
    title:'Kartu Peran Sidang', icon:'🎭', render:'roles',
    roles:[
      { name:'Hakim Ketua', img:'assets/hakim.png',
        tugas:['Membuka dan menutup sidang.','Menjaga sidang tetap tertib.','Memberi kesempatan bicara kepada semua pihak.','Meminta setiap pihak menunjukkan bukti.','Mengajukan pertanyaan klarifikasi.','Memimpin musyawarah putusan.','Membacakan putusan akhir.'],
        extraTitle:'Pertanyaan Hakim',
        extra:['Bukti apa yang paling kuat dalam kasus ini?','Apakah perbedaan data terjadi karena kesalahan atau kesengajaan?','Siapa yang bertanggung jawab menjelaskan laporan dana?','Apakah ada dana yang belum dipertanggungjawabkan?','Putusan apa yang paling adil?']
      },
      { name:'Panitera', img:'assets/panitera.png',
        tugas:['Mencatat identitas perkara.','Mencatat pihak yang hadir.','Mencatat bukti yang diajukan.','Mencatat keterangan saksi dan ahli.','Mencatat argumen penting.','Membantu hakim menyusun putusan.'],
        extraTitle:'Catatan Panitera',
        extraText:'Tulislah fakta secara objektif. Jangan memihak penggugat atau tergugat.'
      },
      { name:'Penggugat', img:'assets/penggugat.png',
        tugas:['Menjelaskan alasan mengajukan perkara.','Menunjukkan bukti ketidaksesuaian laporan.','Menghubungkan bukti dengan dugaan penyalahgunaan dana.','Mengajukan pertanyaan kepada tergugat dan saksi.','Menyampaikan tuntutan secara sopan dan logis.'],
        extraTitle:'Klaim Utama',
        extraText:'Tergugat diduga tidak transparan dan tidak akuntabel dalam mengelola dana kegiatan sekolah.',
        extra2Title:'Tuntutan',
        extra2Text:'Laporan harus diperbaiki, sisa dana harus dijelaskan, dan pihak yang bertanggung jawab harus memberi klarifikasi terbuka.'
      },
      { name:'Tergugat', img:'assets/tergugat.png',
        tugas:['Menjelaskan kronologi dari pihak panitia.','Menanggapi tuduhan penggugat.','Menjelaskan penyebab perbedaan data.','Menunjukkan bukti yang meringankan.','Menjawab pertanyaan hakim dan penggugat.','Menyampaikan pembelaan akhir.'],
        extraTitle:'Klaim Utama',
        extraText:'Perbedaan laporan terjadi karena kesalahan administrasi, bukan karena niat menyalahgunakan dana.',
        extra2Title:'Pembelaan',
        extra2Text:'Kegiatan terlaksana, peserta mendapat fasilitas, dan belum ada bukti langsung bahwa dana digunakan untuk kepentingan pribadi.'
      },
      { name:'Saksi Penggugat', img:'assets/saksi.png',
        tugas:['Menjelaskan data yang diketahui.','Menyampaikan perbedaan antara nota, daftar hadir, dan laporan.','Menjawab pertanyaan hakim.','Menjelaskan apakah ada sisa dana yang belum dilaporkan.'],
        extraTitle:'Keterangan Utama',
        extraText:'Peserta yang hadir berjumlah 58 orang. Nota konsumsi menunjukkan 60 paket. Namun, laporan pertanggungjawaban mencatat 100 paket.'
      },
      { name:'Saksi Tergugat', img:'assets/saksi.png',
        tugas:['Menjelaskan proses penyusunan laporan.','Menjelaskan kemungkinan kesalahan pencatatan.','Menyampaikan apakah kegiatan benar-benar terlaksana.','Menjawab pertanyaan hakim dan penggugat.'],
        extraTitle:'Keterangan Utama',
        extraText:'Laporan disusun dalam waktu terbatas. Ada kemungkinan data belum diperiksa ulang. Saksi tidak melihat langsung dana digunakan untuk kepentingan pribadi.'
      },
      { name:'Ahli PPKn', img:'assets/ahli.png',
        tugas:['Menjelaskan nilai Pancasila dalam kasus.','Menjelaskan arti integritas, transparansi, dan akuntabilitas.','Menjelaskan hak dan kewajiban warga sekolah.','Menjelaskan pentingnya bukti dalam berpendapat.','Membantu hakim membuat pertimbangan yang adil.'],
        extraTitle:'Pandangan Ahli',
        extraText:'Kasus ini bukan hanya masalah uang, tetapi juga masalah kepercayaan, kejujuran, dan tanggung jawab. Tuduhan harus dibuktikan, tetapi laporan yang tidak sesuai bukti juga wajib diperbaiki.'
      }
    ]
  },

  bukti: {
    title:'Bukti Kasus', icon:'📑', render:'evidence',
    evidence:[
      { num:1, title:'Rencana Anggaran Kegiatan', img:'berkas bukti/bukti 1.jpeg',
        desc:'Rencana awal kegiatan menunjukkan total dana sebesar Rp5.000.000. Dalam rencana tersebut, konsumsi disiapkan untuk 60 peserta dengan biaya Rp1.500.000.',
        question:'Apakah laporan akhir kegiatan sesuai dengan rencana anggaran awal?' },
      { num:2, title:'Tanda Terima Dana Panitia', img:'berkas bukti/bukti 2.jpeg',
        desc:'Ketua panitia menerima dana kegiatan sebesar Rp5.000.000 pada tanggal 10 Februari 2026. Dana tersebut harus digunakan untuk kegiatan dan dipertanggungjawabkan melalui laporan, nota, daftar hadir, dan dokumentasi.',
        question:'Siapa yang bertanggung jawab menjelaskan penggunaan dana kegiatan?' },
      { num:3, title:'Nota Konsumsi Asli', img:'berkas bukti/bukti 3.jpeg',
        desc:'Nota konsumsi menunjukkan pembelian sebanyak 60 paket. Harga satu paket adalah Rp25.000, sehingga total pembayaran konsumsi adalah Rp1.500.000.',
        question:'Mengapa laporan pertanggungjawaban mencatat konsumsi sebanyak 100 paket?' },
      { num:4, title:'Laporan Pertanggungjawaban Panitia', img:'berkas bukti/bukti 4.jpeg',
        desc:'Dalam laporan pertanggungjawaban, konsumsi ditulis sebanyak 100 paket dengan total Rp2.500.000. Jumlah ini berbeda dengan nota konsumsi asli dan daftar hadir peserta.',
        question:'Apakah perbedaan angka ini menunjukkan kesalahan administrasi atau dugaan manipulasi laporan?' },
      { num:5, title:'Daftar Hadir Peserta', img:'berkas bukti/bukti 5.jpeg',
        desc:'Daftar hadir menunjukkan peserta yang hadir dan menandatangani daftar hadir berjumlah 58 orang. Jumlah ini mendekati rencana awal konsumsi sebanyak 60 paket.',
        question:'Apakah wajar laporan mencatat 100 paket ketika peserta yang hadir hanya 58 orang?' },
      { num:6, title:'Percakapan Panitia', img:'berkas bukti/bukti 6.jpeg',
        desc:'Dalam percakapan panitia, bendahara mengingatkan bahwa nota asli hanya menunjukkan 60 paket, sedangkan laporan mencatat 100 paket. Salah satu anggota juga mengingatkan bahwa sisa dana sebaiknya dikembalikan atau ditulis jelas dalam laporan.',
        question:'Apakah percakapan ini menunjukkan bahwa laporan perlu diperbaiki?' },
      { num:7, title:'Keterangan Bendahara OSIS', img:'berkas bukti/bukti 7.jpeg',
        desc:'Bendahara OSIS menyatakan bahwa sebagian nota belum diserahkan tepat waktu. Menurut catatan awal, ada dugaan sisa dana sekitar Rp500.000 yang belum dicantumkan secara jelas dalam laporan.',
        question:'Apakah sisa dana harus dijelaskan atau dikembalikan?' },
      { num:8, title:'Dasar Aturan Pengelolaan Dana', img:'berkas bukti/bukti 8.jpeg',
        desc:'Dana kegiatan sekolah harus dikelola secara jujur, efektif, efisien, transparan, akuntabel, dan bertanggung jawab. Setiap pengeluaran harus memiliki bukti yang relevan dan dapat diperiksa.',
        question:'Apakah tindakan panitia sudah sesuai dengan prinsip transparansi dan akuntabilitas?' }
    ]
  },

  putusan: {
    title:'Lembar Putusan', icon:'📜', render:'tabs',
    tabs:[
      { label:'Panduan Putusan', icon:'📝', html:`
        <h3>📝 Langkah Menyusun Putusan</h3>
        <p>Setelah membaca berkas kasus, memeriksa bukti, dan mendengar pendapat para pihak, susunlah putusan kelompokmu secara jelas, adil, dan bertanggung jawab.</p>
        <div class="highlight-box">⚠️ Putusan tidak boleh dibuat hanya berdasarkan dugaan atau perasaan. Putusan harus berdasarkan klaim, bukti, alasan, nilai Pancasila, dasar hukum, dan pertimbangan keadilan.</div>
        <ol>
          <li><strong>Pahami inti masalah</strong> — Apa persoalan utama dalam kasus ini?</li>
          <li><strong>Tentukan klaim kelompok</strong> — Apakah terjadi penyalahgunaan dana, kesalahan administrasi, atau bukti belum cukup?</li>
          <li><strong>Pilih bukti yang paling relevan</strong> — Gunakan bukti yang benar-benar mendukung pendapat kelompokmu.</li>
          <li><strong>Jelaskan alasan</strong> — Terangkan mengapa bukti tersebut mendukung putusan.</li>
          <li><strong>Pertimbangkan nilai Pancasila</strong> — Hubungkan dengan kejujuran, tanggung jawab, keadilan, musyawarah.</li>
          <li><strong>Gunakan dasar hukum</strong> — Aturan tentang pengelolaan dana, transparansi, akuntabilitas.</li>
          <li><strong>Rumuskan putusan</strong> — Pilih keputusan yang paling adil.</li>
          <li><strong>Berikan rekomendasi</strong> — Tuliskan tindak lanjut.</li>
        </ol>` },
      { label:'LKPD Siswa (PDF)', icon:'📄', html:`
        <h3>📄 LKPD Lembar Putusan — Siap Cetak</h3>
        <p>Gunakan lembar kerja ini untuk menulis putusan kelompokmu.</p>
        <div style="text-align:center;margin:20px 0">
          <a href="kasus 2/lembar putusan/LKPD_Lembar_Putusan_CivicCourt_Kasus_2_Siap_Cetak_Siswa.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh LKPD Siswa</a>
        </div>
        <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
          <iframe src="kasus 2/lembar putusan/LKPD_Lembar_Putusan_CivicCourt_Kasus_2_Siap_Cetak_Siswa.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
        </div>` },
      { label:'Panduan Guru (PDF)', icon:'👩‍🏫', html:`
        <h3>👩‍🏫 Panduan Penilaian Guru</h3>
        <p>Panduan ini membantu guru menilai putusan dan argumen siswa.</p>
        <div style="text-align:center;margin:20px 0">
          <a href="kasus 2/lembar putusan/Panduan_Penilaian_Guru_CivicCourt_Kasus_2.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#1a2744,#2a3d66);color:#f0d68a;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh Panduan Guru</a>
        </div>
        <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
          <iframe src="kasus 2/lembar putusan/Panduan_Penilaian_Guru_CivicCourt_Kasus_2.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
        </div>` }
    ]
  },

  refleksi: {
    title:'Misi Refleksi', icon:'🪞', render:'tabs',
    tabs:[
      { label:'Intro', icon:'⚖️', html:`
        <h3>⚖️ Misi Refleksi</h3>
        <p style="font-size:1.05rem">Sidang telah selesai. Sekarang saatnya menilai kembali cara berpikir dan putusan kelompokmu.</p>
        <div class="highlight-box">Refleksi bukan untuk mencari siapa yang paling benar. Refleksi membantu kamu melihat apakah putusan kelompokmu sudah berdasarkan bukti, alasan, nilai Pancasila, dasar hukum, dan keadilan.</div>
        <p>Dalam misi refleksi ini, kamu akan:</p>
        <ul><li>✓ Mengecek pemahaman kasus</li><li>✓ Memilih bukti paling kuat</li><li>✓ Menilai keadilan putusan</li><li>✓ Menyimpulkan pelajaran dari sidang</li></ul>` },
      { label:'Refleksi 1', icon:'🔍', html:`
        <h3>🔍 Cek Pemahaman Kasus</h3>
        <p><strong>Inti kasus ini adalah tentang:</strong></p>
        <div class="content-card"><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q1" value="a"> Panitia yang mengelola dana kegiatan sekolah</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q1" value="b"> Warga sekolah yang meminta laporan dana secara jelas</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q1" value="c"> Kejujuran, transparansi, dan tanggung jawab dalam menggunakan dana bersama</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q1" value="d"> Semua jawaban benar</label></div>
        <p><strong>Masalah utama dalam kasus ini adalah:</strong></p>
        <div class="content-card"><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q2" value="a"> Semua kesalahan laporan pasti termasuk korupsi</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q2" value="b"> Dana kegiatan boleh digunakan tanpa bukti selama kegiatan tetap berjalan</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q2" value="c"> Perlu membedakan kesalahan administrasi dan dugaan penyalahgunaan dana</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k2r1q2" value="d"> Panitia selalu salah ketika laporan keuangan dipertanyakan</label></div>
        <p style="font-size:.85rem;color:var(--gold);font-style:italic">Diskusikan: Mengapa kelompokmu memilih jawaban tersebut? Tuliskan alasan singkat di LKPD.</p>` },
      { label:'Refleksi 2', icon:'📑', html:`
        <h3>📑 Pilih Bukti Terkuat</h3>
        <p>Dari semua bukti yang sudah diperiksa, pilih bukti yang paling memengaruhi putusan kelompokmu.</p>
        <h4>Bukti yang mendukung penggugat:</h4>
        <div class="content-card"><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="1"> Bukti 1: Rencana Anggaran Kegiatan</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="3"> Bukti 3: Nota Konsumsi Asli</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="4"> Bukti 4: Laporan Pertanggungjawaban Panitia</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="5"> Bukti 5: Daftar Hadir Peserta</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="6"> Bukti 6: Percakapan Panitia</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="7"> Bukti 7: Keterangan Bendahara OSIS</label></div>
        <h4>Bukti yang mendukung tergugat / pertimbangan meringankan:</h4>
        <div class="content-card"><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="2"> Bukti 2: Tanda Terima Dana Panitia</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="4b"> Bukti 4: Laporan Pertanggungjawaban Panitia</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="6b"> Bukti 6: Percakapan Panitia</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="8"> Bukti 8: Dasar Aturan Pengelolaan Dana</label></div>
        <div class="content-card"><h3>✍️ Lengkapi</h3><p>Bukti terkuat menurut kelompok kami adalah...</p><textarea placeholder="Tuliskan bukti terkuat dan alasannya..."></textarea></div>` },
      { label:'Refleksi 3', icon:'⚖️', html:`
        <h3>⚖️ Termometer Keadilan</h3>
        <p>Nilailah putusan kelompokmu dengan skala 1–5.</p>
        <div class="content-card"><h3>Putusan kami sudah mempertimbangkan kejujuran dan tanggung jawab panitia</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk1" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk1" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk1" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk1" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk1" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah mempertimbangkan hak warga sekolah untuk mendapat laporan yang jelas</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk2" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk2" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk2" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk2" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk2" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah menggunakan bukti yang relevan</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk3" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk3" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk3" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk3" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk3" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah membedakan kesalahan administrasi dan penyalahgunaan dana</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk4" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk4" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk4" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk4" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk4" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah sesuai dengan nilai Pancasila</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk5" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk5" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk5" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk5" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk5" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah adil bagi panitia, siswa, dan pihak sekolah</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk6" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk6" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk6" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk6" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k2tk6" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>✍️ Kalimat Refleksi</h3><textarea placeholder="Hari ini saya belajar bahwa mengelola dana kegiatan sekolah harus...."></textarea></div>` },
      { label:'🏆 Badge', icon:'🏆', html:`
        <h3 style="text-align:center;font-size:1.4rem">🎉 Selamat!</h3>
        <p style="text-align:center;font-size:1.1rem">Kamu telah menyelesaikan <strong>Misi CivicCourt Kasus 2</strong>!</p>
        <div style="text-align:center;margin:24px 0;font-size:1.1rem;line-height:2">
          ✓ Membaca kasus dengan teliti<br>
          ✓ Memeriksa laporan dan bukti keuangan sederhana<br>
          ✓ Memilih bukti yang relevan<br>
          ✓ Mendengar dua pihak<br>
          ✓ Membedakan kesalahan administrasi dan penyalahgunaan dana<br>
          ✓ Menyusun alasan<br>
          ✓ Membuat putusan yang adil
        </div>
        <h4 style="text-align:center;margin:20px 0 12px">🏅 Pilih Badge Kelompokmu:</h4>
        <div class="content-card" style="text-align:center"><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k2badge" value="1"> 🔍 Ahli Bukti Keuangan</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k2badge" value="2"> ⚖️ Penalar Keadilan</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k2badge" value="3"> 🤝 Tim Integritas</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k2badge" value="4"> 🛡️ Penjaga Transparansi</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k2badge" value="5"> 📜 Pembuat Putusan Bijak</label></div>
        <div class="highlight-box">Mengelola dana kegiatan sekolah adalah amanah bersama. Putusan yang baik harus mempertimbangkan kejujuran, transparansi, tanggung jawab, bukti, aturan, dan keadilan.</div>` }
    ]
  }
};
