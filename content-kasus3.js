// Kasus 3 Content Data - Pelanggaran Hak Menyampaikan Aspirasi
const KASUS3 = {
  materi: {
    title:'Materi Pembelajaran', icon:'📘', render:'tabs',
    tabs:[
      { label:'Capaian & Tujuan', icon:'🎯', html:`
        <h3>📌 Capaian Pembelajaran — Fase F</h3>
        <p>Peserta didik mampu menganalisis penerapan nilai-nilai Pancasila dalam kehidupan sehari-hari, menunjukkan sikap demokratis berdasarkan UUD NRI Tahun 1945, serta menganalisis persoalan hak dan kewajiban warga negara untuk merumuskan solusi yang adil, konstitusional, dan bertanggung jawab.</p>
        <h4>🎯 Tujuan Pembelajaran</h4>
        <p>Setelah mengikuti pembelajaran menggunakan media CivicCourt pada kasus dugaan pelanggaran hak menyampaikan aspirasi siswa, peserta didik mampu:</p>
        <ol>
          <li>Menganalisis persoalan penyampaian aspirasi siswa dengan menghubungkan fakta kasus, hak dan kewajiban warga negara, nilai demokrasi, ketertiban sekolah, serta nilai-nilai Pancasila.</li>
          <li>Membedakan bukti yang mendukung pihak penggugat dan pihak tergugat berdasarkan relevansi bukti, keterkaitan dengan pokok perkara, serta kekuatan alasan yang digunakan.</li>
          <li>Mengevaluasi tindakan Forum Aspirasi Siswa dan Tim Ketertiban Sekolah berdasarkan bukti yang tersedia, hak menyampaikan pendapat, kewajiban menjaga ketertiban, prinsip keadilan, dan tanggung jawab warga negara.</li>
          <li>Merumuskan argumentasi berbasis bukti dalam bentuk klaim, bukti, alasan, dan sanggahan secara logis untuk menjelaskan apakah penghentian kegiatan aspirasi termasuk pembatasan hak atau tindakan menjaga ketertiban sekolah.</li>
          <li>Menyusun putusan atau rekomendasi penyelesaian kasus secara adil, demokratis, dan bertanggung jawab dengan mempertimbangkan fakta, bukti, nilai Pancasila, dasar hukum, hak siswa, serta kewajiban sekolah menjaga ketertiban.</li>
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
        <h3>🔴 Penggugat</h3>
        <h4>Identitas Pihak</h4>
        <p>Pihak penggugat adalah Forum Aspirasi Siswa SMA Nusantara Mandiri yang diwakili oleh Alya Rahmawati, kelas XII-1. Penggugat mengajukan keberatan karena kegiatan penyampaian aspirasi tentang fasilitas toilet, ruang baca, dan area kantin dihentikan oleh pihak sekolah.</p>
        <h4>Posisi Awal dalam Perkara</h4>
        <p>Penggugat menyatakan bahwa aspirasi siswa disampaikan secara damai, tertib, dan dilakukan saat jam istirahat. Penggugat juga menyampaikan bahwa sebelum kegiatan terbuka dilakukan, Forum Aspirasi Siswa sudah lebih dulu mengajukan surat permohonan audiensi kepada pihak kesiswaan.</p>
        <h4>Dalil Utama</h4>
        <p>Penggugat mendalilkan bahwa tindakan Tim Ketertiban Sekolah berpotensi membatasi hak siswa untuk menyampaikan aspirasi. Penggugat menilai bahwa pelepasan poster, pengambilan daftar tanda tangan, dan pemanggilan perwakilan siswa membuat siswa merasa takut dan ragu untuk menyampaikan pendapat.</p>
        <h4>Hal yang Perlu Dibuktikan</h4>
        <p>Penggugat perlu membuktikan bahwa kegiatan penyampaian aspirasi dilakukan secara damai, tidak merusak fasilitas, tidak menggunakan kata-kata kasar, dan tidak mengganggu proses belajar. Penggugat juga perlu menunjukkan bahwa tindakan pihak sekolah berdampak pada kebebasan siswa dalam menyampaikan pendapat.</p>
        <h4>Arah Pembuktian</h4>
        <p>Penggugat dapat mempertimbangkan bukti yang menunjukkan surat permohonan audiensi, pesan tindak lanjut kepada kesiswaan, poster aspirasi, daftar tanda tangan dukungan, dokumentasi kegiatan, video pembacaan aspirasi, keterangan saksi siswa, serta catatan keberatan atas pelepasan poster dan pemanggilan perwakilan siswa.</p>`
      },
      { label:'Posisi Tergugat', icon:'🔵', html:`
        <h3>🔵 Tergugat</h3>
        <h4>Identitas Pihak</h4>
        <p>Pihak tergugat adalah Tim Ketertiban Sekolah SMA Nusantara Mandiri yang diwakili oleh Bapak Arman Saputra, Wakasek Kesiswaan. Tergugat menjadi pihak yang diminta memberikan tanggapan atas penghentian kegiatan penyampaian aspirasi siswa pada tanggal 15 Maret 2026.</p>
        <h4>Posisi Awal dalam Perkara</h4>
        <p>Tergugat menyatakan bahwa pihak sekolah tidak melarang siswa menyampaikan aspirasi. Namun, setiap kegiatan yang melibatkan banyak siswa di lingkungan sekolah harus tetap mengikuti prosedur, mendapat izin resmi, dan tidak mengganggu ketertiban sekolah.</p>
        <h4>Dalil Utama</h4>
        <p>Tergugat mendalilkan bahwa penghentian kegiatan dilakukan untuk menjaga ketertiban, bukan untuk membungkam aspirasi siswa. Tergugat menilai kegiatan tersebut belum mendapat izin resmi, mulai menarik perhatian banyak siswa, dan perlu diarahkan ke forum dialog yang lebih tertib.</p>
        <h4>Hal yang Perlu Dibuktikan</h4>
        <p>Tergugat perlu membuktikan bahwa tindakan penghentian dilakukan karena alasan ketertiban dan prosedur sekolah. Tergugat juga perlu menunjukkan bahwa pihak sekolah tetap membuka ruang dialog, tidak menolak aspirasi, dan tidak menjatuhkan sanksi langsung kepada siswa selama proses klarifikasi.</p>
        <h4>Arah Pembuktian</h4>
        <p>Tergugat dapat mempertimbangkan bukti yang menunjukkan tata tertib sekolah, surat audiensi yang belum mendapat disposisi resmi, catatan Tim Ketertiban, foto keramaian di halaman sekolah, poster yang dipasang di area tidak diperbolehkan, pengumuman jadwal dialog, keterangan guru piket, serta catatan klarifikasi awal dengan perwakilan Forum Aspirasi Siswa.</p>` }
    ]
  },

  // Placeholder sections - will be extended
  'dasar-hukum': {
    title:'Dasar Hukum dan Nilai Pancasila', icon:'⚖️', render:'tabs',
    tabs:[
      { label:'Dasar Hukum', icon:'📜', html:`
        <h3>📜 Dasar Hukum</h3>
        <p>Dasar hukum ini digunakan untuk menilai apakah penghentian kegiatan aspirasi siswa oleh pihak sekolah merupakan pembatasan hak menyampaikan pendapat atau tindakan yang masih dapat dibenarkan untuk menjaga ketertiban sekolah. Peserta didik perlu menghubungkan dasar hukum ini dengan bukti penggugat, bukti tergugat, posisi Forum Aspirasi Siswa, posisi Tim Ketertiban Sekolah, dan alasan dalam putusan.</p>
        <ol>
          <li><strong>UUD NRI Tahun 1945 Pasal 28E ayat (3)</strong><br><strong>Isi Pokok:</strong> Setiap orang berhak atas kebebasan berserikat, berkumpul, dan mengeluarkan pendapat. Hak ini menjadi dasar bahwa siswa boleh menyampaikan aspirasi, pendapat, atau keberatan secara terbuka dan bertanggung jawab.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini berkaitan dengan posisi Forum Aspirasi Siswa SMA Nusantara Mandiri yang diwakili oleh Alya Rahmawati, kelas XII-1. Penggugat dapat menggunakan dasar hukum ini untuk menunjukkan bahwa siswa memiliki hak menyampaikan aspirasi tentang fasilitas toilet, ruang baca, dan area kantin.</li>
          <li><strong>UUD NRI Tahun 1945 Pasal 28J ayat (1) dan ayat (2)</strong><br><strong>Isi Pokok:</strong> Setiap orang wajib menghormati hak orang lain. Dalam menggunakan hak dan kebebasannya, seseorang juga harus memperhatikan batas yang ditetapkan undang-undang, moral, ketertiban umum, dan kepentingan bersama.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini berkaitan dengan posisi Tim Ketertiban Sekolah yang diwakili oleh Bapak Arman Saputra selaku Wakasek Kesiswaan. Tergugat dapat menggunakan dasar hukum ini untuk menjelaskan bahwa penyampaian aspirasi tetap harus tertib, mengikuti prosedur, dan tidak mengganggu kegiatan sekolah.</li>
          <li><strong>UU No. 9 Tahun 1998 tentang Kemerdekaan Menyampaikan Pendapat di Muka Umum</strong><br><strong>Isi Pokok:</strong> Undang-undang ini mengatur bahwa warga negara memiliki hak menyampaikan pendapat di muka umum, tetapi pelaksanaannya harus seimbang dengan kewajiban menjaga ketertiban, menghormati hak orang lain, mematuhi hukum, serta mengutamakan musyawarah dan mufakat.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini dapat digunakan untuk menilai dua sisi perkara. Dari sisi penggugat, siswa berhak menyampaikan aspirasi secara damai. Dari sisi tergugat, pihak sekolah dapat menilai apakah kegiatan tersebut sudah mengikuti prosedur, tidak menimbulkan kerumunan yang mengganggu, dan tetap menjaga ketertiban sekolah.</li>
          <li><strong>UU No. 39 Tahun 1999 tentang Hak Asasi Manusia</strong><br><strong>Isi Pokok:</strong> Undang-undang ini mengatur perlindungan hak asasi manusia, termasuk hak atas kebebasan pribadi, pikiran, sikap, dan hak untuk menyampaikan pendapat. Namun, pelaksanaan hak tersebut tetap dapat dibatasi untuk menghormati hak orang lain, kesusilaan, ketertiban umum, dan kepentingan bangsa.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini membantu peserta didik memahami bahwa hak siswa untuk menyampaikan aspirasi harus dihormati, tetapi tidak boleh dilakukan dengan cara yang mengabaikan ketertiban sekolah. Dasar hukum ini juga membantu menilai apakah tindakan sekolah terlalu membatasi hak siswa atau masih berada dalam batas pembinaan.</li>
          <li><strong>Permendikdasmen No. 6 Tahun 2026 tentang Budaya Sekolah Aman dan Nyaman</strong><br><strong>Isi Pokok:</strong> Peraturan ini mengatur pentingnya budaya sekolah yang aman dan nyaman, termasuk pelindungan fisik, kesejahteraan psikologis, keamanan sosiokultural, keadaban, serta lingkungan belajar yang kondusif bagi warga sekolah.<br><strong>Kaitan dengan Kasus:</strong> Aturan ini berkaitan dengan kewajiban sekolah menjaga lingkungan yang aman dan tertib, tetapi juga tetap memperhatikan partisipasi dan kenyamanan peserta didik. Dalam kasus ini, peserta didik perlu menilai apakah tindakan Tim Ketertiban Sekolah benar-benar bertujuan menjaga suasana belajar atau justru membuat siswa merasa takut menyampaikan aspirasi.</li>
        </ol>`
      },
      { label:'Nilai Pancasila', icon:'⭐', html:`
        <h3>⭐ Nilai Pancasila dalam Kasus</h3>
        <p>Nilai Pancasila digunakan sebagai pertimbangan dalam menilai apakah tindakan para pihak sudah mencerminkan sikap demokratis, adil, tertib, dan bertanggung jawab. Peserta didik perlu menghubungkan nilai Pancasila dengan bukti penggugat, bukti tergugat, dasar hukum, posisi Forum Aspirasi Siswa, dan tindakan Tim Ketertiban Sekolah sebelum menyusun putusan.</p>
        <ol>
          <li><strong>Sila Kedua: Kemanusiaan yang Adil dan Beradab</strong><br><strong>Makna Nilai:</strong> Setiap orang harus diperlakukan secara adil, manusiawi, dan bermartabat. Hak untuk menyampaikan pendapat perlu dihargai, tetapi tetap dilakukan dengan cara yang sopan dan bertanggung jawab.<br><strong>Kaitan dengan Kasus:</strong> Nilai ini berkaitan dengan posisi Forum Aspirasi Siswa SMA Nusantara Mandiri yang diwakili oleh Alya Rahmawati, kelas XII-1. Penggugat merasa bahwa pelepasan poster, pengambilan daftar tanda tangan, dan pemanggilan perwakilan siswa membuat siswa merasa takut untuk menyampaikan aspirasi.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai apakah tindakan Tim Ketertiban Sekolah sudah memperlakukan siswa secara adil dan beradab, atau justru membuat siswa merasa dibatasi dalam menyampaikan pendapat. Hakim juga perlu melihat apakah siswa menyampaikan aspirasi dengan cara yang damai dan tidak merugikan pihak lain.</li>
          <li><strong>Sila Ketiga: Persatuan Indonesia</strong><br><strong>Makna Nilai:</strong> Setiap warga sekolah perlu menjaga persatuan, ketertiban, dan suasana belajar yang aman. Perbedaan pendapat tidak boleh menimbulkan konflik atau mengganggu kepentingan bersama.<br><strong>Kaitan dengan Kasus:</strong> Kegiatan penyampaian aspirasi tentang fasilitas toilet, ruang baca, dan area kantin melibatkan banyak siswa. Di satu sisi, aspirasi tersebut merupakan bentuk kepedulian terhadap sekolah. Di sisi lain, pihak sekolah menilai kegiatan tersebut perlu diatur agar tidak menimbulkan kerumunan atau mengganggu ketertiban.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu mempertimbangkan apakah kegiatan aspirasi siswa masih berjalan tertib atau sudah menimbulkan gangguan di lingkungan sekolah. Putusan harus menjaga hak siswa untuk bersuara, tetapi juga tetap memperhatikan ketertiban dan kepentingan seluruh warga sekolah.</li>
          <li><strong>Sila Keempat: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan</strong><br><strong>Makna Nilai:</strong> Perbedaan pendapat sebaiknya diselesaikan melalui dialog, musyawarah, dan pertimbangan yang bijaksana. Setiap keputusan perlu memberi ruang kepada pihak-pihak yang berkepentingan untuk menyampaikan alasan dan bukti.<br><strong>Kaitan dengan Kasus:</strong> Nilai ini menjadi inti dalam Kasus 3. Forum Aspirasi Siswa sudah mengajukan permohonan audiensi, sedangkan pihak sekolah menyatakan bahwa kegiatan belum mendapat disposisi resmi dan perlu diarahkan ke forum dialog yang lebih tertib.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai apakah pihak sekolah sudah memberi ruang dialog yang cukup bagi siswa. Hakim juga perlu mempertimbangkan apakah siswa sudah mengikuti prosedur yang berlaku sebelum melakukan kegiatan penyampaian aspirasi secara terbuka.</li>
          <li><strong>Sila Kelima: Keadilan Sosial bagi Seluruh Rakyat Indonesia</strong><br><strong>Makna Nilai:</strong> Setiap pihak berhak memperoleh keadilan. Siswa berhak menyampaikan aspirasi, sedangkan sekolah juga memiliki tanggung jawab menjaga keamanan, ketertiban, dan kelancaran kegiatan belajar.<br><strong>Kaitan dengan Kasus:</strong> Penggugat meminta agar aspirasi siswa tentang fasilitas sekolah didengar. Tergugat, yaitu Tim Ketertiban Sekolah yang diwakili Bapak Arman Saputra selaku Wakasek Kesiswaan, menyatakan bahwa tindakan penghentian dilakukan untuk menjaga ketertiban dan prosedur sekolah.<br><strong>Pertimbangan dalam Putusan:</strong> Hakim perlu menilai bukti dari kedua pihak secara seimbang. Putusan yang adil bukan hanya menentukan siapa yang benar atau salah, tetapi juga memberikan penyelesaian yang memungkinkan aspirasi siswa tetap didengar melalui mekanisme yang tertib, aman, dan bertanggung jawab.</li>
        </ol>
        <div class="highlight-box"><strong>Kesimpulan:</strong> Menyampaikan aspirasi adalah hak warga negara. Namun, hak tersebut harus digunakan secara tertib dan bertanggung jawab. Putusan yang adil harus mempertimbangkan hak siswa, aturan sekolah, ketertiban, dan nilai Pancasila.</div>` }
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
      { num:1, title:'Surat Permohonan Audiensi Forum Aspirasi Siswa', img:'kasus 3/berkas bukti/bukti penggugat/1.jpeg',
        desc:'Bukti ini memperlihatkan surat permohonan audiensi yang diajukan oleh Forum Aspirasi Siswa SMA Nusantara Mandiri kepada pihak kesiswaan pada tanggal 12 Maret 2026. Surat tersebut berisi permintaan dialog mengenai perbaikan fasilitas toilet, ruang baca, dan area kantin sekolah.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa siswa telah menempuh jalur resmi sebelum menyampaikan aspirasi secara terbuka di lingkungan sekolah.' },
      { num:2, title:'Tangkapan Layar Pesan Pengajuan Audiensi kepada Kesiswaan', img:'kasus 3/berkas bukti/bukti penggugat/2.jpeg',
        desc:'Bukti ini memperlihatkan pesan dari perwakilan Forum Aspirasi Siswa kepada pihak kesiswaan untuk menanyakan tindak lanjut surat audiensi yang telah diserahkan sebelumnya.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa siswa masih berupaya meminta kepastian melalui komunikasi yang baik sebelum kegiatan penyampaian aspirasi dilakukan secara terbuka.' },
      { num:3, title:'Poster Aspirasi yang Dipasang di Sekitar Mading Sekolah', img:'kasus 3/berkas bukti/bukti penggugat/3.jpeg',
        desc:'Bukti ini memperlihatkan poster aspirasi yang dipasang siswa di sekitar mading sekolah pada tanggal 14 Maret 2026. Poster tersebut memuat kalimat ajakan seperti “Kami Butuh Fasilitas yang Layak” dan “Dengarkan Aspirasi Siswa.”',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa aspirasi disampaikan melalui tulisan yang bersifat damai, tidak memuat ancaman, hinaan, atau ajakan merusak fasilitas sekolah.' },
      { num:4, title:'Daftar Tanda Tangan Dukungan Siswa', img:'kasus 3/berkas bukti/bukti penggugat/4.jpeg',
        desc:'Bukti ini memperlihatkan daftar tanda tangan siswa yang mendukung adanya dialog mengenai perbaikan fasilitas toilet, ruang baca, dan area kantin sekolah. Daftar dukungan tersebut dikumpulkan pada tanggal 15 Maret 2026 saat jam istirahat.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa aspirasi tersebut bukan hanya kepentingan pribadi Alya Rahmawati, tetapi merupakan kepedulian bersama dari sejumlah siswa.' },
      { num:5, title:'Foto Kegiatan Penyampaian Pernyataan di Halaman Sekolah', img:'kasus 3/berkas bukti/bukti penggugat/5.jpeg',
        desc:'Bukti ini memperlihatkan kegiatan Forum Aspirasi Siswa saat membacakan pernyataan singkat di halaman sekolah pada jam istirahat. Dalam dokumentasi tersebut, siswa terlihat berkumpul tanpa membawa benda berbahaya, tanpa melakukan kekerasan, dan tanpa merusak fasilitas sekolah.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa penyampaian aspirasi berlangsung secara damai dan masih berada dalam bentuk penyampaian pendapat yang wajar.' },
      { num:6, title:'Video Singkat Pembacaan Aspirasi Siswa', img:'kasus 3/berkas bukti/bukti penggugat/6.mp4',
        desc:'Bukti ini merupakan potongan dokumentasi video saat Alya Rahmawati, perwakilan Forum Aspirasi Siswa, membacakan aspirasi mengenai perbaikan toilet, ruang baca, dan area kantin sekolah.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa isi aspirasi berkaitan dengan kepentingan lingkungan belajar dan disampaikan melalui pernyataan yang tertib, bukan melalui tindakan yang mengarah pada keributan.' },
      { num:7, title:'Keterangan Saksi Siswa yang Mengikuti Kegiatan', img:'kasus 3/berkas bukti/bukti penggugat/7.jpeg',
        desc:'Bukti ini berupa keterangan saksi siswa yang hadir saat kegiatan penyampaian aspirasi berlangsung. Saksi menyampaikan bahwa kegiatan dilakukan pada jam istirahat, tidak menggunakan kata-kata kasar, tidak mengganggu kelas yang sedang belajar, dan tidak menimbulkan kerusakan fasilitas sekolah.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa kegiatan siswa berlangsung secara tertib sehingga alasan penghentian kegiatan perlu diperiksa kembali secara objektif.' },
      { num:8, title:'Catatan Keberatan atas Pelepasan Poster dan Pemanggilan Perwakilan Siswa', img:'kasus 3/berkas bukti/bukti penggugat/8.jpeg',
        desc:'Bukti ini berupa catatan keberatan dari Forum Aspirasi Siswa setelah poster aspirasi dilepas, daftar tanda tangan diminta, dan perwakilan siswa dipanggil ke ruang kesiswaan.',
        question:'Bukti ini digunakan oleh pihak penggugat untuk menunjukkan bahwa tindakan pihak sekolah menimbulkan rasa takut dan ragu di kalangan siswa dalam menyampaikan pendapat, terutama karena siswa merasa belum mendapat penjelasan yang jelas mengenai tindakan tersebut.' }
    ],
    tergugat:[
      { num:1, title:'Tata Tertib Sekolah tentang Penyampaian Pendapat dan Kegiatan Siswa', img:'kasus 3/berkas bukti/bukti tergugat/1.jpeg',
        desc:'Bukti ini memperlihatkan ketentuan tata tertib sekolah mengenai kegiatan siswa di lingkungan sekolah. Dalam ketentuan tersebut, setiap kegiatan yang melibatkan banyak siswa harus mendapat izin, tidak boleh mengganggu ketertiban, dan perlu dikoordinasikan dengan wali kelas, OSIS, atau pihak kesiswaan.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa sekolah memiliki dasar aturan dalam mengatur kegiatan siswa agar tetap tertib dan tidak mengganggu proses belajar.' },
      { num:2, title:'Surat Audiensi Belum Mendapat Disposisi Resmi', img:'kasus 3/berkas bukti/bukti tergugat/2.jpeg',
        desc:'Bukti ini memperlihatkan catatan administrasi kesiswaan yang menunjukkan bahwa surat permohonan audiensi dari Forum Aspirasi Siswa masih dalam proses penjadwalan dan belum memperoleh disposisi resmi sebagai kegiatan terbuka di halaman sekolah.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa pihak sekolah tidak menolak aspirasi, tetapi masih memproses permohonan audiensi sehingga siswa seharusnya menunggu jawaban resmi sebelum melakukan kegiatan terbuka.' },
      { num:3, title:'Catatan Tim Ketertiban tentang Kerumunan Siswa', img:'kasus 3/berkas bukti/bukti tergugat/3.jpeg',
        desc:'Bukti ini berupa catatan Tim Ketertiban Sekolah pada tanggal 15 Maret 2026. Dalam catatan tersebut dijelaskan bahwa kegiatan pengumpulan tanda tangan dan pembacaan pernyataan menarik perhatian banyak siswa sehingga area halaman menjadi ramai.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa penghentian kegiatan dilakukan sebagai upaya mengendalikan situasi sekolah dan mencegah kerumunan berkembang lebih besar.' },
      { num:4, title:'Foto Keramaian di Halaman Sekolah saat Jam Istirahat', img:'kasus 3/berkas bukti/bukti tergugat/4.jpeg',
        desc:'Bukti ini memperlihatkan situasi halaman sekolah ketika kegiatan penyampaian aspirasi berlangsung. Dalam dokumentasi tersebut, terlihat banyak siswa berkumpul dan sebagian siswa berhenti di sekitar lokasi kegiatan untuk melihat jalannya penyampaian aspirasi.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa kegiatan mulai menarik massa dan berpotensi mengganggu ketertiban sekolah apabila tidak segera diarahkan ke forum dialog yang lebih tertib.' },
      { num:5, title:'Poster Dipasang di Area yang Tidak Diperbolehkan', img:'kasus 3/berkas bukti/bukti tergugat/5.jpeg',
        desc:'Bukti ini memperlihatkan beberapa poster aspirasi yang dipasang di area yang tidak termasuk papan pengumuman resmi, seperti dinding sekitar sekolah, area dekat tangga, atau tempat yang belum mendapat izin pemasangan.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa pelepasan poster dilakukan karena alasan tata tertib dan ketentuan pemasangan informasi di lingkungan sekolah, bukan semata-mata karena pihak sekolah menolak isi aspirasi siswa.' },
      { num:6, title:'Pengumuman Kesiswaan tentang Jadwal Dialog', img:'kasus 3/berkas bukti/bukti tergugat/6.jpeg',
        desc:'Bukti ini memperlihatkan pengumuman dari pihak kesiswaan yang menyatakan bahwa sekolah bersedia menerima perwakilan Forum Aspirasi Siswa dalam forum dialog resmi pada jadwal yang ditentukan.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa sekolah tetap membuka ruang penyampaian aspirasi, tetapi mengarahkan aspirasi tersebut agar disampaikan melalui forum yang lebih tertib dan terkoordinasi.' },
      { num:7, title:'Keterangan Guru Piket tentang Situasi Sekolah', img:'kasus 3/berkas bukti/bukti tergugat/7.jpeg',
        desc:'Bukti ini berupa keterangan guru piket mengenai situasi sekolah saat kegiatan berlangsung. Guru piket menyampaikan bahwa beberapa siswa mulai berkumpul di luar area yang seharusnya, sebagian siswa terlambat kembali ke kelas, dan suasana halaman menjadi kurang terkendali.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa tindakan penghentian kegiatan dilakukan sebagai bentuk pengaturan situasi sekolah agar aktivitas belajar tetap berjalan tertib.' },
      { num:8, title:'Catatan Klarifikasi Awal dengan Perwakilan Forum Aspirasi Siswa', img:'kasus 3/berkas bukti/bukti tergugat/8.jpeg',
        desc:'Bukti ini memperlihatkan catatan klarifikasi awal antara Wakasek Kesiswaan, Tim Ketertiban Sekolah, dan perwakilan Forum Aspirasi Siswa. Dalam catatan tersebut, pihak sekolah menjelaskan bahwa poster dan daftar tanda tangan diamankan sementara agar situasi tidak berkembang menjadi kerumunan yang lebih besar.',
        question:'Bukti ini digunakan oleh pihak tergugat untuk menunjukkan bahwa pihak sekolah masih membuka ruang dialog resmi, tidak menjatuhkan sanksi secara langsung, dan mengarahkan penyelesaian melalui klarifikasi serta pembinaan.' }
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
        key: 'lkpd-kasus3',
        label: 'LKPD Kasus 3',
        icon: '📄',
        tabs: [
          {
            label: 'Panduan LKPD', icon: '📝', html: `
              <h3>📝 LKPD Kasus 3</h3>
              <p>LKPD Kasus 3 digunakan untuk membantu peserta didik memahami kembali perkara Forum Aspirasi Siswa SMA Nusantara Mandiri yang menyampaikan aspirasi tentang fasilitas toilet, ruang baca, dan area kantin, tetapi kegiatan tersebut dihentikan oleh Tim Ketertiban Sekolah. Melalui LKPD ini, peserta didik diajak menilai secara seimbang apakah tindakan tersebut merupakan pembatasan hak menyampaikan pendapat atau bagian dari upaya menjaga ketertiban sekolah.</p>
              <h4>📋 Langkah Pengerjaan LKPD:</h4>
              <ol>
                <li>Baca kembali pokok perkara Kasus 3 tentang dugaan pelanggaran hak menyampaikan aspirasi siswa.</li>
                <li>Pahami posisi penggugat, yaitu Forum Aspirasi Siswa, dan posisi tergugat, yaitu Tim Ketertiban Sekolah.</li>
                <li>Periksa bukti dari kedua pihak, seperti surat permohonan audiensi, pesan pengajuan, poster aspirasi, tanda tangan dukungan, dokumentasi kegiatan, tata tertib sekolah, catatan kerumunan, dan pengumuman jadwal dialog.</li>
                <li>Jawab setiap pertanyaan dengan menghubungkan fakta kasus, bukti, hak menyampaikan pendapat, kewajiban menjaga ketertiban, nilai demokrasi, nilai Pancasila, dan dasar hukum yang relevan.</li>
                <li>Susun jawaban kelompok secara adil dengan mempertimbangkan kepentingan siswa yang ingin menyampaikan aspirasi dan kewajiban sekolah menjaga ketertiban lingkungan belajar.</li>
              </ol>
              <h4>🛡️ Fokus Pembelajaran:</h4>
              <p>Melalui LKPD ini, peserta didik diarahkan untuk menganalisis persoalan penyampaian aspirasi siswa, membedakan bukti yang mendukung penggugat dan tergugat, mengevaluasi tindakan Forum Aspirasi Siswa dan Tim Ketertiban Sekolah, menyusun argumentasi berbasis bukti mengenai pembatasan hak atau pengaturan ketertiban, serta merumuskan rekomendasi penyelesaian yang adil, demokratis, bertanggung jawab, dan sesuai dengan nilai Pancasila.</p>
              <p style="font-style:italic;color:var(--gold-light);margin-top:10px;">Unduh LKPD pada halaman berikutnya</p>
            `
          },
          {
            label: 'Unduh LKPD', icon: '📄', html: `
              <h3>📄 LKPD Kasus 3 (PDF)</h3>
              <p>Klik tombol di bawah ini untuk melihat atau mengunduh LKPD Kasus 3.</p>
              <div style="text-align:center;margin:20px 0">
                <a href="assets/pdf/LKPD_Kasus_3.pdf" target="_blank" style="display:inline-block;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#2a7a6a,#3daa94);color:#fff;font-family:Cinzel,serif;font-weight:700;font-size:.95rem;text-decoration:none;border:2px solid #d4a843;box-shadow:0 4px 0 rgba(0,0,0,.3)">📥 Lihat / Unduh PDF</a>
              </div>
              <div style="border:2px solid #d4a843;border-radius:12px;overflow:hidden;margin-top:16px;background:#fff">
                <iframe src="assets/pdf/LKPD_Kasus_3.pdf" width="100%" height="600" style="border:none;display:block"></iframe>
              </div>
            `
          }
        ]
      },
      {
        key: 'quiz-kasus3',
        label: 'Quiz Kasus 3',
        icon: '🔍',
        tabs: [
          {
            label: 'Quiz Refleksi', icon: '🔍',
            intro: {
              title: "Quiz Refleksi Kasus 3",
              subtitle: "Dugaan Pelanggaran Hak Menyampaikan Aspirasi Siswa",
              desc: "Quiz ini digunakan untuk menguatkan pemahaman peserta didik setelah mengikuti simulasi sidang CivicCourt. Melalui quiz ini, peserta didik diajak menalar kembali fakta kasus, bukti penggugat, bukti tergugat, hak menyampaikan pendapat, ketertiban sekolah, nilai Pancasila, dasar hukum, serta rekomendasi penyelesaian yang adil.",
              petunjuk: [
                "Bacalah setiap soal dengan cermat.",
                "Diskusikan jawaban secara singkat bersama kelompok.",
                "Pilih jawaban yang paling tepat berdasarkan fakta, bukti, dan alasan yang kuat.",
                "Kelompok yang menjawab benar akan memperoleh poin.",
                "Jawaban harus mempertimbangkan hak siswa dan kewajiban sekolah secara seimbang."
              ],
              fokus: [
                "Mengidentifikasi isu publik dalam penyampaian aspirasi siswa.",
                "Membedakan bukti yang mendukung penggugat dan tergugat.",
                "Mengevaluasi tindakan Forum Aspirasi Siswa dan Tim Ketertiban Sekolah.",
                "Menyusun argumentasi berbasis klaim, bukti, alasan, dan sanggahan.",
                "Menentukan putusan atau rekomendasi yang adil, demokratis, dan bertanggung jawab."
              ],
              note: "Ingat: jawaban yang baik bukan hanya cepat, tetapi mampu menghubungkan kasus, bukti, hak, ketertiban, nilai Pancasila, dasar hukum, dan keadilan bagi semua pihak."
            },
            quiz: [
              {
                question: "Dalam sidang, penggugat menunjukkan adanya surat permohonan audiensi, pesan tindak lanjut kepada kesiswaan, dan dokumentasi pembacaan aspirasi siswa. Sementara itu, tergugat menunjukkan bahwa surat audiensi belum mendapat disposisi resmi dan kegiatan mulai menimbulkan keramaian. Penilaian yang paling tepat adalah ....",
                options: [
                  "kegiatan siswa pasti melanggar aturan karena belum mendapat disposisi resmi",
                  "sekolah pasti membatasi hak siswa karena kegiatan dihentikan oleh Tim Ketertiban",
                  "hakim perlu menilai usaha siswa menyampaikan aspirasi, prosedur sekolah, kondisi ketertiban, dan bukti dari kedua pihak secara seimbang",
                  "hak menyampaikan aspirasi selalu lebih kuat daripada aturan sekolah"
                ],
                answer: "C"
              },
              {
                question: "Bukti yang paling tepat untuk mendukung posisi penggugat bahwa siswa telah berusaha menyampaikan aspirasi secara baik adalah ....",
                options: [
                  "catatan Tim Ketertiban tentang kerumunan siswa",
                  "tata tertib sekolah tentang kegiatan siswa",
                  "surat permohonan audiensi dan pesan pengajuan kepada kesiswaan",
                  "poster yang dipasang di area yang tidak diperbolehkan"
                ],
                answer: "C"
              },
              {
                question: "Dalam kasus ini, nilai demokrasi paling tepat dipahami sebagai ....",
                options: [
                  "kebebasan siswa melakukan kegiatan apa pun tanpa pemberitahuan kepada sekolah",
                  "kesempatan siswa menyampaikan pendapat disertai tanggung jawab untuk tetap tertib dan mengikuti mekanisme sekolah",
                  "kewenangan sekolah menghentikan semua kegiatan siswa demi ketertiban",
                  "hak siswa untuk menolak semua aturan yang dianggap membatasi aspirasi"
                ],
                answer: "B"
              },
              {
                question: "Jika Tim Ketertiban Sekolah menyatakan bahwa penghentian kegiatan dilakukan karena muncul kerumunan dan belum ada izin resmi, bukti yang paling mendukung posisi tergugat adalah ....",
                options: [
                  "daftar tanda tangan dukungan siswa",
                  "video pembacaan aspirasi siswa",
                  "catatan Tim Ketertiban dan foto keramaian di halaman sekolah",
                  "catatan keberatan Forum Aspirasi Siswa"
                ],
                answer: "C"
              },
              {
                question: "Argumentasi berikut yang paling kuat untuk mendukung posisi penggugat adalah ....",
                options: [
                  "kegiatan aspirasi siswa harus selalu diterima karena siswa memiliki hak menyampaikan pendapat",
                  "penghentian kegiatan patut dipersoalkan karena terdapat bukti permohonan audiensi, aspirasi disampaikan secara damai, dan tindakan sekolah membuat siswa merasa takut menyampaikan pendapat",
                  "sekolah tidak boleh membuat aturan karena aspirasi siswa lebih penting",
                  "Forum Aspirasi Siswa pasti benar karena diwakili oleh Alya Rahmawati kelas XII-1"
                ],
                answer: "B"
              },
              {
                question: "Sanggahan paling logis dari pihak tergugat terhadap dalil penggugat adalah ....",
                options: [
                  "siswa tidak memiliki hak menyampaikan pendapat di lingkungan sekolah",
                  "kegiatan aspirasi tidak perlu didengar karena fasilitas sekolah bukan urusan siswa",
                  "sekolah tidak menolak aspirasi, tetapi kegiatan terbuka perlu mengikuti prosedur, menunggu disposisi resmi, dan diarahkan ke forum dialog yang tertib",
                  "poster aspirasi cukup menjadi alasan untuk memberi sanksi kepada seluruh siswa"
                ],
                answer: "C"
              },
              {
                question: "Dalam menyusun putusan, hakim perlu membedakan antara pembatasan hak dan pengaturan ketertiban. Perbedaan yang paling tepat adalah ....",
                options: [
                  "pembatasan hak selalu benar, sedangkan pengaturan ketertiban selalu salah",
                  "pembatasan hak terjadi jika aspirasi ditutup tanpa ruang dialog, sedangkan pengaturan ketertiban dapat dibenarkan jika tetap memberi ruang aspirasi melalui prosedur yang adil",
                  "pengaturan ketertiban berarti sekolah boleh menolak semua bentuk aspirasi siswa",
                  "pembatasan hak hanya terjadi jika ada hukuman tertulis dari sekolah"
                ],
                answer: "B"
              },
              {
                question: "Bukti berupa pengumuman jadwal dialog dan catatan klarifikasi awal dengan perwakilan Forum Aspirasi Siswa paling tepat digunakan untuk menunjukkan bahwa ....",
                options: [
                  "sekolah sama sekali tidak memberi ruang kepada siswa",
                  "pihak sekolah berupaya mengarahkan aspirasi ke mekanisme yang lebih tertib",
                  "Forum Aspirasi Siswa tidak memiliki alasan menyampaikan aspirasi",
                  "kegiatan aspirasi pasti mengganggu kegiatan belajar"
                ],
                answer: "B"
              },
              {
                question: "Rekomendasi penyelesaian yang paling sesuai dengan prinsip demokratis, adil, dan bertanggung jawab adalah ....",
                options: [
                  "melarang Forum Aspirasi Siswa menyampaikan pendapat agar sekolah tetap tertib",
                  "membiarkan siswa menyampaikan aspirasi tanpa aturan agar tidak dianggap membatasi hak",
                  "membuka forum dialog resmi, menjadwalkan audiensi, mengatur prosedur penyampaian aspirasi, dan memastikan siswa tidak diberi tekanan karena menyampaikan pendapat secara tertib",
                  "meminta siswa menghapus semua poster tanpa membahas isi aspirasi"
                ],
                answer: "C"
              },
              {
                question: "Dalam Lembar Putusan Hakim, pertimbangan yang paling lengkap untuk Kasus 3 adalah ....",
                options: [
                  "hakim cukup melihat apakah kegiatan dihentikan atau tidak",
                  "hakim cukup melihat apakah siswa sudah menandatangani daftar dukungan",
                  "hakim mempertimbangkan fakta kasus, bukti penggugat dan tergugat, hak menyampaikan pendapat, kewajiban menjaga ketertiban, dasar hukum, nilai Pancasila, serta kepentingan warga sekolah",
                  "hakim cukup mengikuti pendapat pihak yang berbicara paling meyakinkan dalam sidang"
                ],
                answer: "C"
              }
            ],
            outro: {
              title: "Misi Kasus 3 Selesai",
              subtitle: "Dugaan Pelanggaran Hak Menyampaikan Aspirasi Siswa",
              desc: "Selamat! Kalian telah menyelesaikan misi simulasi CivicCourt Kasus 3. Kalian sudah mengikuti proses persidangan, menelaah bukti dari pihak Forum Aspirasi Siswa dan Tim Ketertiban Sekolah, serta menilai persoalan secara seimbang antara hak menyampaikan pendapat dan kewajiban menjaga ketertiban sekolah. Ketelitian kalian dalam membaca bukti, keberanian menyampaikan pendapat, dan kemampuan mempertimbangkan keadilan menunjukkan bahwa kalian mampu berpikir kritis sebagai warga negara yang demokratis dan bertanggung jawab.",
              moral: "Melalui kasus ini, kalian belajar bahwa aspirasi perlu disampaikan dengan cara yang tertib, sementara aturan sekolah juga harus dijalankan secara adil dan tetap memberi ruang bagi suara peserta didik.<br><br><strong>Terima kasih sudah menyelesaikan seluruh misi CivicCourt dengan baik. Kalian telah belajar menjadi warga negara yang kritis, adil, demokratis, dan bertanggung jawab.</strong>"
            }
          }
        ]
      }
    ]
  }
};
