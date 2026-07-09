// Kasus 2 Content Data
const KASUS2 = {
  materi: {
    title:'Materi Pembelajaran', icon:'📘', render:'tabs',
    tabs:[
      { label:'Capaian & Tujuan', icon:'🎯', html:`
        <h3>📌 Capaian Pembelajaran — Fase F</h3>
        <p>Peserta didik mampu menganalisis penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari, menunjukkan sikap demokratis berdasarkan UUD NRI Tahun 1945, serta menganalisis masalah hak dan kewajiban warga negara untuk merumuskan solusi yang adil dan bertanggung jawab.</p>
        <h4>🎯 Tujuan Pembelajaran</h4>
        <p>Setelah mengikuti pembelajaran menggunakan media CivicCourt pada kasus dugaan penyalahgunaan dana kegiatan sekolah, peserta didik mampu:</p>
        <ol>
          <li>Menganalisis permasalahan pengelolaan dana kegiatan sekolah dengan menghubungkan fakta kasus, hak dan kewajiban warga sekolah, nilai kejujuran, transparansi, akuntabilitas, serta tanggung jawab berdasarkan nilai-nilai Pancasila.</li>
          <li>Membedakan bukti yang mendukung pihak penggugat dan pihak tergugat berdasarkan kesesuaian data, kelengkapan dokumen, relevansi bukti, serta keterkaitannya dengan pokok perkara.</li>
          <li>Mengevaluasi tindakan ketua panitia, bendahara OSIS, dan pihak terkait berdasarkan bukti yang tersedia, prinsip tanggung jawab, keterbukaan laporan, keadilan, serta kepentingan bersama warga sekolah.</li>
          <li>Merumuskan argumentasi berbasis bukti dalam bentuk klaim, bukti, alasan, dan sanggahan secara logis untuk menjelaskan apakah perbedaan laporan kegiatan menunjukkan dugaan penyalahgunaan dana atau kesalahan administrasi.</li>
          <li>Menyusun putusan atau rekomendasi penyelesaian kasus secara adil dan bertanggung jawab dengan mempertimbangkan fakta, bukti, nilai Pancasila, prinsip transparansi, akuntabilitas, serta hak dan kewajiban para pihak.</li>
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
        <h4>Identitas Pihak</h4>
        <p>Pihak penggugat adalah Perwakilan Peserta Didik dan Bendahara OSIS SMA Nusantara Mandiri. Penggugat mengajukan keberatan terhadap laporan pertanggungjawaban kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS karena terdapat perbedaan antara laporan kegiatan, nota pembelian konsumsi, daftar hadir peserta, dan sisa dana yang belum dijelaskan secara terbuka.</p>
        <h4>Posisi Awal dalam Perkara</h4>
        <p>Penggugat menilai bahwa laporan pertanggungjawaban kegiatan belum disusun secara benar dan transparan. Perbedaan jumlah konsumsi yang tertulis 100 paket, sedangkan nota pembelian menunjukkan 60 paket dan daftar hadir mencatat 58 peserta, dianggap perlu diperiksa melalui bukti yang tersedia.</p>
        <h4>Dalil Utama</h4>
        <p>Penggugat mendalilkan bahwa ketua panitia diduga belum mengelola dana kegiatan secara transparan dan akuntabel. Penggugat juga menilai bahwa adanya kekurangan bukti pengeluaran dan dugaan sisa dana sekitar Rp. 500.000 menunjukkan bahwa laporan kegiatan masih perlu dipertanggungjawabkan secara lebih jelas.</p>
        <h4>Hal yang Perlu Dibuktikan</h4>
        <p>Penggugat perlu membuktikan bahwa terdapat ketidaksesuaian antara laporan pertanggungjawaban, bukti transaksi, jumlah peserta yang hadir, dan catatan keuangan kegiatan. Penggugat juga perlu menunjukkan bahwa ketidaksesuaian tersebut berdampak pada kepercayaan warga sekolah terhadap pengelolaan dana bersama.</p>
        <h4>Arah Pembuktian</h4>
        <p>Penggugat dapat mempertimbangkan bukti yang menunjukkan laporan pertanggungjawaban kegiatan, nota asli konsumsi, daftar hadir peserta, rekapitulasi dana, catatan bendahara OSIS, percakapan dengan ketua panitia, keterangan panitia konsumsi, serta catatan guru pembina OSIS mengenai ketidaksesuaian laporan.</p>`
      },
      { label:'Posisi Tergugat', icon:'🔵', html:`
        <h3>🔵 Tergugat</h3>
        <h4>Identitas Pihak</h4>
        <p>Pihak tergugat adalah Ketua Panitia Kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS di SMA Nusantara Mandiri. Tergugat menjadi pihak yang diminta memberikan tanggapan atas dugaan ketidaksesuaian laporan pertanggungjawaban dana kegiatan.</p>
        <h4>Posisi Awal dalam Perkara</h4>
        <p>Tergugat menyatakan bahwa perbedaan data dalam laporan bukan terjadi karena niat menyalahgunakan dana, melainkan karena kesalahan administrasi dan laporan yang belum diperbarui sesuai kondisi akhir kegiatan.</p>
        <h4>Dalil Utama</h4>
        <p>Tergugat mendalilkan bahwa angka 100 peserta berasal dari rencana awal kegiatan, sedangkan jumlah konsumsi kemudian disesuaikan menjadi 60 paket karena peserta yang hadir berkurang. Tergugat juga menyatakan bahwa sisa dana sekitar Rp500.000 belum disetorkan karena laporan akhir masih dalam proses pemeriksaan.</p>
        <h4>Hal yang Perlu Dibuktikan</h4>
        <p>Tergugat perlu membuktikan bahwa perbedaan laporan terjadi karena perubahan jumlah peserta, kelalaian pencatatan, dan proses administrasi yang belum selesai. Tergugat juga perlu menunjukkan bahwa dana kegiatan tidak digunakan untuk kepentingan pribadi dan masih dapat dipertanggungjawabkan.</p>
        <h4>Arah Pembuktian</h4>
        <p>Tergugat dapat mempertimbangkan bukti yang menunjukkan proposal awal kegiatan, catatan revisi jumlah peserta, percakapan dengan penyedia konsumsi, catatan sisa dana, bukti pengeluaran tambahan, keterangan penyedia konsumsi, keterangan anggota panitia, serta catatan klarifikasi awal dengan guru pembina OSIS.</p>`
      }
    ]
  },

  'dasar-hukum': {
    title:'Dasar Hukum dan Nilai Pancasila', icon:'⚖️', render:'tabs',
    tabs:[
      { label:'Dasar Hukum', icon:'📜', html:`
        <h3>📜 Dasar Hukum</h3>
        <p>Dasar hukum ini digunakan untuk menilai apakah laporan dana kegiatan OSIS sudah dibuat secara jujur, transparan, dan dapat dipertanggungjawabkan. Peserta didik perlu menghubungkan aturan ini dengan bukti penggugat, bukti tergugat, posisi ketua panitia, keterangan bendahara OSIS, dan data keuangan yang tersedia.</p>
        <ol>
          <li><strong>UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional Pasal 48 ayat (1)</strong><br><strong>Isi Pokok:</strong> Pengelolaan dana pendidikan harus berdasarkan prinsip keadilan, efisiensi, transparansi, dan akuntabilitas publik. Artinya, setiap dana yang digunakan dalam kegiatan pendidikan harus jelas sumbernya, jelas penggunaannya, dan dapat diperiksa kembali.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini digunakan untuk menilai apakah dana kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS sudah dikelola secara terbuka. Perbedaan antara laporan konsumsi 100 paket, nota asli 60 paket, dan daftar hadir 58 peserta perlu diperiksa berdasarkan prinsip transparansi dan akuntabilitas.</li>
          <li><strong>Permendiknas No. 39 Tahun 2008 tentang Pembinaan Kesiswaan Pasal 3 dan Pasal 6</strong><br><strong>Isi Pokok:</strong> Pembinaan kesiswaan dilaksanakan melalui kegiatan ekstrakurikuler dan kokurikuler. Pendanaan pembinaan kesiswaan di sekolah dapat dibebankan pada APBS serta sumber lain yang tidak mengikat.<br><strong>Kaitan dengan Kasus:</strong> Kegiatan OSIS termasuk bagian dari pembinaan kesiswaan. Karena itu, dana kegiatan yang digunakan oleh panitia harus dikelola dengan tertib, dicatat dengan benar, dan dipertanggungjawabkan kepada warga sekolah.</li>
          <li><strong>Permendikbud No. 75 Tahun 2016 tentang Komite Sekolah Pasal 10 ayat (2)</strong><br><strong>Isi Pokok:</strong> Penggalangan dana pendidikan dapat berbentuk bantuan atau sumbangan, bukan pungutan. Artinya, sumbangan dari orang tua atau masyarakat harus digunakan sesuai tujuan dan tidak boleh dikelola secara sembarangan.<br><strong>Kaitan dengan Kasus:</strong> Dalam kasus ini, dana kegiatan berasal dari dana sekolah dan sumbangan sukarela orang tua. Karena ada unsur kepercayaan dari warga sekolah, panitia wajib menjelaskan penggunaan dana, bukti pengeluaran, dan dugaan sisa dana sekitar Rp500.000 secara terbuka.</li>
          <li><strong>Permendikdasmen No. 8 Tahun 2026 tentang Petunjuk Teknis Pengelolaan Dana BOSP</strong><br><strong>Isi Pokok:</strong> Peraturan ini mengatur pengelolaan Dana Bantuan Operasional Satuan Pendidikan, termasuk penerima dana, penyaluran dana, penggunaan dana, dan pengelolaan dana. Prinsip penting yang dapat diambil adalah dana sekolah harus dikelola secara tertib, efektif, efisien, akuntabel, dan transparan.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini dapat digunakan sebagai acuan prinsip pengelolaan dana sekolah. Peserta didik dapat menilai apakah laporan panitia sudah sesuai dengan bukti transaksi, daftar hadir, dan catatan bendahara, atau masih perlu diperbaiki agar lebih akuntabel.</li>
          <li><strong>UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi Pasal 3</strong><br><strong>Isi Pokok:</strong> Pasal ini mengatur bahwa penyalahgunaan kewenangan untuk menguntungkan diri sendiri, orang lain, atau korporasi yang dapat merugikan keuangan negara termasuk persoalan hukum serius. Dalam pembelajaran ini, aturan tersebut digunakan sebagai pertimbangan nilai antikorupsi, bukan untuk langsung menyatakan pihak tertentu bersalah.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini membantu peserta didik memahami bahwa pengelolaan dana bersama tidak boleh digunakan untuk kepentingan pribadi. Namun, peserta didik tetap harus membedakan antara kesalahan administrasi, laporan yang belum diperbaiki, dan dugaan penyalahgunaan dana berdasarkan bukti yang tersedia.</li>
        </ol>`
      },
      { label:'Nilai Pancasila', icon:'⭐', html:`
        <h3>⭐ Nilai Pancasila dalam Kasus</h3>
        <p>Nilai Pancasila digunakan sebagai pertimbangan moral dan kewarganegaraan dalam menilai pengelolaan dana kegiatan sekolah. Peserta didik perlu menghubungkan nilai Pancasila dengan laporan pertanggungjawaban, bukti keuangan, keterangan para pihak, serta alasan penggugat dan tergugat sebelum menyusun putusan yang adil.</p>
        <ol>
          <li><strong>Sila Pertama: Ketuhanan Yang Maha Esa</strong><br><strong>Makna Nilai:</strong> Sila ini mengajarkan pentingnya kejujuran, amanah, dan tanggung jawab moral dalam menjalankan tugas. Setiap orang yang diberi kepercayaan harus mengelola tanggung jawabnya dengan benar.<br><strong>Kaitan dengan Kasus:</strong> Dalam kasus ini, ketua panitia dipercaya mengelola dana kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS. Karena dana tersebut menyangkut kepentingan bersama, penggunaannya harus dicatat dan dijelaskan secara jujur.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai apakah ketua panitia sudah menunjukkan sikap jujur dan bertanggung jawab dalam menjelaskan perbedaan antara laporan konsumsi 100 paket, nota asli 60 paket, daftar hadir 58 peserta, dan dugaan sisa dana Rp500.000.</li>
          <li><strong>Sila Kedua: Kemanusiaan yang Adil dan Beradab</strong><br><strong>Makna Nilai:</strong> Sila ini menekankan sikap adil, menghargai hak orang lain, dan tidak merugikan pihak yang telah memberi kepercayaan.<br><strong>Kaitan dengan Kasus:</strong> Penggugat, yaitu Perwakilan Peserta Didik dan Bendahara OSIS, merasa perlu meminta kejelasan karena laporan dana kegiatan belum sesuai dengan beberapa bukti yang tersedia. Di sisi lain, tergugat juga berhak memberikan penjelasan atas perbedaan data tersebut.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai perkara secara adil, tidak langsung menuduh tergugat bersalah, tetapi juga tidak mengabaikan keberatan penggugat. Semua pihak harus dinilai berdasarkan bukti, keterangan, dan alasan yang dapat dipertanggungjawabkan.</li>
          <li><strong>Sila Keempat: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan</strong><br><strong>Makna Nilai:</strong> Sila ini mengajarkan bahwa masalah bersama sebaiknya diselesaikan melalui musyawarah, klarifikasi, dan pertimbangan yang bijaksana.<br><strong>Kaitan dengan Kasus:</strong> Permasalahan laporan dana kegiatan tidak cukup diselesaikan dengan saling menuduh. Penggugat dan tergugat perlu menjelaskan bukti masing-masing, seperti laporan kegiatan, nota pembelian, daftar hadir, catatan bendahara, dan keterangan panitia.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu mempertimbangkan apakah penyelesaian terbaik adalah meminta klarifikasi lanjutan, perbaikan laporan pertanggungjawaban, pengembalian sisa dana jika terbukti ada, atau pembinaan agar pengelolaan dana OSIS lebih tertib.</li>
          <li><strong>Sila Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia</strong><br><strong>Makna Nilai:</strong> Sila ini menekankan keadilan dalam penggunaan sesuatu yang menjadi kepentingan bersama. Dana kegiatan sekolah harus digunakan sesuai tujuan dan tidak boleh menguntungkan pihak tertentu secara tidak wajar.<br><strong>Kaitan dengan Kasus:</strong> Dana sebesar Rp5.000.000 digunakan untuk kegiatan OSIS yang melibatkan banyak siswa. Karena itu, setiap penggunaan dana harus jelas, terbuka, dan sesuai dengan kebutuhan kegiatan.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai apakah dana kegiatan benar-benar digunakan untuk kepentingan bersama atau terdapat sisa dana dan pengeluaran yang belum dijelaskan. Putusan harus memberi keadilan bagi peserta didik, bendahara OSIS, ketua panitia, dan warga sekolah.</li>
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
      { num:1, title:'Laporan Pertanggungjawaban Kegiatan', img:'kasus 2/berkas bukti/bukti penggugat/1.jpeg',
        desc:'Bukti ini memperlihatkan laporan pertanggungjawaban kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS yang disusun setelah kegiatan selesai dilaksanakan. Dalam laporan tersebut, bagian konsumsi peserta dicatat sebanyak 100 paket.',
        question:'Apakah laporan pertanggungjawaban ini sesuai dengan bukti pembelian dan jumlah peserta yang hadir pada saat kegiatan berlangsung?' },
      { num:2, title:'Nota Asli Pembelian Konsumsi', img:'kasus 2/berkas bukti/bukti penggugat/2.jpeg',
        desc:'Bukti ini berupa nota asli dari penyedia konsumsi yang menunjukkan pembelian sebanyak 60 paket konsumsi. Nota tersebut menjadi pembanding terhadap laporan pertanggungjawaban yang mencatat konsumsi sebanyak 100 paket.',
        question:'Mengapa terdapat selisih jumlah konsumsi antara laporan panitia dan bukti transaksi yang diterbitkan oleh penyedia konsumsi?' },
      { num:3, title:'Daftar Hadir Peserta Kegiatan', img:'kasus 2/berkas bukti/bukti penggugat/3.jpeg',
        desc:'Bukti ini memperlihatkan daftar hadir peserta kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS. Dari daftar tersebut, peserta yang hadir tercatat sebanyak 58 orang.',
        question:'Apakah laporan konsumsi sebanyak 100 paket perlu diperiksa kembali, mengingat jumlah peserta yang hadir tidak sebanding dengan jumlah yang tercatat?',
        extraImg:'kasus 2/berkas bukti/bukti penggugat/lanjutan bukti 3.jpeg' },
      { num:4, title:'Rekapitulasi Dana Kegiatan Rp5.000.000', img:'kasus 2/berkas bukti/bukti penggugat/4.jpeg',
        desc:'Bukti ini memperlihatkan rekapitulasi dana kegiatan dengan total dana sebesar Rp5.000.000 yang berasal dari dana kegiatan sekolah dan sumbangan sukarela orang tua. Dalam rekapitulasi tersebut terdapat catatan mengenai beberapa pengeluaran yang belum disertai bukti lengkap serta sisa dana sekitar Rp500.000.',
        question:'Apakah pengelolaan dana kegiatan sudah dijelaskan secara terbuka dan masih memerlukan pertanggungjawaban administrasi yang lebih rinci?' },
      { num:5, title:'Catatan Bendahara OSIS tentang Kekurangan Bukti Pengeluaran', img:'kasus 2/berkas bukti/bukti penggugat/5.jpeg',
        desc:'Bukti ini berupa catatan bendahara OSIS setelah memeriksa laporan pertanggungjawaban kegiatan. Dalam catatan tersebut, bendahara mencatat adanya kekurangan bukti pengeluaran serta perbedaan antara laporan konsumsi, nota pembelian, dan jumlah peserta yang hadir.',
        question:'Apakah persoalan dalam laporan tidak hanya berkaitan dengan perbedaan angka, tetapi juga menyangkut kelengkapan dokumen dan keterbukaan pengelolaan dana kegiatan?' },
      { num:6, title:'Percakapan Bendahara OSIS dengan Ketua Panitia', img:'kasus 2/berkas bukti/bukti penggugat/6.jpeg',
        desc:'Bukti ini memperlihatkan percakapan antara bendahara OSIS dan ketua panitia setelah laporan pertanggungjawaban diperiksa. Dalam percakapan tersebut, bendahara meminta penjelasan mengenai perbedaan jumlah konsumsi dan sisa dana yang belum dijelaskan secara rinci.',
        question:'Apakah pada saat laporan diserahkan, ketua panitia sudah dapat memberikan penjelasan lengkap mengenai selisih data?' },
      { num:7, title:'Keterangan Saksi Panitia Konsumsi', img:'kasus 2/berkas bukti/bukti penggugat/7.jpeg',
        desc:'Bukti ini berupa keterangan dari panitia konsumsi yang menyatakan bahwa konsumsi yang diterima pada hari kegiatan berjumlah sekitar 60 paket. Saksi juga menyampaikan bahwa tidak ada tambahan pengiriman konsumsi dalam jumlah besar setelah kegiatan dimulai.',
        question:'Apakah keterangan ini memperkuat bukti nota konsumsi dan daftar hadir peserta bahwa jumlah 100 paket dalam laporan tidak sesuai?' },
      { num:8, title:'Catatan Guru Pembina OSIS tentang Ketidaksesuaian Laporan', img:'kasus 2/berkas bukti/bukti penggugat/8.jpeg',
        desc:'Bukti ini berupa catatan dari guru pembina OSIS setelah melakukan pemeriksaan terhadap laporan kegiatan. Guru pembina mencatat adanya ketidaksesuaian antara laporan pertanggungjawaban, nota konsumsi, daftar hadir, dan penjelasan awal dari panitia.',
        question:'Apakah laporan kegiatan masih memerlukan perbaikan, terutama pada bagian jumlah konsumsi, bukti pengeluaran, dan penjelasan sisa dana?' }
    ],
    tergugat:[
      { num:1, title:'Proposal Awal Kegiatan yang Menargetkan 100 Peserta', img:'kasus 2/berkas bukti/bukti tergugat/1.jpeg',
        desc:'Bukti ini memperlihatkan proposal awal kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS. Dalam proposal tersebut, jumlah peserta direncanakan sebanyak 100 orang, termasuk peserta utama, panitia, perwakilan kelas, dan tamu undangan.',
        question:'Apakah angka 100 peserta dalam laporan memiliki dasar dari rencana awal kegiatan, dan perbedaan yang muncul dapat dijelaskan sebagai data yang belum disesuaikan?' },
      { num:2, title:'Catatan Revisi Jumlah Peserta Sebelum Kegiatan', img:'kasus 2/berkas bukti/bukti tergugat/2.jpeg',
        desc:'Bukti ini memperlihatkan catatan panitia mengenai perubahan jumlah peserta sebelum kegiatan dilaksanakan. Dalam catatan tersebut, jumlah peserta yang semula direncanakan sebanyak 100 orang direvisi karena beberapa perwakilan kelas dan tamu undangan berhalangan hadir.',
        question:'Apakah perbedaan antara rencana awal dan realisasi dapat dipandang sebagai kesalahan administrasi yang belum diperbaiki dalam laporan akhir?' },
      { num:3, title:'Percakapan Ketua Panitia dengan Penyedia Konsumsi', img:'kasus 2/berkas bukti/bukti tergugat/3.jpeg',
        desc:'Bukti ini memperlihatkan percakapan antara ketua panitia dan penyedia konsumsi. Dalam percakapan tersebut, ketua panitia meminta agar pesanan konsumsi disesuaikan menjadi 60 paket karena jumlah peserta yang hadir diperkirakan berkurang.',
        question:'Apakah selisih angka dalam laporan dapat dijelaskan sebagai data yang belum diperbarui sesuai pesanan akhir kepada penyedia konsumsi?' },
      { num:4, title:'Catatan Sisa Dana yang Belum Disetorkan', img:'kasus 2/berkas bukti/bukti tergugat/4.jpeg',
        desc:'Bukti ini berupa catatan sementara dari ketua panitia mengenai sisa dana kegiatan sekitar Rp500.000. Dalam catatan tersebut dijelaskan bahwa dana belum disetorkan kembali karena laporan akhir masih dalam proses pemeriksaan administrasi.',
        question:'Apakah sisa dana tersebut tidak hilang dan tidak digunakan untuk kepentingan pribadi, melainkan masih menunggu penyelesaian pemeriksaan laporan?' },
      { num:5, title:'Bukti Pengeluaran Tambahan Kegiatan', img:'kasus 2/berkas bukti/bukti tergugat/5.jpeg',
        desc:'Bukti ini memperlihatkan beberapa nota kecil untuk kebutuhan tambahan kegiatan, seperti fotokopi materi, sertifikat peserta, air mineral, spidol, map, dan perlengkapan administrasi lainnya.',
        question:'Apakah sebagian dana kegiatan digunakan untuk kebutuhan nyata selama pelaksanaan, meskipun beberapa pengeluaran belum tersusun rapi dalam laporan?' },
      { num:6, title:'Keterangan Penyedia Konsumsi', img:'kasus 2/berkas bukti/bukti tergugat/6.jpeg',
        desc:'Bukti ini berupa keterangan dari penyedia konsumsi yang menyatakan bahwa panitia hanya memesan dan membayar 60 paket konsumsi. Penyedia konsumsi juga menyatakan tidak pernah menerbitkan nota atau pesanan sebanyak 100 paket untuk kegiatan tersebut.',
        question:'Apakah transaksi konsumsi yang sebenarnya sesuai dengan nota asli, sehingga perbedaan dalam laporan lebih mengarah pada kesalahan pencatatan?' },
      { num:7, title:'Keterangan Anggota Panitia tentang Proses Penyusunan LPJ', img:'kasus 2/berkas bukti/bukti tergugat/7.jpeg',
        desc:'Bukti ini berupa keterangan anggota panitia yang ikut membantu menyusun laporan pertanggungjawaban kegiatan. Dalam keterangan tersebut dijelaskan bahwa laporan dibuat terburu-buru setelah kegiatan selesai dan beberapa data masih diambil dari rancangan awal.',
        question:'Apakah kesalahan angka dalam laporan terjadi karena kelalaian administrasi dan kurangnya pengecekan akhir, bukan karena niat sengaja?' },
      { num:8, title:'Catatan Klarifikasi Awal dengan Guru Pembina OSIS', img:'kasus 2/berkas bukti/bukti tergugat/8.jpeg',
        desc:'Bukti ini memperlihatkan catatan klarifikasi awal antara ketua panitia, bendahara OSIS, dan guru pembina OSIS. Dalam catatan tersebut, ketua panitia menyatakan bersedia memperbaiki laporan, melengkapi bukti pengeluaran, dan mengembalikan sisa dana apabila masih ada setelah seluruh pengeluaran dihitung.',
        question:'Apakah ketua panitia bersikap kooperatif selama proses klarifikasi dan apakah penyelesaian secara edukatif masih mungkin dilakukan?' }
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
        key: 'lkpd-kasus2',
        label: 'LKPD Kasus 2',
        icon: '📄',
        tabs: [
          {
            label: 'Panduan LKPD', icon: '📝', html: `
              <h3>📝 LKPD Kasus 2</h3>
              <p>LKPD Kasus 2 digunakan untuk membantu peserta didik menalar kembali perkara pengelolaan dana kegiatan sekolah pada kegiatan Forum Kepemimpinan dan Anti-Korupsi OSIS. Melalui LKPD ini, peserta didik belajar menilai apakah perbedaan laporan lebih mengarah pada dugaan penyalahgunaan dana atau kesalahan administrasi.</p>
              <h4>📋 Langkah Pengerjaan LKPD:</h4>
              <ol>
                <li>Baca kembali pokok perkara Kasus 2 tentang dugaan penyalahgunaan dana kegiatan sekolah.</li>
                <li>Pahami posisi penggugat, yaitu perwakilan peserta didik dan bendahara OSIS, serta posisi tergugat, yaitu ketua panitia kegiatan.</li>
                <li>Bandingkan bukti dari kedua pihak, seperti LPJ kegiatan, nota asli, daftar hadir, rekap dana, catatan bendahara, revisi jumlah peserta, bukti pengeluaran tambahan, dan klarifikasi panitia.</li>
                <li>Jawab setiap pertanyaan dengan memperhatikan kesesuaian data, kelengkapan dokumen, transparansi, akuntabilitas, tanggung jawab, nilai Pancasila, dan kepentingan bersama warga sekolah.</li>
                <li>Susun jawaban kelompok secara logis dan seimbang dengan mempertimbangkan kemungkinan adanya dugaan penyalahgunaan dana maupun kemungkinan kesalahan administrasi.</li>
              </ol>
              <h4>🛡️ Fokus Pembelajaran:</h4>
              <p>Melalui LKPD ini, peserta didik diarahkan untuk menganalisis persoalan pengelolaan dana kegiatan sekolah, membedakan bukti yang relevan dari penggugat dan tergugat, mengevaluasi tindakan ketua panitia, bendahara OSIS, dan pihak terkait, menyusun argumentasi berbasis klaim, bukti, alasan, dan sanggahan, serta merumuskan rekomendasi penyelesaian yang adil, transparan, akuntabel, dan sesuai nilai Pancasila.</p>
              <p style="font-style:italic;color:var(--gold-light);margin-top:10px;">Unduh LKPD pada halaman berikutnya</p>
            `
          },
          {
            label: 'Unduh LKPD', icon: '📄', html: `
              <h3>📄 LKPD Kasus 2 (PDF)</h3>
              <p>Klik tombol di bawah ini untuk melihat atau mengunduh LKPD Kasus 2.</p>
              <div style="text-align:center;margin:20px 0">
                <a href="assets/pdf/LKPD_Kasus_2.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh PDF</a>
              </div>
              <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
                <iframe src="assets/pdf/LKPD_Kasus_2.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
              </div>
            `
          }
        ]
      },
      {
        key: 'quiz-kasus2',
        label: 'Quiz Kasus 2',
        icon: '🔍',
        tabs: [
          {
            label: 'Quiz Refleksi', icon: '🔍',
            intro: {
              title: "Quiz Refleksi Kasus 2",
              subtitle: "Dugaan Penyalahgunaan Dana Kegiatan Sekolah",
              desc: "Quiz ini digunakan untuk menguatkan pemahaman peserta didik setelah mengikuti simulasi sidang CivicCourt. Melalui quiz ini, peserta didik diajak menalar kembali fakta kasus, bukti penggugat, bukti tergugat, transparansi laporan, akuntabilitas, nilai Pancasila, serta rekomendasi penyelesaian yang adil.",
              petunjuk: [
                "Bacalah setiap soal dengan cermat.",
                "Diskusikan jawaban secara singkat bersama kelompok.",
                "Pilih jawaban yang paling tepat berdasarkan fakta, bukti, dan alasan yang kuat.",
                "Kelompok yang menjawab benar akan memperoleh poin.",
                "Jawaban harus mempertimbangkan posisi penggugat dan tergugat secara adil."
              ],
              fokus: [
                "Mengidentifikasi isu publik dalam pengelolaan dana kegiatan sekolah.",
                "Membedakan bukti yang mendukung penggugat dan tergugat.",
                "Mengevaluasi tindakan ketua panitia, bendahara OSIS, dan pihak terkait.",
                "Menyusun argumentasi berbasis klaim, bukti, alasan, dan sanggahan.",
                "Menentukan putusan atau rekomendasi yang adil, transparan, dan akuntabel."
              ],
              note: "Ingat: jawaban yang baik bukan hanya cepat, tetapi mampu menghubungkan fakta kasus, bukti, alasan, nilai Pancasila, transparansi, akuntabilitas, dan keadilan bagi semua pihak."
            },
            quiz: [
              {
                question: "Dalam sidang, pihak penggugat menunjukkan laporan pertanggungjawaban konsumsi 100 paket, sedangkan bukti lain menunjukkan nota asli 60 paket dan daftar hadir 58 peserta. Penalaran yang paling tepat terhadap perbedaan data tersebut adalah ....",
                options: [
                  "ketua panitia pasti menyalahgunakan dana karena angka laporan dan nota berbeda",
                  "perbedaan data harus diperiksa melalui bukti tambahan sebelum disimpulkan sebagai penyalahgunaan dana atau kesalahan administrasi",
                  "nota asli tidak perlu dipertimbangkan karena laporan pertanggungjawaban lebih resmi",
                  "daftar hadir tidak berkaitan dengan perkara karena hanya mencatat peserta yang datang"
                ],
                answer: "B"
              },
              {
                question: "Argumentasi berikut yang paling kuat untuk menjelaskan adanya dugaan penyalahgunaan dana adalah ....",
                options: [
                  "Ketua panitia harus disalahkan karena semua kegiatan OSIS pasti memakai dana sekolah",
                  "Perbedaan laporan 100 paket dengan nota 60 paket perlu dipersoalkan karena didukung daftar hadir 58 peserta, catatan bendahara, dan belum jelasnya sisa dana Rp500.000",
                  "Ketua panitia tidak bersalah karena kegiatan sudah selesai dilaksanakan",
                  "Bendahara OSIS berhak mengajukan keberatan karena tidak menyukai laporan ketua panitia"
                ],
                answer: "B"
              },
              {
                question: "Kasus ini dapat disebut sebagai persoalan bersama warga sekolah karena ....",
                options: [
                  "laporan dana kegiatan hanya menjadi urusan ketua panitia dan bendahara OSIS",
                  "dana kegiatan menyangkut kepercayaan peserta didik, panitia, sekolah, dan pihak yang ikut mendukung kegiatan",
                  "kesalahan laporan kegiatan tidak perlu dibahas selama acara berjalan lancar",
                  "hanya guru pembina yang berhak mengetahui penggunaan dana kegiatan"
                ],
                answer: "B"
              },
              {
                question: "Jika ketua panitia menyatakan bahwa angka 100 peserta berasal dari rencana awal, sedangkan konsumsi disesuaikan menjadi 60 paket karena peserta yang hadir berkurang, bukti yang paling mendukung pembelaan tersebut adalah ....",
                options: [
                  "laporan pertanggungjawaban yang tetap mencatat 100 paket konsumsi",
                  "catatan revisi jumlah peserta dan percakapan dengan penyedia konsumsi",
                  "catatan bendahara tentang kekurangan bukti pengeluaran",
                  "keterangan peserta yang merasa laporan belum jelas"
                ],
                answer: "B"
              },
              {
                question: "Dalam menyusun putusan, hakim CivicCourt sebaiknya tidak langsung menyatakan ketua panitia bersalah karena ....",
                options: [
                  "ketua panitia memiliki kedudukan lebih tinggi daripada peserta kegiatan",
                  "setiap perbedaan laporan pasti hanya kesalahan pengetikan",
                  "putusan harus mempertimbangkan bukti penggugat, bukti tergugat, alasan para pihak, nilai Pancasila, transparansi, dan akuntabilitas",
                  "perkara dana kegiatan sekolah tidak perlu diselesaikan melalui pertimbangan sidang"
                ],
                answer: "C"
              },
              {
                question: "Pasangan bukti yang paling seimbang untuk menilai apakah perkara ini merupakan kesalahan administrasi atau dugaan penyalahgunaan dana adalah ....",
                options: [
                  "laporan pertanggungjawaban kegiatan dan catatan guru pembina saja",
                  "nota asli 60 paket, daftar hadir 58 peserta, catatan revisi peserta, dan catatan sisa dana yang belum disetorkan",
                  "proposal awal kegiatan dan dokumentasi acara saja",
                  "keterangan bendahara OSIS dan komentar peserta saja"
                ],
                answer: "B"
              },
              {
                question: "Nilai Pancasila yang paling kuat digunakan untuk menilai pengelolaan dana dalam kasus ini adalah nilai ....",
                options: [
                  "kejujuran, amanah, musyawarah, dan keadilan dalam mengelola kepentingan bersama",
                  "kebebasan mengatur laporan tanpa perlu meminta klarifikasi",
                  "keberanian menyalahkan pihak lain agar masalah cepat selesai",
                  "kepatuhan peserta untuk menerima semua laporan panitia tanpa bertanya"
                ],
                answer: "A"
              },
              {
                question: "Sanggahan paling logis dari pihak tergugat terhadap dalil penggugat adalah ....",
                options: [
                  "perbedaan laporan tidak perlu dibahas karena bendahara OSIS terlalu teliti",
                  "jumlah 100 paket berasal dari rencana awal, sedangkan pembelian akhir berubah menjadi 60 paket dan sisa dana masih menunggu penyelesaian laporan",
                  "penggugat tidak boleh melihat laporan karena bukan ketua panitia",
                  "semua bukti penggugat harus diabaikan karena kegiatan sudah terlaksana"
                ],
                answer: "B"
              },
              {
                question: "Penilaian yang paling adil terhadap tindakan bendahara OSIS dalam kasus ini adalah ....",
                options: [
                  "bendahara OSIS menghambat kegiatan karena mempertanyakan laporan ketua panitia",
                  "bendahara OSIS menjalankan fungsi kontrol karena meminta kejelasan bukti pengeluaran dan sisa dana kegiatan",
                  "bendahara OSIS harus langsung menyatakan ketua panitia melakukan penyalahgunaan dana",
                  "bendahara OSIS tidak perlu dilibatkan karena bukan penanggung jawab utama kegiatan"
                ],
                answer: "B"
              },
              {
                question: "Rekonendasi penyelesaian yang paling sesuai dengan prinsip transparansi dan akuntabilitas adalah ....",
                options: [
                  "meminta semua pihak melupakan masalah agar nama baik OSIS tetap terjaga",
                  "meminta ketua panitia memperbaiki laporan, melampirkan bukti pengeluaran, menjelaskan sisa dana, dan melakukan klarifikasi bersama bendahara serta guru pembina",
                  "langsung mengganti ketua panitia tanpa memeriksa bukti lebih lanjut",
                  "menyatakan laporan lama tetap sah walaupun ada perbedaan data"
                ],
                answer: "B"
              }
            ],
            outro: {
              title: "Misi Kasus 2 Selesai",
              subtitle: "Dugaan Penyalahgunaan Dana Kegiatan Sekolah",
              desc: "Selamat! Kalian telah menyelesaikan misi simulasi CivicCourt Kasus 2. Kalian sudah mengikuti proses persidangan, menelaah bukti dari pihak penggugat dan tergugat, membandingkan data laporan kegiatan, serta menilai persoalan berdasarkan prinsip kejujuran, transparansi, akuntabilitas, dan tanggung jawab. Ketelitian kalian dalam membaca bukti dan keberanian dalam menyampaikan alasan menjadi bagian penting dalam membangun sikap warga sekolah yang kritis dan adil.",
              moral: "Melalui kasus ini, kalian belajar bahwa pengelolaan dana kegiatan tidak hanya membutuhkan laporan, tetapi juga keterbukaan, bukti yang jelas, dan tanggung jawab kepada semua pihak yang terlibat.<br><br><strong>Terima kasih sudah menyelesaikan misi ini dengan baik. Bersiaplah untuk melanjutkan ke kasus berikutnya!</strong>"
            }
          }
        ]
      }
    ]
  }
};
