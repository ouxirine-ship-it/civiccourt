// Kasus 1 Content Data
const KASUS1 = {
  materi: {
    title:'Materi Pembelajaran', icon:'📘', render:'tabs',
    tabs:[
      { label:'Capaian & Tujuan', icon:'🎯', html:`
        <h3>📌 Capaian Pembelajaran — Fase F</h3>
        <p>Peserta didik mampu menganalisis penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari, menunjukkan sikap demokratis berdasarkan UUD NRI Tahun 1945 dalam era keterbukaan informasi, serta menganalisis kasus pelanggaran hak dan pengingkaran kewajiban warga negara untuk merumuskan solusi yang adil dan bertanggung jawab.</p>
        <h4>🎯 Tujuan Pembelajaran</h4>
        <p>Setelah mengikuti simulasi sidang CivicCourt, peserta didik mampu:</p>
        <ol>
          <li>Menjelaskan hubungan antara kebebasan berpendapat, tanggung jawab, dan etika digital.</li>
          <li>Menganalisis kasus ujaran kebencian di media sosial berdasarkan bukti yang tersedia.</li>
          <li>Menghubungkan kasus dengan nilai Pancasila, hak dan kewajiban warga negara, serta dasar hukum yang berlaku.</li>
          <li>Menyusun argumen dalam bentuk klaim, bukti, alasan, dan sanggahan secara logis.</li>
          <li>Merumuskan putusan yang adil, bertanggung jawab, dan sesuai dengan nilai Pancasila.</li>
        </ol>`
      },
      { label:'Materi 1', icon:'📖', html:`
        <h3>📖 Hak, Kewajiban, dan Kebebasan Berpendapat</h3>
        <p>Dalam kehidupan demokrasi, setiap warga negara memiliki hak untuk menyampaikan pendapat. Hak ini penting karena warga negara dapat menyampaikan gagasan, kritik, saran, dan aspirasi terhadap persoalan yang terjadi di masyarakat.</p>
        <p>Namun, kebebasan berpendapat tidak berarti bebas mengatakan apa saja tanpa batas. Setiap warga negara juga memiliki kewajiban untuk menghormati hak orang lain, menjaga ketertiban, dan tidak merendahkan martabat manusia.</p>
        <p>Di era digital, pendapat dapat tersebar sangat cepat melalui media sosial. Karena itu, peserta didik perlu membiasakan diri berpikir sebelum membagikan tulisan, komentar, gambar, atau video.</p>
        <h4>⚖️ Prinsip Penting</h4>
        <ol>
          <li>Hak berpendapat harus digunakan secara bertanggung jawab.</li>
          <li>Kritik boleh disampaikan, tetapi tidak boleh menghina, menghasut, atau menyebarkan kebencian.</li>
          <li>Setiap warga negara wajib menghormati hak, martabat, dan keamanan orang lain.</li>
        </ol>`
      },
      { label:'Materi 2', icon:'📖', html:`
        <h3>📖 Etika Digital dan Tanggung Jawab Warga Negara</h3>
        <p>Media sosial adalah bagian dari ruang publik digital. Apa yang ditulis seseorang di media sosial dapat dibaca, disebarkan, dan memengaruhi orang lain.</p>
        <p>Sebagai warga negara yang bertanggung jawab, peserta didik perlu menggunakan media sosial dengan bijak. Etika digital berarti menggunakan teknologi dengan sopan, adil, hati-hati, dan tidak merugikan orang lain.</p>
        <p>Ujaran kebencian dapat menimbulkan permusuhan, diskriminasi, perundungan, bahkan konflik sosial. Karena itu, setiap informasi harus diperiksa terlebih dahulu sebelum dipercaya atau disebarkan.</p>
        <h4>🤝 Sikap yang Perlu Dibiasakan</h4>
        <ol>
          <li>Memeriksa kebenaran informasi.</li>
          <li>Membedakan kritik dan hinaan.</li>
          <li>Tidak menyebarkan kalimat yang merendahkan kelompok tertentu.</li>
          <li>Menggunakan bahasa yang sopan.</li>
          <li>Berani menolak konten yang menghasut kebencian.</li>
        </ol>`
      },
      { label:'Materi 3', icon:'📖', html:`
        <h3>🇮🇩 Nilai Pancasila dalam Ruang Digital</h3>
        <p>Pancasila menjadi pedoman dalam menggunakan kebebasan berpendapat, termasuk di media sosial. Nilai Pancasila membantu warga negara membedakan antara pendapat yang bertanggung jawab dan tindakan yang merugikan orang lain.</p>
        <ol>
          <li><strong>Sila Kedua</strong> — Mengajarkan penghormatan terhadap martabat manusia. Setiap orang tidak boleh dihina, direndahkan, atau diperlakukan tidak adil karena identitasnya.</li>
          <li><strong>Sila Ketiga</strong> — Mengajarkan persatuan. Ujaran kebencian dapat merusak persatuan karena menimbulkan permusuhan antarindividu atau kelompok.</li>
          <li><strong>Sila Keempat</strong> — Mengajarkan musyawarah dan penyampaian pendapat secara bijaksana. Kritik harus disampaikan dengan alasan, bukan dengan kebencian.</li>
          <li><strong>Sila Kelima</strong> — Mengajarkan keadilan. Setiap orang berhak mendapat perlindungan dari tindakan yang merugikan kehormatan, keamanan, dan martabatnya.</li>
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
          <tr><td style="padding:10px 14px;font-weight:700;width:40%;border-bottom:1px solid #d4a843aa">Judul Perkara</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Dugaan Ujaran Kebencian di Media Sosial</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Tempat Kejadian</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Media sosial siswa SMA Nusantara Mandiri</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Pihak Penggugat</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Perwakilan siswa yang merasa dirugikan</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Pihak Tergugat</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Pemilik akun yang mengunggah komentar bermasalah</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700">Pokok Perkara</td><td style="padding:10px 14px">Unggahan media sosial yang diduga mengandung hinaan, hasutan, dan kebencian terhadap kelompok siswa tertentu.</td></tr>
        </table>`
      },
      { label:'Kronologi', icon:'📋', html:`
        <h3>📋 Kronologi Kasus</h3>
        <p>Seorang siswa bernama <strong>Raka</strong> mengunggah komentar di media sosial setelah terjadi perbedaan pendapat dalam kegiatan sekolah.</p>
        <p>Dalam unggahan tersebut, Raka menulis kalimat yang dianggap merendahkan kelompok siswa tertentu. Unggahan itu kemudian menyebar dan mendapat banyak komentar.</p>
        <p>Beberapa siswa merasa dirugikan karena unggahan tersebut membuat mereka <strong>malu, tidak nyaman, dan menjadi sasaran ejekan</strong> dari teman lain.</p>
        <p>Raka menyatakan bahwa unggahannya hanya bentuk kekesalan dan kritik biasa. Namun, pihak penggugat menilai unggahan tersebut telah melewati batas kebebasan berpendapat karena mengandung kebencian dan merendahkan martabat orang lain.</p>
        <p>Perkara ini kemudian dibawa ke <strong>CivicCourt</strong> untuk diperiksa berdasarkan bukti, nilai Pancasila, dan dasar hukum yang berlaku.</p>`
      },
      { label:'Pokok Masalah', icon:'❓', html:`
        <h3>❓ Masalah yang Harus Diputuskan</h3>
        <ol>
          <li>Apakah unggahan tergugat termasuk kritik biasa atau ujaran kebencian?</li>
          <li>Apakah unggahan tersebut merugikan martabat, rasa aman, atau hak pihak lain?</li>
          <li>Apakah tergugat menggunakan kebebasan berpendapat secara bertanggung jawab?</li>
          <li>Apakah bukti yang tersedia cukup untuk menyatakan adanya pelanggaran?</li>
          <li>Putusan apa yang paling adil bagi penggugat, tergugat, dan warga sekolah?</li>
        </ol>`
      },
      { label:'Posisi Penggugat', icon:'🔴', html:`
        <h3>🔴 Penggugat</h3>
        <p>Penggugat menilai bahwa unggahan tergugat bukan sekadar kritik, tetapi sudah mengarah pada ujaran kebencian karena merendahkan kelompok tertentu dan memancing komentar negatif dari orang lain.</p>
        <h4>Klaim Penggugat</h4>
        <p>Tergugat telah menyalahgunakan kebebasan berpendapat di media sosial.</p>
        <h4>Alasan Penggugat</h4>
        <p>Kebebasan berpendapat tidak boleh digunakan untuk menghina, menghasut, atau merendahkan martabat orang lain.</p>
        <h4>Bukti yang Dapat Digunakan</h4>
        <p>Tangkapan layar unggahan, komentar lanjutan, keterangan korban, dan dampak yang muncul setelah unggahan disebarkan.</p>`
      },
      { label:'Posisi Tergugat', icon:'🔵', html:`
        <h3>🔵 Tergugat</h3>
        <p>Tergugat menyatakan bahwa unggahan tersebut dibuat karena emosi sesaat dan tidak bermaksud menyebarkan kebencian.</p>
        <p>Tergugat berpendapat bahwa unggahan itu merupakan bentuk kritik terhadap sikap kelompok tertentu, bukan serangan terhadap identitas pribadi atau kelompok.</p>
        <h4>Klaim Tergugat</h4>
        <p>Unggahan tersebut merupakan bentuk kebebasan berpendapat, bukan ujaran kebencian.</p>
        <h4>Alasan Tergugat</h4>
        <p>Tidak ada niat untuk menghasut orang lain melakukan permusuhan. Unggahan dibuat sebagai bentuk kekesalan, bukan ajakan menyerang pihak tertentu.</p>
        <h4>Bukti yang Dapat Digunakan</h4>
        <p>Klarifikasi tergugat, konteks awal perdebatan, dan tanggapan tergugat setelah unggahan dipersoalkan.</p>`
      }
    ]
  },

  'dasar-hukum': {
    title:'Dasar Hukum', icon:'⚖️', render:'tabs',
    tabs:[
      { label:'Dasar Hukum', icon:'📜', html:`
        <h3>📜 Dasar Hukum dan Pertimbangan</h3>
        <p>Dalam negara demokrasi, setiap warga negara memiliki hak untuk menyampaikan pendapat. Namun, hak tersebut harus digunakan secara bertanggung jawab dan tidak boleh merugikan martabat, keamanan, serta hak orang lain.</p>
        <h4>Dasar Hukum yang Digunakan</h4>
        <ol>
          <li><strong>UUD NRI Tahun 1945 Pasal 28E ayat (3)</strong> — Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28F</strong> — Setiap orang berhak berkomunikasi dan memperoleh informasi melalui berbagai saluran yang tersedia.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28J ayat (2)</strong> — Dalam menjalankan hak dan kebebasannya, setiap orang wajib menghormati hak dan kebebasan orang lain.</li>
          <li><strong>UU No. 1 Tahun 2024 tentang Perubahan Kedua UU ITE</strong> — Mengatur penggunaan informasi elektronik, termasuk larangan menyebarkan informasi elektronik yang menghasut, mengajak, atau memengaruhi orang lain sehingga menimbulkan kebencian atau permusuhan terhadap individu atau kelompok tertentu.</li>
          <li><strong>UU No. 40 Tahun 2008 tentang Penghapusan Diskriminasi Ras dan Etnis</strong> — Memberikan perlindungan terhadap warga negara dari tindakan diskriminasi serta tindakan yang menunjukkan kebencian karena perbedaan ras dan etnis.</li>
        </ol>
        <h4>Pertimbangan Sidang</h4>
        <ol>
          <li>Apakah unggahan tergugat masih termasuk kritik atau sudah mengarah pada ujaran kebencian?</li>
          <li>Apakah unggahan tersebut merendahkan martabat atau menimbulkan permusuhan terhadap pihak tertentu?</li>
          <li>Apakah ada bukti yang menunjukkan dampak dari unggahan tersebut?</li>
          <li>Apakah tergugat sudah menggunakan kebebasan berpendapat secara bertanggung jawab?</li>
        </ol>`
      },
      { label:'Nilai Pancasila', icon:'🇮🇩', html:`
        <h3>🇮🇩 Nilai Pancasila dalam Kasus</h3>
        <p>Kasus ujaran kebencian di media sosial berkaitan langsung dengan nilai-nilai Pancasila. Peserta didik perlu menilai apakah tindakan dalam kasus ini sesuai dengan sikap warga negara yang beradab, demokratis, dan bertanggung jawab.</p>
        <ol>
          <li><strong>Sila Kedua: Kemanusiaan yang Adil dan Beradab</strong> — Setiap orang harus dihormati martabatnya. Pendapat tidak boleh disampaikan dengan cara menghina, merendahkan, atau menyakiti pihak lain.</li>
          <li><strong>Sila Ketiga: Persatuan Indonesia</strong> — Ujaran kebencian dapat memecah persatuan karena menimbulkan permusuhan, prasangka, dan konflik antarindividu atau kelompok.</li>
          <li><strong>Sila Keempat: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan</strong> — Perbedaan pendapat harus disampaikan secara bijaksana, santun, dan disertai alasan, bukan dengan emosi atau kebencian.</li>
          <li><strong>Sila Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia</strong> — Setiap warga negara berhak memperoleh perlakuan yang adil, termasuk perlindungan dari penghinaan, perundungan, dan diskriminasi di ruang digital.</li>
        </ol>`
      }
    ]
  },

  'kartu-peran': {
    title:'Kartu Peran Sidang', icon:'🎭', render:'roles',
    roles:[
      { name:'Hakim Ketua', img:'assets/hakim.png',
        tugas:['Membuka dan menutup sidang.','Menjaga ketertiban persidangan.','Memberi kesempatan berbicara kepada setiap pihak.','Meminta setiap pendapat didukung bukti.','Mengajukan pertanyaan klarifikasi.','Memimpin musyawarah putusan.','Membacakan putusan akhir.'],
        extraTitle:'Pertanyaan Kunci',
        extra:['Apa isi unggahan yang dipersoalkan?','Apakah unggahan tersebut berisi kritik atau kebencian?','Siapa pihak yang dirugikan?','Bukti apa yang paling kuat?','Putusan apa yang paling adil?']
      },
      { name:'Panitera', img:'assets/panitera.png',
        tugas:['Mencatat identitas perkara.','Mencatat pihak yang hadir.','Mencatat bukti yang diajukan.','Mencatat keterangan saksi dan ahli.','Mencatat klaim, alasan, dan sanggahan.','Membantu menyusun ringkasan putusan.'],
        extraTitle:'Catatan Penting',
        extraText:'Panitera harus menulis secara objektif dan tidak memihak salah satu pihak.'
      },
      { name:'Penggugat', img:'assets/penggugat.png',
        tugas:['Menjelaskan alasan mengajukan perkara.','Menunjukkan bukti unggahan yang dianggap bermasalah.','Menjelaskan dampak unggahan terhadap korban atau kelompok tertentu.','Menghubungkan bukti dengan dugaan ujaran kebencian.','Menyampaikan tuntutan secara sopan dan logis.'],
        extraTitle:'Klaim Utama',
        extraText:'Unggahan tergugat telah melewati batas kebebasan berpendapat karena merendahkan dan memicu kebencian terhadap pihak lain.'
      },
      { name:'Tergugat', img:'assets/tergugat.png',
        tugas:['Menjelaskan maksud unggahan.','Menanggapi tuduhan penggugat.','Menjelaskan konteks awal perdebatan.','Menunjukkan bukti atau keterangan yang meringankan.','Menjawab pertanyaan hakim, penggugat, saksi, dan ahli.','Menyampaikan pembelaan akhir.'],
        extraTitle:'Klaim Utama',
        extraText:'Unggahan tersebut adalah bentuk pendapat atau kritik, bukan ujaran kebencian yang sengaja dibuat untuk menimbulkan permusuhan.'
      },
      { name:'Ahli PPKn', img:'assets/ahli.png',
        tugas:['Menjelaskan batas kebebasan berpendapat.','Menjelaskan hubungan kasus dengan nilai Pancasila.','Menjelaskan pentingnya tanggung jawab dalam ruang digital.','Menjelaskan perbedaan kritik dan ujaran kebencian.','Membantu hakim menilai kasus secara adil.'],
        extraTitle:'Pandangan Ahli',
        extraText:'Kebebasan berpendapat adalah hak warga negara, tetapi penggunaannya harus menghormati hak orang lain. Kritik boleh disampaikan, tetapi tidak boleh berubah menjadi hinaan, hasutan, atau kebencian yang merendahkan martabat manusia.'
      },
      { name:'Saksi Penggugat', img:'assets/saksi.png',
        tugas:['Menjelaskan isi unggahan yang dilihat.','Menjelaskan dampak unggahan terhadap korban atau kelompok tertentu.','Menjelaskan reaksi teman-teman setelah unggahan menyebar.','Menjawab pertanyaan hakim dan para pihak.'],
        extraTitle:'Keterangan Utama',
        extraText:'Setelah unggahan tersebar, beberapa siswa merasa malu, tidak nyaman, dan menjadi bahan ejekan di media sosial maupun di lingkungan sekolah.'
      },
      { name:'Saksi Tergugat', img:'assets/saksi.png',
        tugas:['Menjelaskan konteks sebelum unggahan dibuat.','Menjelaskan apakah unggahan dibuat karena emosi sesaat.','Menjelaskan apakah tergugat pernah melakukan klarifikasi.','Menjawab pertanyaan hakim dan para pihak.'],
        extraTitle:'Keterangan Utama',
        extraText:'Unggahan muncul setelah terjadi perdebatan dalam kegiatan sekolah. Tergugat merasa kesal, tetapi kemudian menyatakan bahwa ia tidak bermaksud menimbulkan kebencian.'
      }
    ]
  },

  bukti: {
    title:'Bukti Kasus', icon:'📑', render:'evidence',
    evidence:[
      { num:1, title:'Tangkapan Layar Unggahan Media Sosial', img:'kasus 1/berkas bukti/bukti 1.jpeg',
        desc:'Bukti ini menunjukkan isi unggahan yang dipersoalkan oleh pihak penggugat. Unggahan tersebut memuat kalimat yang dianggap merendahkan kelompok siswa tertentu dan menimbulkan reaksi negatif dari pengguna lain.',
        question:'Apakah isi unggahan ini masih termasuk kritik, atau sudah mengarah pada hinaan dan ujaran kebencian?' },
      { num:2, title:'Komentar Lanjutan dari Pengguna Lain', img:'kasus 1/berkas bukti/bukti 2.jpeg',
        desc:'Bukti ini menunjukkan komentar-komentar yang muncul setelah unggahan disebarkan. Sebagian komentar ikut mengejek dan memperkuat pandangan negatif terhadap kelompok yang disebut dalam unggahan.',
        question:'Apakah unggahan tersebut menimbulkan dampak lanjutan berupa ejekan, tekanan, atau permusuhan terhadap pihak lain?' },
      { num:3, title:'Keterangan Korban atau Pihak yang Dirugikan', img:'kasus 1/berkas bukti/bukti 3.jpeg',
        desc:'Korban menyatakan bahwa unggahan tersebut membuatnya merasa malu, tidak nyaman, dan diserang di ruang digital. Korban juga menyampaikan bahwa setelah unggahan tersebar, beberapa teman mulai mengejek dan menjauhinya.',
        question:'Apakah keterangan korban menunjukkan adanya kerugian sosial, psikologis, atau pelanggaran terhadap martabat manusia?' },
      { num:4, title:'Klarifikasi Tergugat', img:'kasus 1/berkas bukti/bukti 4.jpeg',
        desc:'Tergugat menyatakan bahwa unggahan dibuat karena emosi sesaat setelah terjadi perbedaan pendapat dalam kegiatan sekolah. Tergugat mengaku tidak bermaksud menyebarkan kebencian, tetapi menyadari bahwa pilihan katanya dapat menyakiti pihak lain. Tergugat menyatakan bersedia menghapus unggahan dan meminta maaf jika unggahan tersebut merugikan pihak lain.',
        question:'Apakah klarifikasi ini cukup untuk menunjukkan tanggung jawab tergugat?' },
      { num:5, title:'Kronologi Awal Perdebatan', img:'kasus 1/berkas bukti/bukti 5.jpeg',
        desc:'Sebelum unggahan dibuat, terjadi perbedaan pendapat antara beberapa siswa dalam kegiatan sekolah. Perdebatan tersebut berkaitan dengan pembagian tugas kelompok. Tergugat merasa pendapatnya tidak dihargai, lalu menulis komentar di media sosial.',
        question:'Apakah konteks perdebatan dapat menjadi alasan pembenar, atau hanya menjadi alasan yang meringankan?' },
      { num:6, title:'Dampak Unggahan terhadap Suasana Kelas', img:'kasus 1/berkas bukti/bukti 6.jpeg',
        desc:'Setelah unggahan menyebar, suasana kelas menjadi tidak nyaman. Beberapa siswa saling menyindir, sebagian siswa memilih diam, dan kerja sama kelompok menjadi terganggu. Guru kemudian meminta siswa menyelesaikan masalah tersebut secara tertib agar tidak menimbulkan konflik lebih lanjut.',
        question:'Apakah dampak yang muncul menunjukkan bahwa unggahan tersebut merugikan lingkungan belajar dan hubungan antarwarga sekolah?' },
      { num:7, title:'Keterangan Saksi Penyebaran Unggahan', img:'kasus 1/berkas bukti/bukti 7.jpeg',
        desc:'Saksi menyatakan bahwa unggahan tersebut sempat dibagikan ulang oleh beberapa siswa dan dibahas dalam grup kelas. Menurut saksi, beberapa komentar yang muncul membuat pihak yang disebut dalam unggahan merasa semakin tertekan. Saksi juga menyampaikan bahwa tidak semua siswa memahami konteks awal perdebatan, sehingga unggahan mudah disalahartikan dan memperkeruh suasana.',
        question:'Apakah penyebaran ulang dan komentar lanjutan memperkuat dampak negatif dari unggahan tersebut?' }
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
          <li><strong>Tentukan klaim kelompok</strong> — Apakah unggahan tersebut termasuk ujaran kebencian, kritik biasa, atau pelanggaran etika digital?</li>
          <li><strong>Pilih bukti yang paling relevan</strong> — Gunakan bukti yang benar-benar mendukung pendapat kelompokmu.</li>
          <li><strong>Jelaskan alasan</strong> — Terangkan mengapa bukti tersebut mendukung putusan.</li>
          <li><strong>Pertimbangkan nilai Pancasila</strong> — Hubungkan kasus dengan penghormatan martabat manusia, persatuan, kebijaksanaan, keadilan.</li>
          <li><strong>Gunakan dasar hukum</strong> — Aturan tentang kebebasan berpendapat, batas penggunaan hak, etika digital.</li>
          <li><strong>Rumuskan putusan</strong> — Pilih keputusan yang paling adil.</li>
          <li><strong>Berikan rekomendasi</strong> — Tuliskan tindak lanjut.</li>
        </ol>` },
      { label:'LKPD Siswa (PDF)', icon:'📄', html:`
        <h3>📄 LKPD Lembar Putusan — Siap Cetak</h3>
        <p>Gunakan lembar kerja ini untuk menulis putusan kelompokmu.</p>
        <div style="text-align:center;margin:20px 0">
          <a href="kasus 1/lembar putusan/LKPD_Lembar_Putusan_CivicCourt_Kasus_1_Siap_Cetak_Siswa.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh LKPD Siswa</a>
        </div>
        <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
          <iframe src="kasus 1/lembar putusan/LKPD_Lembar_Putusan_CivicCourt_Kasus_1_Siap_Cetak_Siswa.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
        </div>` },
      { label:'Panduan Guru (PDF)', icon:'👩‍🏫', html:`
        <h3>👩‍🏫 Panduan Penilaian Guru</h3>
        <p>Panduan ini membantu guru menilai putusan dan argumen siswa.</p>
        <div style="text-align:center;margin:20px 0">
          <a href="kasus 1/lembar putusan/Panduan_Penilaian_Guru_CivicCourt_Kasus_1.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#1a2744,#2a3d66);color:#f0d68a;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh Panduan Guru</a>
        </div>
        <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
          <iframe src="kasus 1/lembar putusan/Panduan_Penilaian_Guru_CivicCourt_Kasus_1.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
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
        <div class="content-card"><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q1" value="a"> Siswa yang menyampaikan pendapat di media sosial</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q1" value="b"> Pihak yang merasa dirugikan oleh unggahan media sosial</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q1" value="c"> Kebebasan berpendapat dan tanggung jawab dalam ruang digital</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q1" value="d"> Semua jawaban benar</label></div>
        <p><strong>Masalah utama dalam kasus ini adalah:</strong></p>
        <div class="content-card"><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q2" value="a"> Semua pendapat di media sosial pasti salah</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q2" value="b"> Kebebasan berpendapat boleh dilakukan tanpa batas</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q2" value="c"> Perlu membedakan kritik, hinaan, dan ujaran kebencian</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="k1r1q2" value="d"> Korban tidak boleh merasa dirugikan oleh unggahan orang lain</label></div>
        <p style="font-size:.85rem;color:var(--gold);font-style:italic">Diskusikan: Mengapa kelompokmu memilih jawaban tersebut? Tuliskan alasan singkat di LKPD.</p>` },
      { label:'Refleksi 2', icon:'📑', html:`
        <h3>📑 Pilih Bukti Terkuat</h3>
        <p>Dari semua bukti yang sudah diperiksa, pilih bukti yang paling memengaruhi putusan kelompokmu.</p>
        <h4>Bukti yang mendukung pihak penggugat:</h4>
        <div class="content-card"><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="1"> Bukti 1: Tangkapan Layar Unggahan Media Sosial</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="2"> Bukti 2: Komentar Lanjutan dari Pengguna Lain</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="3"> Bukti 3: Keterangan Korban atau Pihak yang Dirugikan</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="6"> Bukti 6: Dampak Unggahan terhadap Suasana Kelas</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="7"> Bukti 7: Keterangan Saksi Penyebaran Unggahan</label></div>
        <h4>Bukti yang mendukung tergugat / pertimbangan meringankan:</h4>
        <div class="content-card"><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="4"> Bukti 4: Klarifikasi Tergugat</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="5"> Bukti 5: Kronologi Awal Perdebatan</label></div>
        <div class="content-card"><h3>✍️ Lengkapi</h3><p>Bukti terkuat menurut kelompok kami adalah...</p><textarea placeholder="Tuliskan bukti terkuat dan alasannya..."></textarea></div>` },
      { label:'Refleksi 3', icon:'⚖️', html:`
        <h3>⚖️ Termometer Keadilan</h3>
        <p>Nilailah putusan kelompokmu dengan skala 1–5.</p>
        <div class="content-card"><h3>Putusan kami sudah mempertimbangkan hak kebebasan berpendapat</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk1" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk1" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk1" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk1" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk1" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah mempertimbangkan martabat dan hak pihak yang dirugikan</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk2" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk2" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk2" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk2" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk2" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah menggunakan bukti yang relevan</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk3" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk3" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk3" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk3" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk3" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah membedakan kritik, hinaan, dan ujaran kebencian</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk4" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk4" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk4" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk4" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk4" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah sesuai dengan nilai Pancasila</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk5" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk5" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk5" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk5" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk5" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah adil bagi kedua pihak</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk6" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk6" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk6" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk6" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="k1tk6" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>✍️ Kalimat Refleksi</h3><textarea placeholder="Hari ini saya belajar bahwa menggunakan media sosial harus...."></textarea></div>` },
      { label:'🏆 Badge', icon:'🏆', html:`
        <h3 style="text-align:center;font-size:1.4rem">🎉 Selamat!</h3>
        <p style="text-align:center;font-size:1.1rem">Kamu telah menyelesaikan <strong>Misi CivicCourt Kasus 1</strong>!</p>
        <div style="text-align:center;margin:24px 0;font-size:1.1rem;line-height:2">
          ✓ Membaca kasus dengan teliti<br>
          ✓ Memeriksa unggahan dan komentar secara hati-hati<br>
          ✓ Memilih bukti yang relevan<br>
          ✓ Mendengar dua pihak<br>
          ✓ Membedakan kritik dan ujaran kebencian<br>
          ✓ Menyusun alasan<br>
          ✓ Membuat putusan yang adil
        </div>
        <h4 style="text-align:center;margin:20px 0 12px">🏅 Pilih Badge Kelompokmu:</h4>
        <div class="content-card" style="text-align:center"><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k1badge" value="1"> 🔍 Ahli Bukti Digital</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k1badge" value="2"> ⚖️ Penalar Keadilan</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k1badge" value="3"> 🤝 Tim Etika Digital</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k1badge" value="4"> 🛡️ Penjaga Martabat Manusia</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="k1badge" value="5"> 📜 Pembuat Putusan Bijak</label></div>
        <div class="highlight-box">Kebebasan berpendapat adalah hak warga negara. Namun, hak tersebut harus digunakan dengan sopan, bertanggung jawab, menghormati martabat orang lain, dan berdasarkan nilai Pancasila.</div>` }
    ]
  }
};
