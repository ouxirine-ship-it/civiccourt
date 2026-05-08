// Kasus 3 Content Data - Pelanggaran Hak Menyampaikan Aspirasi
const KASUS3 = {
  materi: {
    title:'Materi Pembelajaran', icon:'📘', render:'tabs',
    tabs:[
      { label:'Capaian & Tujuan', icon:'🎯', html:`
        <h3>📌 Capaian Pembelajaran — Fase F</h3>
        <p>Peserta didik mampu menganalisis penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari, menunjukkan sikap demokratis berdasarkan UUD NRI Tahun 1945, serta menganalisis persoalan hak dan kewajiban warga negara untuk merumuskan solusi yang adil, konstitusional, dan bertanggung jawab.</p>
        <h4>🎯 Tujuan Pembelajaran</h4>
        <p>Setelah mengikuti simulasi sidang CivicCourt, peserta didik mampu:</p>
        <ol>
          <li>Menjelaskan hak warga negara dalam menyampaikan pendapat atau aspirasi.</li>
          <li>Membedakan antara penyampaian aspirasi yang bertanggung jawab dan tindakan yang mengganggu ketertiban.</li>
          <li>Menganalisis kasus pelanggaran hak menyampaikan aspirasi berdasarkan bukti yang tersedia.</li>
          <li>Menghubungkan kasus dengan nilai Pancasila, demokrasi, hak dan kewajiban warga negara, serta dasar hukum yang berlaku.</li>
          <li>Menyusun argumen dalam bentuk klaim, bukti, alasan, dan sanggahan secara logis.</li>
          <li>Merumuskan putusan yang adil, demokratis, dan bertanggung jawab.</li>
        </ol>` },
      { label:'Materi 1', icon:'📖', html:`
        <h3>📖 Hak dan Kewajiban Warga Negara</h3>
        <p>Dalam kehidupan berbangsa dan bernegara, setiap warga negara memiliki hak dan kewajiban. Hak adalah sesuatu yang boleh diperoleh atau dilakukan oleh warga negara. Kewajiban adalah sesuatu yang harus dilakukan dengan penuh tanggung jawab.</p>
        <p>Salah satu hak warga negara adalah menyampaikan pendapat atau aspirasi. Hak ini penting karena warga negara dapat menyampaikan gagasan, kritik, saran, atau keberatan terhadap suatu kebijakan.</p>
        <p>Namun, hak tidak boleh digunakan secara sembarangan. Setiap orang tetap memiliki kewajiban untuk menghormati hak orang lain, menjaga ketertiban, dan menyampaikan pendapat dengan cara yang baik.</p>
        <ol>
          <li>Hak menyampaikan pendapat harus dihormati.</li>
          <li>Kewajiban menjaga ketertiban tetap harus dijalankan.</li>
          <li>Aspirasi harus disampaikan secara sopan, tertib, dan bertanggung jawab.</li>
          <li>Perbedaan pendapat harus diselesaikan melalui cara yang adil dan demokratis.</li>
        </ol>` },
      { label:'Materi 2', icon:'📖', html:`
        <h3>📖 Demokrasi dan Penyampaian Aspirasi</h3>
        <p>Demokrasi memberi ruang kepada warga negara untuk ikut berpartisipasi dalam kehidupan bersama. Partisipasi dapat dilakukan melalui musyawarah, diskusi, pemilihan, kritik, saran, maupun penyampaian aspirasi.</p>
        <p>Di lingkungan sekolah, peserta didik juga dapat menyampaikan aspirasi. Misalnya menyampaikan pendapat tentang kegiatan sekolah, aturan kelas, fasilitas belajar, atau kebijakan OSIS.</p>
        <p>Penyampaian aspirasi menunjukkan bahwa peserta didik peduli terhadap kepentingan bersama. Namun, aspirasi harus disampaikan melalui cara yang tertib agar tidak menimbulkan konflik atau mengganggu hak orang lain.</p>
        <h4>Bentuk Penyampaian Aspirasi yang Baik</h4>
        <ol>
          <li>Menyampaikan pendapat melalui musyawarah.</li>
          <li>Menggunakan bahasa yang sopan.</li>
          <li>Menyampaikan alasan dengan jelas.</li>
          <li>Menghargai pendapat pihak lain.</li>
          <li>Menghindari tindakan memaksa, mengancam, atau merusak.</li>
        </ol>` },
      { label:'Materi 3', icon:'📖', html:`
        <h3>📖 Tanggung Jawab dalam Menyampaikan Pendapat</h3>
        <p>Menyampaikan pendapat adalah hak, tetapi hak tersebut harus digunakan dengan tanggung jawab. Pendapat yang baik tidak hanya berisi keinginan pribadi, tetapi juga disertai alasan, bukti, dan sikap menghormati orang lain.</p>
        <p>Dalam Pendidikan Pancasila, peserta didik belajar bahwa kebebasan harus berjalan bersama tanggung jawab. Seseorang boleh menyampaikan kritik, tetapi tidak boleh menghina, mengganggu ketertiban, atau merugikan pihak lain.</p>
        <p>Sebaliknya, pihak yang menerima aspirasi juga tidak boleh langsung membungkam pendapat. Aspirasi perlu didengar, dipertimbangkan, dan dijawab secara adil.</p>
        <div class="highlight-box"><strong>Kesimpulan:</strong> Hak menyampaikan aspirasi merupakan bagian penting dalam kehidupan demokrasi. Namun, hak tersebut harus digunakan secara tertib, sopan, dan bertanggung jawab. Pihak yang menerima aspirasi wajib menghargai pendapat warga negara.</div>` }
    ]
  },

  berkas: {
    title:'Berkas Kasus', icon:'📂', render:'tabs',
    tabs:[
      { label:'Identitas Kasus', icon:'🏷️', html:`
        <h3>🏷️ Identitas Perkara</h3>
        <table style="width:100%;border-collapse:collapse;margin:12px 0">
          <tr><td style="padding:10px 14px;font-weight:700;width:40%;border-bottom:1px solid #d4a843aa">Judul Perkara</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Dugaan Pelanggaran Hak Menyampaikan Aspirasi Siswa</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Tempat Kejadian</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">SMA Nusantara Mandiri</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Waktu Kejadian</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">12–15 Maret 2026</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Pihak Penggugat</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Forum Aspirasi Siswa SMA Nusantara Mandiri (Alya Rahmawati, XII-1)</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700;border-bottom:1px solid #d4a843aa">Pihak Tergugat</td><td style="padding:10px 14px;border-bottom:1px solid #d4a843aa">Tim Ketertiban Sekolah (Bapak Arman Saputra, Wakasek Kesiswaan)</td></tr>
          <tr><td style="padding:10px 14px;font-weight:700">Pokok Perkara</td><td style="padding:10px 14px">Sekelompok siswa merasa hak mereka untuk menyampaikan aspirasi dibatasi setelah kegiatan penyampaian pendapat tentang fasilitas sekolah dihentikan oleh pihak sekolah.</td></tr>
        </table>
        <p style="font-size:.85rem;color:var(--gold);font-style:italic;margin-top:12px">⚠️ Nama sekolah, siswa, dan pihak terkait dalam kasus ini bersifat fiktif untuk kepentingan simulasi pembelajaran.</p>` },
      { label:'Kronologi', icon:'📋', html:`
        <h3>📋 Kronologi Kasus</h3>
        <p><strong>12 Maret 2026</strong> — Forum Aspirasi Siswa menyerahkan surat permohonan audiensi kepada pihak kesiswaan. Surat tersebut berisi permintaan dialog tentang perbaikan fasilitas toilet, ruang baca, dan area kantin.</p>
        <p><strong>14 Maret 2026</strong> — Karena belum ada jadwal pertemuan, beberapa siswa memasang poster aspirasi di sekitar mading sekolah. Poster tersebut berisi kalimat seperti "Kami Butuh Fasilitas yang Layak" dan "Dengarkan Aspirasi Siswa".</p>
        <p><strong>15 Maret 2026</strong> — Saat jam istirahat, Forum Aspirasi Siswa mengumpulkan tanda tangan dukungan dan membacakan pernyataan singkat di halaman sekolah. Kegiatan tersebut menarik perhatian banyak siswa.</p>
        <p>Pihak Tim Ketertiban Sekolah kemudian <strong>menghentikan kegiatan</strong> tersebut. Beberapa poster dilepas, daftar tanda tangan diminta, dan perwakilan siswa dipanggil ke ruang kesiswaan.</p>
        <p>Pihak sekolah menyatakan bahwa kegiatan tersebut belum mendapat izin resmi dan dikhawatirkan mengganggu ketertiban sekolah. Sementara itu, siswa merasa kegiatan mereka berlangsung damai dan dilakukan saat jam istirahat.</p>` },
      { label:'Pokok Masalah', icon:'❓', html:`
        <h3>❓ Masalah yang Harus Diperiksa</h3>
        <ol>
          <li>Apakah Forum Aspirasi Siswa sudah menyampaikan pendapat secara tertib dan bertanggung jawab?</li>
          <li>Apakah pihak sekolah telah membatasi hak siswa untuk menyampaikan aspirasi?</li>
          <li>Apakah penghentian kegiatan dilakukan karena alasan ketertiban atau karena tidak ingin menerima kritik?</li>
          <li>Apakah siswa sudah mengikuti prosedur yang berlaku di sekolah?</li>
          <li>Apakah tindakan melepas poster dan memanggil perwakilan siswa dapat dibenarkan?</li>
          <li>Bagaimana keputusan yang adil bagi siswa, pihak sekolah, dan lingkungan belajar?</li>
        </ol>` },
      { label:'Posisi Penggugat', icon:'🔴', html:`
        <h3>🔴 Forum Aspirasi Siswa (Penggugat)</h3>
        <p>Penggugat menyatakan bahwa kegiatan penyampaian aspirasi dilakukan secara damai, tanpa kekerasan, tanpa merusak fasilitas, dan dilakukan saat jam istirahat.</p>
        <p>Penggugat juga menyampaikan bahwa mereka sudah lebih dulu mengirim surat permohonan audiensi, tetapi belum mendapat jawaban yang jelas.</p>
        <h4>Klaim Penggugat</h4>
        <p>Pihak sekolah diduga telah membatasi hak siswa untuk menyampaikan aspirasi secara damai.</p>
        <h4>Alasan</h4>
        <p>Aspirasi siswa bertujuan memperbaiki fasilitas sekolah, bukan membuat keributan. Kegiatan dilakukan dengan poster, tanda tangan dukungan, dan pernyataan singkat — bukan dengan tindakan anarkis.</p>
        <h4>Tuntutan Penggugat</h4>
        <ol>
          <li>Pihak sekolah mengakui hak siswa untuk menyampaikan aspirasi.</li>
          <li>Pihak sekolah mengembalikan daftar tanda tangan dukungan.</li>
          <li>Pihak sekolah membuka forum dialog resmi dengan siswa.</li>
          <li>Tidak ada sanksi bagi siswa yang menyampaikan aspirasi secara damai.</li>
        </ol>` },
      { label:'Posisi Tergugat', icon:'🔵', html:`
        <h3>🔵 Tim Ketertiban Sekolah (Tergugat)</h3>
        <p>Tergugat menyatakan bahwa pihak sekolah tidak melarang siswa menyampaikan aspirasi. Namun, setiap kegiatan yang melibatkan banyak siswa harus mendapat izin dan dikoordinasikan terlebih dahulu.</p>
        <p>Pihak sekolah khawatir kegiatan tersebut menimbulkan kesalahpahaman karena belum ada pendampingan guru.</p>
        <h4>Klaim Tergugat</h4>
        <p>Penghentian kegiatan dilakukan untuk menjaga ketertiban sekolah, bukan untuk membungkam aspirasi siswa.</p>
        <h4>Alasan</h4>
        <p>Siswa tetap boleh menyampaikan pendapat, tetapi harus mengikuti prosedur, meminta izin, dan memilih cara yang tidak mengganggu kegiatan belajar.</p>
        <h4>Pembelaan Tergugat</h4>
        <ol>
          <li>Sekolah memiliki tanggung jawab menjaga ketertiban dan keamanan.</li>
          <li>Kegiatan siswa belum mendapat izin resmi.</li>
          <li>Penyampaian aspirasi seharusnya dilakukan melalui forum dialog, OSIS, wali kelas, atau kesiswaan.</li>
          <li>Pemanggilan siswa bertujuan untuk klarifikasi, bukan menghukum.</li>
        </ol>` }
    ]
  },

  // Placeholder sections - will be extended
  'dasar-hukum': {
    title:'Dasar Hukum', icon:'⚖️', render:'tabs',
    tabs:[
      { label:'Dasar Hukum', icon:'📜', html:`
        <h3>📜 Dasar Hukum dan Pertimbangan</h3>
        <p>Dalam negara demokrasi, setiap warga negara memiliki hak untuk menyampaikan pendapat, gagasan, kritik, dan aspirasi. Namun, hak menyampaikan aspirasi tetap harus digunakan secara bertanggung jawab.</p>
        <h4>Dasar Hukum yang Digunakan</h4>
        <ol>
          <li><strong>UUD NRI Tahun 1945 Pasal 28E ayat (3)</strong> — Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28F</strong> — Setiap orang berhak untuk berkomunikasi dan memperoleh informasi melalui berbagai saluran yang tersedia.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28J ayat (1)</strong> — Setiap orang wajib menghormati hak asasi manusia orang lain dalam kehidupan bermasyarakat, berbangsa, dan bernegara.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28J ayat (2)</strong> — Dalam menjalankan hak dan kebebasannya, setiap orang wajib tunduk pada pembatasan yang ditetapkan undang-undang.</li>
          <li><strong>UU No. 9 Tahun 1998 tentang Kemerdekaan Menyampaikan Pendapat di Muka Umum</strong> — Setiap warga negara berhak menyampaikan pendapat secara bertanggung jawab, tertib, aman, dan damai.</li>
          <li><strong>UU No. 39 Tahun 1999 tentang Hak Asasi Manusia</strong> — Menjamin hak setiap orang untuk menyampaikan pendapat, berkumpul, dan berserikat untuk maksud yang damai.</li>
          <li><strong>UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional</strong> — Pendidikan diselenggarakan secara demokratis, berkeadilan, dan menjunjung tinggi hak asasi manusia.</li>
          <li><strong>Tata Tertib Sekolah</strong> — Setiap siswa berhak menyampaikan saran, kritik, dan aspirasi melalui cara yang baik, serta wajib menjaga ketertiban sekolah.</li>
        </ol>
        <h4>Pertimbangan Sidang</h4>
        <ol>
          <li>Apakah Forum Aspirasi Siswa sudah menyampaikan pendapat secara damai, tertib, dan bertanggung jawab?</li>
          <li>Apakah pihak sekolah sudah memberikan ruang yang cukup bagi siswa untuk menyampaikan aspirasi?</li>
          <li>Apakah penghentian kegiatan aspirasi dilakukan untuk menjaga ketertiban atau justru membatasi hak siswa?</li>
          <li>Apakah siswa sudah mengikuti prosedur yang berlaku di sekolah?</li>
          <li>Apakah tindakan melepas poster, menghentikan kegiatan, dan memanggil perwakilan siswa sudah seimbang?</li>
          <li>Apakah keputusan yang akan diambil sudah mempertimbangkan hak siswa, kewajiban siswa, aturan sekolah, dan kepentingan bersama?</li>
        </ol>` },
      { label:'Nilai Pancasila', icon:'🇮🇩', html:`
        <h3>🇮🇩 Nilai Pancasila dalam Kasus</h3>
        <p>Kasus pelanggaran hak menyampaikan aspirasi berkaitan langsung dengan nilai-nilai Pancasila. Peserta didik perlu menilai apakah tindakan siswa dan pihak sekolah sudah sesuai dengan sikap warga negara yang demokratis, adil, tertib, dan bertanggung jawab.</p>
        <ol>
          <li><strong>Sila Kedua: Kemanusiaan yang Adil dan Beradab</strong> — Setiap warga sekolah harus saling menghormati. Aspirasi siswa perlu didengar dengan baik, tetapi penyampaiannya juga harus dilakukan secara sopan.</li>
          <li><strong>Sila Ketiga: Persatuan Indonesia</strong> — Penyampaian aspirasi tidak boleh menimbulkan perpecahan. Siswa dan pihak sekolah harus menjaga suasana sekolah tetap aman, damai, dan kondusif.</li>
          <li><strong>Sila Keempat: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan</strong> — Perbedaan pendapat sebaiknya diselesaikan melalui musyawarah, dialog, dan pertimbangan yang bijaksana.</li>
          <li><strong>Sila Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia</strong> — Setiap siswa berhak memperoleh perlakuan yang adil. Pihak sekolah perlu menjaga ketertiban, tetapi juga harus memastikan bahwa hak siswa tetap dihormati.</li>
        </ol>
        <div class="highlight-box"><strong>Kesimpulan:</strong> Menyampaikan aspirasi adalah hak warga negara. Namun, hak tersebut harus digunakan secara tertib dan bertanggung jawab. Putusan yang adil harus mempertimbangkan hak siswa, aturan sekolah, ketertiban, dan nilai Pancasila.</div>` }
    ]
  },
  'kartu-peran': {
    title:'Kartu Peran Sidang', icon:'🎭', render:'roles',
    roles:[
      { name:'Hakim Ketua', img:'assets/hakim.png',
        tugas:['Membuka dan menutup sidang.','Menjelaskan tata tertib sidang.','Memberi kesempatan berbicara kepada penggugat, tergugat, saksi, dan ahli.','Mengajukan pertanyaan untuk memperjelas fakta.','Memastikan setiap pendapat didukung oleh bukti.','Menilai apakah hak menyampaikan aspirasi dilanggar atau tidak.','Memimpin musyawarah putusan.','Membacakan putusan akhir.'],
        extraTitle:'Pertanyaan Kunci',
        extra:['Apakah siswa sudah menyampaikan aspirasi secara tertib?','Apakah pihak sekolah sudah memberi ruang dialog kepada siswa?','Apakah penghentian kegiatan dilakukan untuk menjaga ketertiban atau membatasi hak siswa?','Bukti apa yang paling kuat dalam kasus ini?','Putusan apa yang paling adil bagi siswa dan pihak sekolah?'] },
      { name:'Panitera', img:'assets/panitera.png',
        tugas:['Mencatat identitas perkara.','Mencatat pihak yang hadir dalam sidang.','Mencatat bukti yang diajukan penggugat dan tergugat.','Mencatat keterangan saksi dan ahli.','Mencatat klaim utama dari setiap pihak.','Mencatat alasan dan sanggahan yang muncul selama sidang.','Membantu hakim menyusun ringkasan putusan.'],
        extraTitle:'Catatan Penting',
        extraText:'Panitera harus mencatat secara objektif. Jangan memihak penggugat atau tergugat. Catat fakta yang muncul dalam sidang, bukan pendapat pribadi.' },
      { name:'Penggugat', img:'assets/penggugat.png',
        tugas:['Menjelaskan alasan mengajukan perkara.','Menyampaikan bahwa aspirasi dilakukan secara damai dan tertib.','Menunjukkan bukti bahwa siswa sudah berusaha meminta dialog.','Menjelaskan mengapa penghentian kegiatan dianggap membatasi hak siswa.','Mengajukan pertanyaan kepada tergugat dan saksi.','Menyampaikan tuntutan atau permintaan penyelesaian.'],
        extraTitle:'Klaim Utama',
        extraText:'Pihak sekolah diduga membatasi hak siswa untuk menyampaikan aspirasi secara damai.',
        extra2Title:'Tuntutan',
        extra2Text:'1) Sekolah membuka forum dialog resmi. 2) Daftar tanda tangan dikembalikan. 3) Siswa tidak diberi sanksi. 4) Aspirasi dipertimbangkan secara terbuka dan adil.' },
      { name:'Tergugat', img:'assets/tergugat.png',
        tugas:['Menjelaskan alasan kegiatan aspirasi dihentikan.','Menjelaskan aturan sekolah tentang kegiatan siswa.','Menanggapi gugatan Forum Aspirasi Siswa.','Menunjukkan bukti bahwa tindakan sekolah bertujuan menjaga ketertiban.','Menjelaskan bahwa pemanggilan siswa dilakukan untuk klarifikasi, bukan menghukum.','Menyampaikan pembelaan akhir secara logis dan sopan.'],
        extraTitle:'Klaim Utama',
        extraText:'Penghentian kegiatan dilakukan untuk menjaga ketertiban sekolah, bukan untuk membungkam aspirasi siswa.',
        extra2Title:'Pembelaan',
        extra2Text:'1) Sekolah tetap menghargai aspirasi siswa. 2) Siswa perlu mengikuti prosedur yang berlaku. 3) Aspirasi dapat disampaikan melalui OSIS, wali kelas, guru pembina, atau forum dialog resmi. 4) Tindakan sekolah dilakukan untuk menjaga suasana belajar tetap kondusif.' },
      { name:'Saksi Penggugat', img:'assets/saksi.png',
        tugas:['Menjelaskan bagaimana kegiatan aspirasi berlangsung.','Menjelaskan apakah kegiatan dilakukan secara damai atau tidak.','Menjelaskan apakah poster dan tanda tangan dukungan berisi tuntutan yang wajar.','Menjelaskan apakah siswa sudah mengirim surat permohonan audiensi.','Menjawab pertanyaan hakim, penggugat, tergugat, dan ahli.'],
        extraTitle:'Keterangan Utama',
        extraText:'Forum Aspirasi Siswa sudah mengirim surat permohonan audiensi. Kegiatan dilakukan saat jam istirahat. Siswa hanya membawa poster, mengumpulkan tanda tangan, dan membacakan pernyataan singkat tanpa merusak fasilitas sekolah.' },
      { name:'Saksi Tergugat', img:'assets/saksi.png',
        tugas:['Menjelaskan situasi saat kegiatan aspirasi berlangsung.','Menjelaskan apakah kegiatan menarik perhatian banyak siswa.','Menjelaskan alasan pihak sekolah menghentikan kegiatan.','Menjelaskan apakah kegiatan sudah mendapat izin resmi.','Menjawab pertanyaan hakim, penggugat, tergugat, dan ahli.'],
        extraTitle:'Keterangan Utama',
        extraText:'Kegiatan aspirasi menarik perhatian banyak siswa di halaman sekolah. Beberapa siswa mulai berkumpul dan suasana menjadi kurang kondusif. Pihak sekolah menghentikan kegiatan karena belum ada izin resmi dan dikhawatirkan mengganggu ketertiban sekolah.' },
      { name:'Ahli PPKn', img:'assets/ahli.png',
        tugas:['Menjelaskan bahwa menyampaikan aspirasi adalah hak warga negara.','Menjelaskan bahwa hak harus digunakan secara bertanggung jawab.','Menjelaskan hubungan kasus dengan nilai Pancasila.','Menjelaskan pentingnya musyawarah dan dialog dalam menyelesaikan perbedaan pendapat.','Menjelaskan perbedaan antara menjaga ketertiban dan membungkam aspirasi.','Membantu hakim membuat pertimbangan yang adil.'],
        extraTitle:'Pandangan Ahli',
        extraText:'Menyampaikan aspirasi adalah bagian dari kehidupan demokrasi. Siswa berhak menyampaikan pendapat tentang masalah sekolah. Namun, aspirasi harus disampaikan secara tertib, damai, dan mengikuti aturan. Pihak sekolah juga memiliki tanggung jawab menjaga ketertiban, tetapi tidak boleh menutup ruang dialog secara tidak adil.' }
    ]
  },
  bukti: {
    title:'Bukti Kasus', icon:'📑', render:'evidence',
    evidence:[
      { num:1, title:'Surat Permohonan Audiensi', img:'kasus 3/berkas bukti/1.jpeg',
        desc:'Forum Aspirasi Siswa telah mengirim surat permohonan audiensi kepada Wakasek Kesiswaan pada 12 Maret 2026. Surat berisi permintaan dialog tentang perbaikan fasilitas toilet, ruang baca, dan area kantin. Bukti ini menunjukkan bahwa siswa sudah berupaya menyampaikan aspirasi melalui jalur resmi.',
        question:'Apakah surat ini menunjukkan bahwa siswa sudah berusaha menyampaikan aspirasi secara tertib dan resmi?' },
      { num:2, title:'Poster Aspirasi Siswa', img:'kasus 3/berkas bukti/2.jpeg',
        desc:'Poster-poster aspirasi dipasang di mading sekolah berisi ajakan seperti "Dengarkan Aspirasi Siswa", "Kami Butuh Fasilitas yang Layak". Aspirasi disampaikan melalui tulisan yang bersifat ajakan, bukan ancaman atau kekerasan.',
        question:'Apakah isi poster menunjukkan penyampaian aspirasi yang damai, atau justru mengganggu ketertiban sekolah?' },
      { num:3, title:'Daftar Tanda Tangan Dukungan', img:'kasus 3/berkas bukti/3.jpeg',
        desc:'Daftar tanda tangan berisi nama, kelas, dan tanda tangan siswa yang mendukung perbaikan toilet, ruang baca, dan area kantin. Bukti ini memperkuat bahwa aspirasi bukan hanya kepentingan satu orang, tetapi mewakili kepedulian beberapa siswa.',
        question:'Apakah daftar dukungan ini menunjukkan bahwa aspirasi siswa memiliki kepentingan bersama?' },
      { num:4, title:'Dokumentasi Pembacaan Pernyataan Sikap', img:'kasus 3/berkas bukti/4.jpeg',
        desc:'Perwakilan siswa membacakan pernyataan sikap di lingkungan sekolah. Kegiatan dilakukan secara terbuka dan diikuti beberapa siswa. Pernyataan berisi aspirasi tentang perbaikan fasilitas sekolah dan harapan agar pihak sekolah membuka ruang dialog.',
        question:'Apakah dokumentasi ini menunjukkan bahwa siswa menyampaikan aspirasi secara damai dan bertanggung jawab?' },
      { num:5, title:'Berita Acara Penghentian Kegiatan', img:'kasus 3/berkas bukti/5.jpeg',
        desc:'Tim Ketertiban Sekolah menghentikan kegiatan penyampaian aspirasi pada 15 Maret 2026. Dalam berita acara disebutkan kegiatan dihentikan sementara karena belum memperoleh izin resmi dan mulai menarik perhatian banyak siswa.',
        question:'Apakah penghentian kegiatan dilakukan untuk menjaga ketertiban, atau merupakan pembatasan terhadap hak menyampaikan aspirasi?' },
      { num:6, title:'Laporan Guru Piket', img:'kasus 3/berkas bukti/6.jpeg',
        desc:'Laporan guru piket menjelaskan bahwa siswa berkumpul saat jam istirahat, membawa poster, dan menyampaikan aspirasi. Kegiatan berlangsung secara umum tertib dan damai, tetapi jumlah siswa yang berkumpul berpotensi mengganggu ketertiban jika tidak diarahkan.',
        question:'Apakah laporan guru piket memperkuat alasan sekolah, atau justru menunjukkan bahwa kegiatan siswa berlangsung damai?' },
      { num:7, title:'Berita Acara Klarifikasi', img:'kasus 3/berkas bukti/7.jpeg',
        desc:'Klarifikasi antara perwakilan siswa dan pihak sekolah setelah kegiatan aspirasi dihentikan. Siswa menjelaskan tujuan mereka, pihak sekolah menjelaskan alasan penghentian. Bukti ini menunjukkan bahwa pihak sekolah tidak langsung menjatuhkan hukuman, tetapi melakukan klarifikasi.',
        question:'Apakah berita acara klarifikasi ini menunjukkan adanya upaya penyelesaian yang adil melalui dialog?' },
      { num:8, title:'Dasar Aturan Penyampaian Aspirasi', img:'kasus 3/berkas bukti/8.jpeg',
        desc:'Ringkasan aturan tentang hak menyampaikan pendapat dan batas penggunaannya. Aturan yang digunakan antara lain UUD NRI Tahun 1945 Pasal 28E ayat (3), Pasal 28J ayat (2), UU No. 9 Tahun 1998, UU No. 39 Tahun 1999, dan tata tertib sekolah.',
        question:'Apakah tindakan siswa dan pihak sekolah sudah sesuai dengan aturan tentang hak menyampaikan aspirasi dan kewajiban menjaga ketertiban?' }
    ]
  },
  putusan: {
    title:'Lembar Putusan', icon:'📜', render:'tabs',
    tabs:[
      { label:'Panduan Putusan', icon:'📝', html:`
        <h3>📝 Langkah Menyusun Putusan</h3>
        <p>Setelah membaca berkas kasus, memeriksa bukti, dan mendengar pendapat para pihak, susunlah putusan kelompokmu secara adil dan bertanggung jawab.</p>
        <div class="highlight-box">⚠️ Putusan tidak boleh dibuat berdasarkan dugaan atau perasaan saja. Putusan harus berdasarkan bukti, alasan, nilai Pancasila, dasar hukum, dan pertimbangan keadilan.</div>
        <ol>
          <li><strong>Pahami inti masalah</strong> — Apa persoalan utama dalam kasus ini?</li>
          <li><strong>Tentukan klaim kelompok</strong> — Apakah tindakan sekolah termasuk pelanggaran hak atau tindakan menjaga ketertiban?</li>
          <li><strong>Pilih bukti yang paling relevan</strong> — Gunakan bukti yang benar-benar mendukung pendapat kelompokmu.</li>
          <li><strong>Jelaskan alasan</strong> — Terangkan mengapa bukti tersebut mendukung putusan.</li>
          <li><strong>Pertimbangkan nilai Pancasila</strong> — Hubungkan dengan keadilan, musyawarah, tanggung jawab.</li>
          <li><strong>Gunakan dasar hukum</strong> — UUD NRI 1945, UU No. 9/1998, UU No. 39/1999, tata tertib sekolah.</li>
          <li><strong>Rumuskan putusan</strong> — Pilih keputusan yang paling adil.</li>
          <li><strong>Berikan rekomendasi</strong> — Tuliskan tindak lanjut.</li>
        </ol>` },
      { label:'LKPD Siswa (PDF)', icon:'📄', html:`
        <h3>📄 LKPD Lembar Putusan — Siap Cetak</h3>
        <p>Gunakan lembar kerja ini untuk menulis putusan kelompokmu. Klik tombol di bawah untuk melihat atau mengunduh.</p>
        <div style="text-align:center;margin:20px 0">
          <a href="kasus 3/lembar putusan/LKPD_Lembar_Putusan_CivicCourt_Kasus_3_Siap_Cetak_Siswa.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3);margin:8px;transition:all .3s">📥 Lihat / Unduh LKPD Siswa</a>
        </div>
        <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
          <iframe src="kasus 3/lembar putusan/LKPD_Lembar_Putusan_CivicCourt_Kasus_3_Siap_Cetak_Siswa.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
        </div>` },
      { label:'Panduan Guru (PDF)', icon:'👩‍🏫', html:`
        <h3>👩‍🏫 Panduan Penilaian Guru</h3>
        <p>Panduan ini membantu guru menilai putusan dan argumen siswa. Klik tombol di bawah untuk melihat atau mengunduh.</p>
        <div style="text-align:center;margin:20px 0">
          <a href="kasus 3/lembar putusan/Panduan_Penilaian_Guru_CivicCourt_Kasus_3.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#1a2744,#2a3d66);color:#f0d68a;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3);margin:8px;transition:all .3s">📥 Lihat / Unduh Panduan Guru</a>
        </div>
        <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
          <iframe src="kasus 3/lembar putusan/Panduan_Penilaian_Guru_CivicCourt_Kasus_3.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
        </div>` }
    ]
  },

  refleksi: {
    title:'Misi Refleksi', icon:'🪞', render:'tabs',
    tabs:[
      { label:'Intro', icon:'⚖️', html:`
        <h3>⚖️ Misi Refleksi</h3>
        <p style="font-size:1.05rem">Sidang telah selesai. Sekarang saatnya menilai kembali cara berpikir dan putusan kelompokmu.</p>
        <div class="highlight-box">Ingat, refleksi bukan mencari siapa yang paling benar. Refleksi membantu kamu melihat apakah keputusanmu sudah berdasarkan bukti, alasan, nilai Pancasila, dan dasar hukum.</div>` },
      { label:'Refleksi 1', icon:'🔍', html:`
        <h3>🔍 Cek Pemahaman Kasus</h3>
        <p><strong>Inti kasus ini adalah tentang:</strong></p>
        <div class="content-card"><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q1" value="a"> Siswa yang ingin menyampaikan aspirasi</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q1" value="b"> Sekolah yang ingin menjaga ketertiban</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q1" value="c"> Hak menyampaikan pendapat dan tanggung jawab menjaga aturan</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q1" value="d"> Semua jawaban benar</label></div>
        <p><strong>Masalah utama dalam kasus ini adalah:</strong></p>
        <div class="content-card"><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q2" value="a"> Aspirasi siswa tidak boleh disampaikan</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q2" value="b"> Sekolah tidak boleh membuat aturan</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q2" value="c"> Perlu keseimbangan antara hak siswa dan ketertiban sekolah</label><label style="display:block;padding:8px 0;cursor:pointer"><input type="radio" name="r1q2" value="d"> Siswa selalu benar dalam menyampaikan pendapat</label></div>
        <p style="font-size:.85rem;color:var(--gold);font-style:italic">Diskusikan: Mengapa kelompokmu memilih jawaban tersebut?</p>` },
      { label:'Refleksi 2', icon:'📑', html:`
        <h3>📑 Pilih Bukti Terkuat</h3>
        <p>Dari semua bukti yang sudah diperiksa, pilih bukti yang paling memengaruhi putusan kelompokmu.</p>
        <h4>Bukti yang mendukung Forum Aspirasi Siswa:</h4>
        <div class="content-card"><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="1"> Bukti 1: Surat Permohonan Audiensi</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="2"> Bukti 2: Poster Aspirasi Siswa</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="3"> Bukti 3: Daftar Tanda Tangan Dukungan</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="4"> Bukti 4: Pembacaan Pernyataan Sikap</label></div>
        <h4>Bukti yang mendukung pihak sekolah:</h4>
        <div class="content-card"><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="5"> Bukti 5: Berita Acara Penghentian Kegiatan</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="6"> Bukti 6: Laporan Guru Piket</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="7"> Bukti 7: Berita Acara Klarifikasi</label><label style="display:block;padding:6px 0;cursor:pointer"><input type="checkbox" value="8"> Bukti 8: Dasar Aturan</label></div>
        <div class="content-card"><h3>✍️ Lengkapi</h3><p>Bukti terkuat menurut kelompok kami adalah...</p><textarea placeholder="Tuliskan bukti terkuat dan alasannya..."></textarea></div>` },
      { label:'Refleksi 3', icon:'⚖️', html:`
        <h3>⚖️ Termometer Keadilan</h3>
        <p>Nilailah putusan kelompokmu dengan skala 1–5.</p>
        <div class="content-card"><h3>Putusan kami sudah mempertimbangkan hak siswa</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="tk1" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk1" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk1" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk1" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk1" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah mempertimbangkan ketertiban sekolah</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="tk2" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk2" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk2" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk2" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk2" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah menggunakan bukti yang relevan</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="tk3" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk3" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk3" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk3" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk3" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>Putusan kami sudah sesuai dengan nilai Pancasila</h3><div style="display:flex;gap:12px;justify-content:center;margin:10px 0"><label style="text-align:center;cursor:pointer"><input type="radio" name="tk4" value="1"><br>1</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk4" value="2"><br>2</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk4" value="3"><br>3</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk4" value="4"><br>4</label><label style="text-align:center;cursor:pointer"><input type="radio" name="tk4" value="5"><br>5</label></div><p style="font-size:.8rem;text-align:center;color:var(--gold)">Belum ←——→ Sangat Sudah</p></div>
        <div class="content-card"><h3>✍️ Kalimat Refleksi</h3><textarea placeholder="Hari ini saya belajar bahwa menyampaikan aspirasi harus...."></textarea></div>
        <div class="highlight-box">Putusan yang baik bukan yang membela satu pihak saja, tetapi yang mampu mempertimbangkan hak, kewajiban, bukti, aturan, dan keadilan.</div>` },
      { label:'🏆 Badge', icon:'🏆', html:`
        <h3 style="text-align:center;font-size:1.4rem">🎉 Selamat!</h3>
        <p style="text-align:center;font-size:1.1rem">Kamu telah menyelesaikan <strong>Misi CivicCourt Kasus 3</strong>!</p>
        <div style="text-align:center;margin:24px 0;font-size:1.1rem;line-height:2">
          ✓ Membaca kasus dengan teliti<br>
          ✓ Memilih bukti yang relevan<br>
          ✓ Mendengar dua pihak<br>
          ✓ Menyusun alasan<br>
          ✓ Membuat putusan yang adil
        </div>
        <h4 style="text-align:center;margin:20px 0 12px">🏅 Pilih Badge Kelompokmu:</h4>
        <div class="content-card" style="text-align:center"><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="badge" value="1"> 🔍 Ahli Bukti</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="badge" value="2"> ⚖️ Penalar Keadilan</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="badge" value="3"> 🤝 Tim Musyawarah</label><label style="display:inline-block;padding:10px 16px;margin:6px;cursor:pointer;font-size:1rem"><input type="radio" name="badge" value="4"> 📜 Pembuat Putusan Bijak</label></div>` }
    ]
  }
};
