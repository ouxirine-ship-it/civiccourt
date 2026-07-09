// Kasus 1 Content Data
const KASUS1 = {
  materi: {
    title:'Materi Pembelajaran', icon:'📘', render:'tabs',
    tabs:[
      { label:'Capaian & Tujuan', icon:'🎯', html:`
        <h3>📌 Capaian Pembelajaran — Fase F</h3>
        <p>Peserta didik mampu menganalisis penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari, menunjukkan sikap demokratis berdasarkan UUD NRI Tahun 1945 dalam era keterbukaan informasi, serta menganalisis kasus pelanggaran hak dan pengingkaran kewajiban warga negara untuk merumuskan solusi yang adil dan bertanggung jawab.</p>
        <h4>🎯 Tujuan Pembelajaran</h4>
        <p>Setelah mengikuti pembelajaran menggunakan media CivicCourt pada kasus dugaan ujaran kebencian di media sosial, peserta didik mampu:</p>
        <ol>
          <li>Menganalisis kasus ujaran kebencian di media sosial dengan menghubungkan fakta peristiwa, kebebasan berpendapat, etika digital, hak dan kewajiban warga negara, serta nilai-nilai Pancasila.</li>
          <li>Membedakan bukti yang mendukung pihak penggugat dan pihak tergugat berdasarkan relevansi bukti, keterkaitan dengan pokok perkara, serta kekuatan alasan yang digunakan.</li>
          <li>Mengevaluasi tindakan para pihak dalam kasus berdasarkan bukti yang tersedia, dampak terhadap pihak yang dirugikan, tanggung jawab warga negara, dan dasar hukum yang berlaku.</li>
          <li>Merumuskan argumentasi berbasis bukti dalam bentuk klaim, bukti, alasan, dan sanggahan secara logis untuk mendukung posisi penggugat atau tergugat dalam simulasi sidang.</li>
          <li>Menyusun putusan atau rekomendasi penyelesaian kasus secara adil dan bertanggung jawab dengan mempertimbangkan fakta, bukti, nilai Pancasila, dasar hukum, serta kepentingan para pihak.</li>
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
        <h3>⭐ Nilai Pancasila dalam Ruang Digital</h3>
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
        <h4>Identitas Pihak</h4>
        <p>Pihak penggugat adalah perwakilan siswa yang merasa dirugikan akibat unggahan media sosial yang dibuat oleh Raka. Penggugat membawa perkara ini ke CivicCourt karena menilai unggahan tersebut berdampak pada rasa aman, kenyamanan, dan martabat kelompok siswa tertentu di lingkungan SMA Nusantara Mandiri.</p>
        <h4>Posisi Awal dalam Perkara</h4>
        <p>Penggugat menilai bahwa unggahan Raka bukan hanya bentuk kritik biasa. Menurut penggugat, unggahan tersebut telah melewati batas kebebasan berpendapat karena menggunakan kata-kata yang merendahkan dan memicu komentar negatif dari siswa lain.</p>
        <h4>Dalil Utama</h4>
        <p>Penggugat mendalilkan bahwa Raka telah menggunakan media sosial secara tidak bertanggung jawab. Unggahan tersebut diduga merugikan pihak lain, menimbulkan ejekan lanjutan, dan mengganggu hubungan sosial antarsiswa di lingkungan sekolah.</p>
        <h4>Hal yang Perlu Dibuktikan</h4>
        <p>Penggugat perlu membuktikan bahwa unggahan Raka memuat pernyataan yang merendahkan, menimbulkan dampak negatif, dan berhubungan dengan tekanan sosial yang dialami oleh pihak yang merasa dirugikan.</p>
        <h4>Arah Pembuktian</h4>
        <p>Penggugat dapat mempertimbangkan bukti yang menunjukkan isi unggahan, komentar lanjutan, penyebaran unggahan, keterangan korban, keterangan saksi, catatan guru, serta dampak yang muncul setelah unggahan tersebar.</p>`
      },
      { label:'Posisi Tergugat', icon:'🔵', html:`
        <h3>🔵 Tergugat</h3>
        <h4>Identitas Pihak</h4>
        <p>Pihak tergugat adalah Raka, siswa SMA Nusantara Mandiri yang membuat unggahan di media sosial setelah terjadi perbedaan pendapat dalam kegiatan sekolah. Raka menjadi pihak yang diminta memberikan tanggapan atas dugaan unggahan yang dianggap merugikan kelompok siswa tertentu.</p>
        <h4>Posisi Awal dalam Perkara</h4>
        <p>Tergugat menyatakan bahwa unggahan tersebut dibuat dalam keadaan emosi dan tidak dimaksudkan untuk menyerang identitas pribadi atau kelompok tertentu. Menurut tergugat, unggahan itu merupakan bentuk kekesalan terhadap situasi yang terjadi, bukan ajakan untuk membenci atau merendahkan pihak lain.</p>
        <h4>Dalil Utama</h4>
        <p>Tergugat mendalilkan bahwa unggahan tersebut tidak secara langsung menyebut nama lengkap korban atau identitas pribadi tertentu. Raka juga menyatakan bahwa ia telah menghapus unggahan, memberi klarifikasi, dan bersedia meminta maaf setelah mengetahui unggahan tersebut menimbulkan persoalan.</p>
        <h4>Hal yang Perlu Dibuktikan</h4>
        <p>Tergugat perlu membuktikan bahwa unggahan tersebut muncul dari konflik sesaat, tidak dibuat dengan niat menyebarkan kebencian, serta tidak secara langsung menargetkan pihak tertentu. Tergugat juga perlu menunjukkan adanya itikad baik setelah unggahan dipersoalkan.</p>
        <h4>Arah Pembuktian</h4>
        <p>Tergugat dapat mempertimbangkan bukti yang menunjukkan kronologi awal perdebatan, isi percakapan sebelum unggahan dibuat, klarifikasi Raka, tidak adanya penyebutan nama lengkap korban, penghapusan unggahan, permintaan maaf, keterangan saksi, serta catatan mediasi awal di sekolah.</p>`
      }
    ]
  },

  'dasar-hukum': {
    title:'Dasar Hukum dan Nilai Pancasila', icon:'⚖️', render:'tabs',
    tabs:[
      { label:'Dasar Hukum', icon:'📜', html:`
        <h3>📜 Dasar Hukum</h3>
        <p>Dasar hukum ini digunakan untuk membantu peserta didik menilai apakah unggahan Raka masih termasuk kebebasan berpendapat, pelanggaran etika digital, atau sudah mengarah pada ujaran kebencian. Peserta didik perlu menghubungkan setiap aturan dengan fakta kasus, bukti penggugat, bukti tergugat, alasan para pihak, dan dampak yang muncul setelah unggahan tersebar.</p>
        <ol>
          <li><strong>UUD NRI Tahun 1945 Pasal 28E ayat (3)</strong><br><strong>Isi Pokok:</strong> Setiap orang memiliki hak untuk berserikat, berkumpul, dan mengeluarkan pendapat. Artinya, warga negara boleh menyampaikan pikiran, kritik, atau pendapatnya.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini berkaitan dengan posisi Raka sebagai tergugat. Raka dapat menyatakan bahwa unggahannya merupakan bentuk pendapat atau kritik terhadap keadaan yang terjadi dalam kegiatan sekolah.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28J ayat (1) dan ayat (2)</strong><br><strong>Isi Pokok:</strong> Setiap orang wajib menghormati hak asasi orang lain. Dalam menggunakan hak dan kebebasannya, seseorang juga harus tunduk pada batas yang ditetapkan undang-undang, moral, keamanan, dan ketertiban umum.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini berkaitan dengan posisi penggugat. Penggugat dapat menyatakan bahwa kebebasan berpendapat tidak boleh digunakan untuk menghina, menghasut, atau merendahkan martabat siswa lain.</li>
          <li><strong>UU No. 1 Tahun 2024 tentang Perubahan Kedua atas UU ITE — Pasal 28 ayat (2)</strong><br><strong>Isi Pokok:</strong> Aturan ini berkaitan dengan larangan menyebarkan informasi elektronik yang bersifat menghasut, mengajak, atau memengaruhi orang lain sehingga menimbulkan kebencian atau permusuhan terhadap individu atau kelompok tertentu. UU No. 1 Tahun 2024 merupakan perubahan terbaru atas UU ITE, dan Pasal 28 ayat (2) juga telah diberi pemaknaan bersyarat oleh Mahkamah Konstitusi agar tidak digunakan secara terlalu luas.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini digunakan untuk menilai isi unggahan Raka, cara unggahan itu tersebar, komentar lanjutan yang muncul, serta apakah unggahan tersebut hanya berupa kritik atau sudah menimbulkan kebencian dan permusuhan.</li>
          <li><strong>UU No. 39 Tahun 1999 tentang Hak Asasi Manusia</strong><br><strong>Isi Pokok:</strong> UU ini mengatur bahwa setiap orang memiliki hak asasi, termasuk hak menyampaikan pendapat, hak atas perlindungan martabat, serta hak atas rasa aman. Namun, pelaksanaan hak tersebut tetap harus memperhatikan hak orang lain dan kepentingan bersama.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini berkaitan dengan kedua pihak. Raka memiliki hak untuk menyampaikan pendapat, tetapi pihak yang merasa dirugikan juga memiliki hak untuk dihormati martabatnya dan merasa aman di lingkungan sekolah.</li>
          <li><strong>Permendikdasmen No. 6 Tahun 2026 tentang Budaya Sekolah Aman dan Nyaman</strong><br><strong>Isi Pokok:</strong> Peraturan ini mengatur pentingnya budaya sekolah yang aman dan nyaman, termasuk pelindungan fisik, kesejahteraan psikologis, keamanan sosiokultural, serta keadaban dan keamanan digital. Peraturan ini berlaku sejak 9 Januari 2026 dan mencabut Permendikbudristek No. 46 Tahun 2023.<br><strong>Kaitan dengan Kasus:</strong> Unggahan Raka tidak hanya dilihat sebagai masalah di media sosial, tetapi juga sebagai persoalan yang berdampak pada suasana sekolah. Jika unggahan menimbulkan ejekan, rasa malu, atau ketidaknyamanan, maka sekolah perlu menjaga agar lingkungan belajar tetap aman dan nyaman.</li>
        </ol>`
      },
      { label:'Nilai Pancasila', icon:'⭐', html:`
        <h3>⭐ Nilai Pancasila dalam Kasus</h3>
        <p>Nilai Pancasila digunakan sebagai dasar pertimbangan moral dan kewarganegaraan dalam menilai perkara. Peserta didik perlu menghubungkan nilai Pancasila dengan isi unggahan Raka, dampak yang dialami penggugat, pembelaan tergugat, bukti yang tersedia, serta alasan dalam menyusun putusan.</p>
        <ol>
          <li><strong>Sila Kedua: Kemanusiaan yang Adil dan Beradab</strong><br><strong>Makna Nilai:</strong> Setiap orang harus menghormati martabat, perasaan, dan hak orang lain. Kebebasan berpendapat tetap harus disampaikan dengan cara yang beradab dan tidak merendahkan sesama.<br><strong>Kaitan dengan Kasus:</strong> Nilai ini berkaitan dengan unggahan Raka yang dianggap merendahkan kelompok siswa tertentu di SMA Nusantara Mandiri. Penggugat menilai unggahan tersebut menimbulkan rasa malu, tidak nyaman, dan memicu ejekan lanjutan dari siswa lain.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai apakah unggahan Raka masih termasuk kritik biasa atau sudah melanggar sikap beradab karena merugikan martabat pihak lain. Putusan juga perlu mempertimbangkan dampak yang dialami penggugat dan tanggung jawab Raka sebagai pengguna media sosial.</li>
          <li><strong>Sila Ketiga: Persatuan Indonesia</strong><br><strong>Makna Nilai:</strong> Setiap warga sekolah perlu menjaga hubungan baik, persatuan, dan suasana yang aman di lingkungan bersama. Perbedaan pendapat tidak boleh menimbulkan permusuhan atau perpecahan.<br><strong>Kaitan dengan Kasus:</strong> Unggahan Raka tidak hanya menjadi persoalan pribadi, tetapi juga berdampak pada hubungan sosial antarsiswa. Komentar lanjutan, penyebaran unggahan, dan perubahan suasana kelas menunjukkan bahwa masalah di media sosial dapat memengaruhi ketertiban dan keharmonisan sekolah.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu mempertimbangkan apakah tindakan Raka memperburuk hubungan antarsiswa atau masih dapat dipulihkan melalui klarifikasi, permintaan maaf, mediasi, dan penguatan etika bermedia sosial.</li>
          <li><strong>Sila Keempat: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan</strong><br><strong>Makna Nilai:</strong> Perbedaan pendapat sebaiknya diselesaikan melalui dialog, musyawarah, dan pertimbangan yang bijaksana, bukan melalui tindakan yang dapat memperluas konflik.<br><strong>Kaitan dengan Kasus:</strong> Kasus ini bermula dari perbedaan pendapat dalam kegiatan sekolah. Raka memilih menyampaikan kekesalannya melalui media sosial, sedangkan pihak penggugat merasa dirugikan. Nilai ini membantu peserta didik menilai pentingnya klarifikasi dan mediasi sebelum konflik semakin meluas.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu mempertimbangkan penyelesaian yang tidak hanya menentukan siapa yang benar atau salah, tetapi juga mendorong dialog, tanggung jawab, dan pemulihan hubungan antara Raka dan pihak yang dirugikan.</li>
          <li><strong>Sila Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia</strong><br><strong>Makna Nilai:</strong> Setiap pihak harus diperlakukan secara adil. Pihak yang dirugikan berhak memperoleh perlindungan, sedangkan pihak yang dituduh juga berhak memberikan penjelasan dan pembelaan berdasarkan bukti.<br><strong>Kaitan dengan Kasus:</strong> Penggugat memiliki hak untuk menyampaikan dampak yang dialami akibat unggahan tersebut. Di sisi lain, Raka sebagai tergugat juga memiliki hak untuk menjelaskan konteks unggahan, menunjukkan itikad baik, dan mengajukan bukti yang meringankan posisinya.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai bukti dari kedua pihak secara seimbang. Putusan harus adil bagi penggugat, tergugat, dan lingkungan sekolah, sehingga penyelesaian tidak hanya bersifat menghukum, tetapi juga mendidik dan memulihkan keadaan.</li>
        </ol>`
      }
    ]
  },

  'kartu-peran': {
    title:'Kartu Peran Sidang', icon:'🎭', render:'roles',
    roles:[
      { name:'Hakim Ketua', img:'assets/hakim.png',
        tugas:['Membuka dan menutup sidang.','Menjelaskan tata tertib sidang secara singkat.','Memberi kesempatan berbicara kepada penggugat, tergugat, saksi, dan ahli.','Memeriksa bukti yang diajukan oleh kedua pihak.','Mengajukan pertanyaan klarifikasi apabila ada keterangan yang belum jelas.','Memimpin musyawarah untuk menyusun putusan akhir.'],
        extraTitle:'Batasan Peran',
        extraText:'Hakim Ketua harus bersikap netral, tidak memihak penggugat atau tergugat, dan tidak mengambil keputusan sebelum mendengar keterangan para pihak serta memeriksa bukti yang tersedia.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Putusan akhir yang memuat pokok perkara, bukti yang dipertimbangkan, alasan putusan, dan rekomendasi penyelesaian yang adil serta bertanggung jawab.' },
      { name:'Panitera', img:'assets/panitera.png',
        tugas:['Mencatat jalannya sidang dari awal sampai akhir.','Mencatat bukti yang diajukan oleh penggugat dan tergugat.','Mencatat keterangan penting dari para pihak, saksi, dan ahli.','Mencatat klaim, alasan, dan sanggahan yang muncul selama sidang.','Membantu hakim merapikan hasil putusan.'],
        extraTitle:'Batasan Peran',
        extraText:'Panitera tidak boleh memihak salah satu pihak. Catatan harus dibuat berdasarkan fakta yang muncul dalam sidang, bukan berdasarkan pendapat pribadi.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Catatan sidang yang berisi ringkasan keterangan para pihak, daftar bukti penting, dan poin pertimbangan yang membantu hakim menyusun putusan.' },
      { name:'Penggugat', img:'assets/penggugat.png',
        tugas:['Menjelaskan alasan mengajukan perkara.','Menyampaikan dalil atau pendapat berdasarkan bukti.','Memilih bukti yang mendukung posisi penggugat.','Menghubungkan bukti dengan alasan yang logis.','Menanggapi pembelaan tergugat secara sopan.','Menyampaikan permintaan penyelesaian yang dianggap adil.'],
        extraTitle:'Batasan Peran',
        extraText:'Penggugat tidak boleh hanya menuduh. Setiap dalil harus didukung oleh bukti, alasan yang jelas, dan keterkaitan dengan pokok perkara.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Dalil penggugat yang berisi klaim, bukti pendukung, alasan, dan tanggapan terhadap pembelaan tergugat.' },
      { name:'Tergugat', img:'assets/tergugat.png',
        tugas:['Menanggapi dalil yang disampaikan oleh penggugat.','Menjelaskan kronologi atau alasan dari pihak tergugat.','Memilih bukti yang mendukung posisi tergugat.','Menyampaikan pembelaan berdasarkan bukti dan alasan yang logis.','Menjawab pertanyaan hakim dengan jelas dan sopan.','Menyampaikan bentuk penyelesaian yang dianggap adil.'],
        extraTitle:'Batasan Peran',
        extraText:'Tergugat tidak cukup hanya membantah. Setiap pembelaan harus dijelaskan dengan bukti, alasan, dan sikap bertanggung jawab.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Tanggapan tergugat yang berisi pembelaan, bukti pendukung, alasan, dan sanggahan terhadap dalil penggugat.' },
      { name:'Saksi Penggugat', img:'assets/saksi.png',
        tugas:['Menyampaikan keterangan sesuai fakta yang diketahui, dilihat, atau dialami.','Memberikan keterangan yang mendukung posisi penggugat.','Menjelaskan hubungan antara kejadian dan dampak yang muncul.','Menjawab pertanyaan hakim, penggugat, tergugat, dan ahli secara jujur.'],
        extraTitle:'Batasan Peran',
        extraText:'Saksi Penggugat tidak boleh menambah cerita di luar fakta yang diketahui. Keterangan harus disampaikan secara jujur, jelas, dan tidak berlebihan.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Keterangan saksi yang menjelaskan fakta kejadian, pihak yang terlibat, dampak yang terlihat, dan bukti yang mendukung keterangan tersebut.' },
      { name:'Saksi Tergugat', img:'assets/saksi.png',
        tugas:['Menyampaikan keterangan sesuai fakta yang diketahui, dilihat, atau dialami.','Memberikan keterangan yang mendukung atau meringankan posisi tergugat.','Menjelaskan konteks kejadian dari sudut pandang tergugat.','Menjawab pertanyaan hakim, penggugat, tergugat, dan ahli secara jujur.'],
        extraTitle:'Batasan Peran',
        extraText:'Saksi Tergugat tidak boleh mengarang pembelaan. Keterangan harus berdasarkan fakta yang diketahui dan tidak boleh bertujuan menutupi kesalahan.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Keterangan saksi yang menjelaskan fakta pendukung, konteks kejadian, dan alasan yang dapat menjadi pertimbangan bagi hakim.' },
      { name:'Ahli PPKn', img:'assets/ahli.png',
        tugas:['Menjelaskan hubungan kasus dengan nilai-nilai Pancasila.','Menjelaskan hak dan kewajiban warga negara yang berkaitan dengan perkara.','Memberi pertimbangan tentang keadilan, tanggung jawab, demokrasi, dan ketertiban.','Membantu hakim memahami perkara dari sudut pandang PPKn.','Memberi pendapat berdasarkan konsep, bukan memihak salah satu pihak.'],
        extraTitle:'Batasan Peran',
        extraText:'Ahli PPKn tidak bertugas memenangkan penggugat atau tergugat. Ahli hanya memberi pandangan keilmuan agar putusan lebih adil, rasional, dan bertanggung jawab.',
        extra2Title:'Hasil yang Harus Disiapkan',
        extra2Text:'Pendapat ahli yang berisi hubungan kasus dengan nilai Pancasila, hak dan kewajiban warga negara, dasar pertimbangan moral, serta rekomendasi penyelesaian yang sesuai dengan pembelajaran PPKn.' }
    ]
  },

  bukti: {
    title:'Bukti Kasus', icon:'📑', render:'evidence-split',
    penggugat:[
      { num:1, title:'Tangkapan Layar Unggahan Media Sosial Raka', img:'kasus 1/berkas bukti/bukti penggugat/1.jpeg',
        desc:'Bukti ini memperlihatkan unggahan akun media sosial milik Raka pada tanggal 18 Februari 2026 pukul 20.14 WIB. Unggahan tersebut berisi pernyataan yang menyinggung kelompok siswa tertentu setelah terjadi perbedaan pendapat dalam kegiatan sekolah.',
        question:'Apakah unggahan Raka ini hanya berupa kritik biasa, atau memuat kata-kata yang merendahkan dan berpotensi memicu reaksi negatif terhadap kelompok siswa tertentu?' },
      { num:2, title:'Komentar Lanjutan yang Memperkuat Ejekan', img:'kasus 1/berkas bukti/bukti penggugat/2.jpeg',
        desc:'Bukti ini memperlihatkan sejumlah komentar dari siswa lain setelah unggahan Raka tersebar di media sosial. Beberapa komentar tidak lagi membahas persoalan awal, tetapi ikut menyindir dan memperburuk penilaian terhadap kelompok yang disebut dalam unggahan.',
        question:'Apakah unggahan Raka menimbulkan dampak lanjutan berupa ejekan terbuka di media sosial dan memperluas persoalan yang awalnya hanya terjadi dalam kegiatan sekolah?' },
      { num:3, title:'Keterangan Korban atau Pihak yang Dirugikan', img:'kasus 1/berkas bukti/bukti penggugat/3.jpeg',
        desc:'Bukti ini berupa keterangan pribadi dari pihak yang merasa dirugikan setelah unggahan Raka tersebar. Dalam keterangan tersebut, korban menyampaikan bahwa ia merasa malu, tidak nyaman, dan khawatir menjadi bahan pembicaraan teman-temannya.',
        question:'Apakah keterangan korban menunjukkan adanya dampak langsung terhadap rasa aman, kenyamanan, dan martabat siswa yang merasa dirugikan akibat unggahan tersebut?' },
      { num:4, title:'Riwayat Penyebaran Unggahan di Grup Kelas', img:'kasus 1/berkas bukti/bukti penggugat/4.jpeg',
        desc:'Bukti ini memperlihatkan percakapan grup kelas yang menunjukkan bahwa unggahan Raka dibagikan ulang dan menjadi bahan pembicaraan di antara siswa. Beberapa siswa terlihat menanggapi unggahan tersebut dengan komentar yang bernada menyindir.',
        question:'Apakah unggahan Raka tidak berhenti di akun pribadinya, tetapi menyebar ke lingkungan kelas dan memperluas dampak sosial terhadap pihak yang dirugikan?' },
      { num:5, title:'Catatan Guru tentang Perubahan Suasana Kelas', img:'kasus 1/berkas bukti/bukti penggugat/5.jpeg',
        desc:'Bukti ini berupa catatan guru yang menjelaskan adanya perubahan suasana kelas setelah unggahan Raka menjadi pembicaraan. Guru mencatat bahwa beberapa siswa tampak saling menyindir, kerja kelompok terganggu, dan sebagian siswa memilih diam atau enggan berdiskusi.',
        question:'Apakah unggahan tersebut tidak hanya berdampak di media sosial, tetapi juga memengaruhi hubungan sosial dan kenyamanan belajar di kelas?' },
      { num:6, title:'Keterangan Saksi yang Melihat Dampak Unggahan', img:'kasus 1/berkas bukti/bukti penggugat/6.jpeg',
        desc:'Bukti ini berupa keterangan saksi yang melihat langsung dampak dari unggahan Raka di lingkungan sekolah. Saksi menyampaikan bahwa beberapa siswa mulai menggunakan istilah dari unggahan tersebut untuk menyindir kelompok penggugat.',
        question:'Apakah ada hubungan antara unggahan Raka dengan munculnya tekanan sosial terhadap kelompok siswa yang merasa dirugikan?' },
      { num:7, title:'Pesan Pribadi dari Korban kepada Wali Kelas', img:'kasus 1/berkas bukti/bukti penggugat/7.jpeg',
        desc:'Bukti ini memperlihatkan pesan pribadi korban kepada wali kelas pada tanggal 19 Februari 2026. Dalam pesan tersebut, korban meminta bantuan karena merasa tidak nyaman setelah nama dan kelompoknya dikaitkan dengan unggahan Raka.',
        question:'Apakah korban telah merasa terganggu dan membutuhkan perlindungan dari pihak sekolah agar persoalan tidak semakin meluas?' },
      { num:8, title:'Pernyataan Permintaan Mediasi dari Orang Tua Korban', img:'kasus 1/berkas bukti/bukti penggugat/8.jpeg',
        desc:'Bukti ini berupa pernyataan orang tua korban yang meminta pihak sekolah memfasilitasi mediasi terkait persoalan yang terjadi. Orang tua menyampaikan kekhawatiran karena anaknya menjadi bahan ejekan dan pembicaraan setelah unggahan tersebut tersebar.',
        question:'Apakah dampak unggahan tidak hanya dirasakan oleh siswa di sekolah, tetapi juga menimbulkan kekhawatiran dari keluarga korban dan memerlukan penyelesaian yang tertib?' }
    ],
    tergugat:[
      { num:1, title:'Klarifikasi Raka Setelah Unggahan Dipersoalkan', img:'kasus 1/berkas bukti/bukti tergugat/1.jpeg',
        desc:'Bukti ini menunjukkan klarifikasi Raka yang disampaikan setelah unggahannya dipersoalkan oleh pihak penggugat. Raka menyatakan bahwa unggahan tersebut dibuat dalam keadaan emosi setelah terjadi perbedaan pendapat dalam kegiatan sekolah. Raka juga menyampaikan bahwa ia tidak bermaksud menyerang identitas pribadi atau kelompok tertentu. Ia mengakui pilihan katanya kurang tepat dan bersedia meminta maaf apabila unggahannya menyinggung pihak lain.',
        question:'Apakah klarifikasi ini cukup untuk menunjukkan bahwa Raka tidak bermaksud menyebarkan kebencian?' },
      { num:2, title:'Kronologi Awal Perdebatan Sebelum Unggahan', img:'kasus 1/berkas bukti/bukti tergugat/2.jpeg',
        desc:'Bukti ini berupa catatan kronologi yang menjelaskan bahwa sebelum unggahan dibuat, terjadi perbedaan pendapat dalam pembagian tugas kegiatan sekolah. Raka merasa pendapatnya tidak didengar, sementara siswa lain menilai Raka terlalu memaksakan kehendak.',
        question:'Apakah konteks perdebatan dapat menunjukkan bahwa unggahan muncul dari konflik sesaat, bukan dari niat awal untuk menyebarkan kebencian?' },
      { num:3, title:'Isi Percakapan Sebelum Unggahan Dibuat', img:'kasus 1/berkas bukti/bukti tergugat/3.jpeg',
        desc:'Bukti ini memperlihatkan percakapan grup kelas sebelum Raka membuat unggahan. Dalam percakapan tersebut terlihat adanya ketegangan antara beberapa siswa mengenai pembagian tugas dan perbedaan pendapat tentang peran dalam kegiatan.',
        question:'Apakah percakapan ini dapat menjadi dasar bahwa unggahan Raka berkaitan dengan rasa kecewa terhadap situasi tertentu, bukan tindakan yang sejak awal dirancang untuk menyerang kelompok tertentu?' },
      { num:4, title:'Unggahan Raka Tidak Menyebut Nama Lengkap Korban', img:'kasus 1/berkas bukti/bukti tergugat/4.jpeg',
        desc:'Bukti ini memperlihatkan unggahan Raka yang menjadi pokok perkara. Dalam unggahan tersebut, Raka menggunakan istilah umum dan tidak mencantumkan nama lengkap korban atau identitas pribadi secara langsung.',
        question:'Apakah perlu dilakukan pemeriksaan lebih lanjut mengenai apakah unggahan tersebut benar-benar menargetkan individu atau kelompok tertentu secara langsung?' },
      { num:5, title:'Raka Menghapus Unggahan Setelah Ditegur', img:'kasus 1/berkas bukti/bukti tergugat/5.jpeg',
        desc:'Bukti ini memperlihatkan percakapan antara wali kelas dan Raka setelah unggahan tersebut menjadi persoalan. Dalam percakapan itu, wali kelas meminta Raka menghapus unggahan, dan Raka menyatakan bahwa unggahan sudah dihapus serta tidak akan melanjutkan persoalan tersebut.',
        question:'Apakah Raka tidak berusaha mempertahankan unggahan yang menimbulkan masalah dan bersedia menghentikan penyebaran konten setelah mendapat teguran?' },
      { num:6, title:'Permintaan Maaf Raka di Grup Kelas', img:'kasus 1/berkas bukti/bukti tergugat/6.jpeg',
        desc:'Bukti ini memperlihatkan pesan Raka di grup kelas yang berisi permintaan maaf kepada teman-teman yang merasa tersinggung. Raka menyampaikan bahwa unggahan tersebut dibuat dalam keadaan emosi dan tidak ingin masalah itu merusak hubungan pertemanan.',
        question:'Apakah permintaan maaf ini menunjukkan adanya upaya memperbaiki keadaan dan menyelesaikan konflik secara damai?' },
      { num:7, title:'Keterangan Saksi yang Mengetahui Sifat Hubungan Para Pihak', img:'kasus 1/berkas bukti/bukti tergugat/7.jpeg',
        desc:'Bukti ini berupa keterangan saksi yang menyampaikan bahwa sebelum kejadian, Raka dan beberapa siswa dari kelompok penggugat biasa berinteraksi dalam kegiatan kelas. Saksi menyatakan tidak melihat adanya permusuhan yang berlangsung lama di antara para pihak.',
        question:'Apakah kejadian tersebut lebih dekat pada konflik sesaat akibat perbedaan pendapat, bukan tindakan yang lahir dari kebencian yang sudah direncanakan?' },
      { num:8, title:'Catatan Mediasi Awal di Sekolah', img:'kasus 1/berkas bukti/bukti tergugat/8.jpeg',
        desc:'Bukti ini berupa catatan mediasi awal yang dibuat setelah unggahan Raka dipersoalkan. Dalam catatan tersebut, Raka menyatakan bersedia meminta maaf, menghapus unggahan, tidak mengulangi perbuatan serupa, dan mengikuti pembinaan dari pihak sekolah.',
        question:'Apakah Raka bersikap kooperatif selama proses klarifikasi dan apakah penyelesaian secara edukatif masih mungkin dilakukan?' }
    ]
  },

  putusan: {
    title: 'Lembar Putusan', icon: '📜', render: 'submenu',
    submenus: [
      {
        key: 'catatan-panitera',
        label: 'Lembar Catatan Panitera',
        icon: '📝',
        tabs: [
          {
            label: 'Panduan Catatan', icon: '📝', html: `
              <h3>📝 Panduan Lembar Catatan Panitera</h3>
              <p>Lembar Catatan Panitera digunakan untuk mencatat jalannya simulasi sidang CivicCourt. Panitera menuliskan identitas sidang, pokok perkara, posisi penggugat dan tergugat, bukti yang diajukan, keterangan saksi/ahli, sanggahan, serta fakta penting yang muncul selama persidangan.</p>
              <p>Lembar ini membantu hakim memahami alur sidang secara tertib sebelum menyusun putusan. Catatan yang ditulis harus berdasarkan fakta, bukti, dan keterangan yang benar-benar muncul dalam sidang.</p>
              <p>Gunakan lembar ini pada saat sidang berlangsung. File dapat diunduh pada halaman berikutnya.</p>
            `
          },
          {
            label: 'Unduh Lembar Kerja', icon: '📄', html: `
              <h3>📄 Lembar Catatan Panitera (PDF)</h3>
              <p>Klik tombol di bawah ini untuk melihat atau mengunduh Lembar Catatan Panitera.</p>
              <div style="text-align:center;margin:20px 0">
                <a href="assets/pdf/Lembar_Catatan_Panitera.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh PDF</a>
              </div>
              <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
                <iframe src="assets/pdf/Lembar_Catatan_Panitera.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
              </div>
            `
          }
        ]
      },
      {
        key: 'putusan-hakim',
        label: 'Lembar Putusan Hakim',
        icon: '⚖️',
        tabs: [
          {
            label: 'Panduan Putusan', icon: '⚖️', html: `
              <h3>⚖️ Panduan Lembar Putusan Hakim</h3>
              <p>Lembar Putusan Hakim digunakan untuk menyusun keputusan akhir dalam simulasi sidang CivicCourt. Hakim menuliskan pokok perkara, duduk perkara, bukti yang dipertimbangkan, fakta yang terbukti, dasar hukum, nilai Pancasila, pertimbangan hakim, amar putusan, dan rekomendasi tindak lanjut.</p>
              <p>Putusan harus dibuat secara adil dan bertanggung jawab dengan mempertimbangkan bukti dari penggugat dan tergugat, kepentingan para pihak, serta nilai Pancasila.</p>
              <p>Gunakan lembar ini setelah proses sidang selesai. File dapat diunduh pada halaman berikutnya.</p>
            `
          },
          {
            label: 'Unduh Lembar Kerja', icon: '📄', html: `
              <h3>📄 Lembar Putusan Hakim (PDF)</h3>
              <p>Klik tombol di bawah ini untuk melihat atau mengunduh Lembar Putusan Hakim.</p>
              <div style="text-align:center;margin:20px 0">
                <a href="assets/pdf/Lembar_Putusan_Hakim.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh PDF</a>
              </div>
              <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
                <iframe src="assets/pdf/Lembar_Putusan_Hakim.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
              </div>
            `
          }
        ]
      }
    ]
  },

  refleksi: {
    title: 'Misi Refleksi', icon: '🪞', render: 'submenu',
    submenus: [
      {
        key: 'lkpd-kasus1',
        label: 'LKPD Kasus 1',
        icon: '📄',
        tabs: [
          {
            label: 'Panduan LKPD', icon: '📝', html: `
              <h3>📝 LKPD Kasus 1</h3>
              <p>LKPD Kasus 1 digunakan untuk membantu peserta didik memahami kembali perkara unggahan media sosial Raka yang diduga menimbulkan dampak terhadap rasa aman, martabat, dan hubungan sosial antarsiswa di SMA Nusantara Mandiri.</p>
              <h4>📋 Langkah Pengerjaan LKPD:</h4>
              <ol>
                <li>Baca kembali pokok perkara Kasus 1 tentang dugaan ujaran kebencian di media sosial.</li>
                <li>Pahami posisi penggugat dan tergugat sebelum menjawab pertanyaan.</li>
                <li>Periksa bukti dari kedua pihak, seperti unggahan Raka, komentar lanjutan, keterangan korban, catatan guru, klarifikasi Raka, permintaan maaf, dan catatan mediasi.</li>
                <li>Jawab setiap pertanyaan dengan menghubungkan fakta kasus, bukti, hak dan kewajiban warga negara, etika digital, nilai Pancasila, dan dasar hukum yang relevan.</li>
                <li>Susun jawaban kelompok secara jelas, logis, dan adil, serta hindari jawaban yang hanya berdasarkan dugaan atau pendapat pribadi.</li>
              </ol>
              <h4>🛡️ Fokus Pembelajaran:</h4>
              <p>Melalui LKPD ini, peserta didik diarahkan untuk menganalisis isu ujaran kebencian di media sosial, membedakan bukti yang mendukung penggugat dan tergugat, mengevaluasi tindakan para pihak berdasarkan dampak dan tanggung jawab, menyusun argumentasi berbasis bukti, serta merumuskan rekomendasi penyelesaian yang adil bagi penggugat, tergugat, dan lingkungan sekolah.</p>
              <p style="font-style:italic;color:var(--gold-light);margin-top:10px;">Unduh LKPD pada halaman berikutnya</p>
            `
          },
          {
            label: 'Unduh LKPD', icon: '📄', html: `
              <h3>📄 LKPD Kasus 1 (PDF)</h3>
              <p>Klik tombol di bawah ini untuk melihat atau mengunduh LKPD Kasus 1.</p>
              <div style="text-align:center;margin:20px 0">
                <a href="assets/pdf/LKPD_Kasus_1.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh PDF</a>
              </div>
              <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
                <iframe src="assets/pdf/LKPD_Kasus_1.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
              </div>
            `
          }
        ]
      },
      {
        key: 'quiz-kasus1',
        label: 'Quiz Kasus 1',
        icon: '🔍',
        tabs: [
          {
            label: 'Quiz Refleksi', icon: '🔍',
            intro: {
              title: "Quiz Refleksi Kasus 1",
              subtitle: "Dugaan Ujaran Kebencian di Media Sosial",
              desc: "Quiz refleksi ini digunakan untuk menguatkan pemahaman peserta didik setelah mengikuti simulasi sidang CivicCourt. Melalui quiz ini, peserta didik diajak menalar kembali fakta kasus, bukti penggugat dan tergugat, dasar hukum, nilai Pancasila, sudut pandang para pihak, serta rekomendasi penyelesaian yang adil.",
              petunjuk: [
                "Bacalah setiap soal dengan cermat.",
                "Diskusikan jawaban secara singkat bersama kelompok.",
                "Pilih jawaban yang paling tepat berdasarkan fakta, bukti, dan alasan yang kuat.",
                "Kelompok yang menjawab benar akan memperoleh poin.",
                "Jawaban yang dipilih harus mencerminkan penalaran yang adil terhadap penggugat dan tergugat."
              ],
              fokus: [
                "Mengidentifikasi isu publik dalam kasus ujaran kebencian di media sosial.",
                "Membedakan bukti yang mendukung penggugat dan tergugat.",
                "Mengevaluasi tindakan para pihak berdasarkan bukti, dampak, tanggung jawab, dan dasar hukum.",
                "Menyusun argumentasi berbasis klaim, bukti, alasan, dan sanggahan.",
                "Menentukan putusan atau rekomendasi penyelesaian yang adil dan bertanggung jawab."
              ],
              note: "Ingat: dalam CivicCourt, jawaban yang baik bukan hanya jawaban yang cepat, tetapi jawaban yang mampu menunjukkan hubungan antara kasus, bukti, alasan, hukum, nilai Pancasila, dan keadilan bagi para pihak."
            },
            quiz: [
              {
                question: "Dalam sidang, penggugat menyatakan bahwa unggahan Raka telah menimbulkan rasa malu, tidak nyaman, dan memicu ejekan lanjutan di lingkungan sekolah. Tergugat menyatakan bahwa unggahan tersebut dibuat karena emosi sesaat dan tidak menyebut nama lengkap korban. Penilaian yang paling tepat berdasarkan evidence-based argumentation adalah ....",
                options: [
                  "penggugat pasti benar karena ada pihak yang merasa dirugikan",
                  "tergugat pasti benar karena unggahan tidak menyebut nama lengkap korban",
                  "hakim perlu menilai isi unggahan, dampak yang muncul, konteks sebelum unggahan, serta bukti dari kedua pihak sebelum membuat putusan",
                  "hakim cukup melihat apakah Raka sudah meminta maaf atau belum"
                ],
                answer: "C"
              },
              {
                question: "Bukti berupa komentar lanjutan dari siswa lain dan catatan guru tentang perubahan suasana kelas paling kuat digunakan untuk menunjukkan bahwa ....",
                options: [
                  "semua siswa ikut menyebarkan ujaran kebencian",
                  "unggahan Raka berdampak lebih luas pada hubungan sosial di lingkungan sekolah",
                  "Raka sejak awal berniat menyerang korban secara langsung",
                  "pihak sekolah tidak mampu menyelesaikan masalah antarsiswa"
                ],
                answer: "B"
              },
              {
                question: "Dalam menilai apakah unggahan Raka termasuk kebebasan berpendapat atau sudah melewati batas, pertimbangan yang paling sesuai dengan UUD 1945 Pasal 28E dan Pasal 28J adalah ....",
                options: [
                  "setiap pendapat di media sosial selalu dilindungi tanpa batas",
                  "kebebasan berpendapat boleh digunakan selama tidak mendapat teguran dari guru",
                  "hak berpendapat tetap harus menghormati hak, martabat, rasa aman, dan ketertiban orang lain",
                  "unggahan di luar jam sekolah tidak dapat dikaitkan dengan tanggung jawab warga sekolah"
                ],
                answer: "C"
              },
              {
                question: "Manakah pasangan bukti yang paling seimbang untuk dipertimbangkan hakim sebelum menyusun putusan?",
                options: [
                  "unggahan utama Raka dan komentar lanjutan siswa lain saja",
                  "keterangan korban dan permintaan mediasi orang tua saja",
                  "keterangan korban, catatan guru, klarifikasi Raka, dan bukti penghapusan unggahan",
                  "permintaan maaf Raka dan catatan mediasi saja"
                ],
                answer: "C"
              },
              {
                question: "Jika hakim menyatakan bahwa tindakan Raka tidak boleh dibiarkan, tetapi juga mempertimbangkan bahwa Raka telah menghapus unggahan dan menyampaikan permintaan maaf, maka putusan yang paling adil adalah ....",
                options: [
                  "Raka dinyatakan sepenuhnya benar karena sudah meminta maaf",
                  "Raka tetap diminta bertanggung jawab melalui klarifikasi, mediasi, permintaan maaf, dan pembinaan etika digital",
                  "penggugat diminta menghentikan keberatan karena masalah sudah selesai",
                  "pihak sekolah cukup menghapus bukti agar konflik tidak meluas"
                ],
                answer: "B"
              },
              {
                question: "Sebuah kelompok menyusun argumen:<br>“Raka perlu bertanggung jawab karena unggahannya memicu komentar lanjutan, membuat korban merasa tidak nyaman, dan mengganggu suasana kelas. Namun, hakim tetap perlu mempertimbangkan bahwa Raka menghapus unggahan dan memberi klarifikasi.”<br>Argumen tersebut kuat karena ....",
                options: [
                  "hanya membela pihak penggugat",
                  "hanya membela pihak tergugat",
                  "memuat klaim, bukti, alasan, dan pertimbangan terhadap sanggahan pihak lain",
                  "menghindari penggunaan bukti agar tidak menyinggung pihak mana pun"
                ],
                answer: "C"
              },
              {
                question: "Dalam Kasus 1, nilai Sila Kedua Pancasila paling tepat digunakan untuk menilai ....",
                options: [
                  "apakah Raka memiliki banyak pengikut di media sosial",
                  "apakah unggahan dan komentar yang muncul tetap menghormati martabat serta perasaan pihak lain",
                  "apakah sekolah memiliki aturan penggunaan ponsel",
                  "apakah semua siswa wajib aktif di media sosial"
                ],
                answer: "B"
              },
              {
                question: "Bukti bahwa unggahan Raka tidak menyebut nama lengkap korban dapat digunakan oleh tergugat untuk ....",
                options: [
                  "membuktikan bahwa unggahan tersebut pasti tidak merugikan siapa pun",
                  "menunjukkan bahwa masih ada ruang untuk menilai konteks dan sasaran unggahan secara lebih hati-hati",
                  "menghapus seluruh dampak yang dialami penggugat",
                  "membuktikan bahwa komentar lanjutan siswa lain tidak pernah terjadi"
                ],
                answer: "B"
              },
              {
                question: "Dalam Lembar Putusan Hakim, bagian fakta yang terbukti dalam sidang seharusnya berisi ....",
                options: [
                  "semua pendapat yang paling disukai oleh hakim",
                  "dugaan yang belum diperiksa tetapi dianggap benar oleh mayoritas siswa",
                  "peristiwa atau keadaan yang didukung oleh bukti, keterangan pihak, saksi, atau catatan selama sidang",
                  "kesimpulan akhir tanpa perlu menyebut dasar bukti"
                ],
                answer: "C"
              },
              {
                question: "Apabila hakim ingin menyusun amar putusan yang sesuai dengan CivicCourt, maka keputusan akhir sebaiknya ....",
                options: [
                  "hanya menyatakan pihak yang menang dan kalah",
                  "langsung memberi hukuman tanpa menjelaskan bukti dan dasar pertimbangan",
                  "memuat keputusan, alasan, bukti yang dipertimbangkan, dasar hukum, nilai Pancasila, dan rekomendasi tindak lanjut",
                  "hanya menuliskan bahwa kedua pihak harus saling memaafkan"
                ],
                answer: "C"
              }
            ],
            outro: {
              title: "Misi Kasus 1 Selesai",
              subtitle: "Dugaan Ujaran Kebencian di Media Sosial",
              desc: "Selamat! Kalian telah menyelesaikan misi simulasi CivicCourt Kasus 1. Kalian sudah mengikuti proses persidangan, menelaah bukti dari pihak penggugat dan tergugat, menilai tindakan para pihak, serta menggunakan alasan yang logis untuk memahami persoalan secara adil. Kerja sama, ketelitian, dan keberanian kalian dalam menyampaikan pendapat menjadi bagian penting dari proses belajar sebagai warga negara yang kritis dan bertanggung jawab.",
              moral: "Melalui kasus ini, kalian belajar bahwa kebebasan berpendapat harus digunakan dengan bijak, tetap menghormati martabat orang lain, serta mempertimbangkan dampak dari setiap tindakan di ruang digital.<br><br><strong>Terima kasih sudah menyelesaikan misi ini dengan baik. Bersiaplah untuk melanjutkan ke kasus berikutnya!</strong>"
            }
          }
        ]
      }
    ]
  }
};
