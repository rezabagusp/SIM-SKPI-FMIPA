-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09 Agu 2017 pada 10.16
-- Versi Server: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skpi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `departemens`
--

CREATE TABLE `departemens` (
  `id` int(11) NOT NULL,
  `nama_departemen` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `departemens`
--

INSERT INTO `departemens` (`id`, `nama_departemen`, `createdAt`, `updatedAt`) VALUES
(1, 'Statistika', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(2, 'Geofisika dan Meteorologi', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(3, 'Biologi', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(4, 'Kimia', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(5, 'Matematika', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(6, 'Ilmu Komputer', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(7, 'Fisika', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(8, 'Biokimia', '2017-08-02 19:29:24', '2017-08-02 19:29:24'),
(9, 'fakultas', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ekstrakurikulers`
--

CREATE TABLE `ekstrakurikulers` (
  `id` int(11) NOT NULL,
  `nama_ekstrakurikuler` varchar(255) DEFAULT NULL,
  `tanggal_mulai` datetime DEFAULT NULL,
  `tanggal_selesai` datetime DEFAULT NULL,
  `kota` varchar(255) DEFAULT NULL,
  `negara` varchar(255) DEFAULT NULL,
  `bukti_ekstrakurikuler` varchar(255) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `status_verifikasi_ekstrakurikuler` int(11) DEFAULT '0',
  `fk_mahasiswa_id` int(11) DEFAULT NULL,
  `fk_tingkat_id` int(11) DEFAULT NULL,
  `fk_sub_kategori_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ekstrakurikulers`
--

INSERT INTO `ekstrakurikulers` (`id`, `nama_ekstrakurikuler`, `tanggal_mulai`, `tanggal_selesai`, `kota`, `negara`, `bukti_ekstrakurikuler`, `keterangan`, `status_verifikasi_ekstrakurikuler`, `fk_mahasiswa_id`, `fk_tingkat_id`, `fk_sub_kategori_id`, `createdAt`, `updatedAt`) VALUES
(4, 'drumer terbaik', '2017-08-22 07:00:00', '2017-08-24 07:00:00', 'Bogor', 'Indonesia', 'ed26b.jpg', NULL, 0, 1, 1, 3, '2017-08-02 19:32:26', '2017-08-08 09:00:59'),
(38, 'Mencari ilham', '2017-08-10 07:00:00', '2017-08-12 07:00:00', 'Bekasi', 'Indonesia', 'wbra5u.jpg', NULL, 0, 1, 3, 2, '2017-08-06 18:47:27', '2017-08-06 18:47:27'),
(39, 'jadi 6', '2017-08-11 07:00:00', '2017-08-06 07:00:00', 'aaaaaaa', 'ddddd', '72gb0r.pdf', NULL, 0, 1, 2, 3, '2017-08-06 18:48:02', '2017-08-06 18:48:02'),
(40, 'eee', '2017-08-11 07:00:00', '2017-08-13 07:00:00', 'eeeee', 'eee', '380rme.jpg', NULL, 0, 1, 2, 3, '2017-08-06 18:49:11', '2017-08-06 18:49:11'),
(41, 'eeeeee', '2017-08-10 07:00:00', '2017-08-12 07:00:00', 'eeeeee', 'eeeeee', 'jugjga.jpg', NULL, 0, 1, 1, 3, '2017-08-06 18:50:21', '2017-08-06 18:50:21'),
(42, 'eeeeeeeeeee', '2017-08-09 07:00:00', '2017-08-13 07:00:00', 'eeeee', 'wwww', 't0fr9o.jpg', NULL, 0, 1, 2, 4, '2017-08-06 18:50:48', '2017-08-06 18:50:48'),
(44, 'eerererere', '2017-08-20 07:00:00', '2017-08-19 07:00:00', '22222222', 'eeeeeee', 'v6jz6dh.jpg', NULL, 0, 1, 1, 3, '2017-08-06 18:52:00', '2017-08-06 18:52:00'),
(46, 'asl;dkfas;lfkjas', '2017-08-11 07:00:00', '2017-08-05 07:00:00', 'asdfasfa', 'asdfasdfa', 'rg6rkm.jpg', NULL, 0, 1, 3, 5, '2017-08-06 18:58:44', '2017-08-06 18:58:44'),
(47, 'asdfasfas', '2017-08-10 07:00:00', '2017-08-03 07:00:00', 'fdfdfd', 'dfdfdf', 'p0pg9h.jpg', NULL, 0, 1, 1, 2, '2017-08-06 18:59:45', '2017-08-06 18:59:45'),
(49, 'baru nihh', '2017-08-22 07:00:00', '2017-08-22 07:00:00', 'jajaran', 'jakaaaka', 'as;ldkfjas;ldf.jpg', 'Seriuan nii ??', 2, 2, 2, 1, '2017-08-06 20:32:21', '2017-08-09 15:06:32'),
(50, 'baru nihh', '2017-08-22 07:00:00', '2017-08-22 07:00:00', 'jajaran', 'jakaaaka', 'as;ldkfjas;ldf.jpg', 'gatau', 2, 2, 2, 1, '2017-08-06 20:32:24', '2017-08-09 10:37:34'),
(51, 'baru nihh', '2017-08-22 07:00:00', '2017-08-22 07:00:00', 'jajaran', 'jakaaaka', 'as;ldkfjas;ldf.jpg', 'Wah ternyata ada yang salah', 2, 2, 2, 1, '2017-08-06 20:32:25', '2017-08-08 09:11:33'),
(52, 'baru nihh', '2017-08-22 07:00:00', '2017-08-22 07:00:00', 'jajaran', 'jakaaaka', 'as;ldkfjas;ldf.jpg', 'entah kenapa', 2, 2, 2, 1, '2017-08-06 20:32:25', '2017-08-09 13:09:09'),
(53, 'baru nihh', '2017-08-22 07:00:00', '2017-08-22 07:00:00', 'jajaran', 'jakaaaka', 'as;ldkfjas;ldf.jpg', '', 1, 2, 2, 1, '2017-08-06 20:32:27', '2017-08-08 09:24:45'),
(54, 'baru nihh cegauww', '2017-08-22 07:00:00', '2017-08-22 07:00:00', 'jajaran', 'Belanda', 'as;ldkfjas;ldf.jpg', '', 1, 2, 2, 1, '2017-08-06 21:16:19', '2017-08-08 09:24:51'),
(56, 'Nama baru banget', '2017-08-10 07:00:00', '2017-08-18 07:00:00', 'Kota', 'Negara', '8p684.pdf', NULL, 0, 1, 3, 2, '2017-08-07 14:42:34', '2017-08-07 14:42:34'),
(57, 'drumer terbaik', '2017-08-22 07:00:00', NULL, 'Bogor', 'Indonesia', NULL, NULL, 0, 1, 1, 3, '2017-08-08 02:50:10', '2017-08-08 02:50:10'),
(58, 'baru nih', '2017-08-07 07:00:00', '2017-08-07 07:00:00', 'Jakardahh', 'jaka sembung', NULL, NULL, 0, 1, 1, 3, '2017-08-08 05:04:28', '2017-08-08 05:04:28'),
(59, 'kegiatan apa aja', '2017-08-07 07:00:00', '2017-08-07 07:00:00', 'bekjasi', 'bekjasi', '56r1jg.jpg', NULL, 0, 1, 2, 4, '2017-08-08 05:06:18', '2017-08-08 05:06:18'),
(60, 'drumer terbaik', '2017-08-22 07:00:00', '2017-08-24 07:00:00', 'Bogor', 'Indonesia', '0sy6a4.pdf', NULL, 0, 1, 1, 3, '2017-08-08 05:17:11', '2017-08-08 05:17:11'),
(61, 'nama update', '2017-08-22 07:00:00', '2017-08-24 07:00:00', 'Bogor', 'Indonesia', NULL, NULL, 0, 1, 1, 3, '2017-08-08 05:18:29', '2017-08-08 05:18:29'),
(62, 'Bismillah update 2', '2017-08-17 07:00:00', '2017-08-19 07:00:00', 'Bekasi', 'Indonesia', 'fqz09l.pdf', NULL, 0, 1, 1, 1, '2017-08-08 08:40:37', '2017-08-08 08:45:55'),
(63, 'Bismillah update', '2017-08-17 07:00:00', '2017-08-19 07:00:00', 'Bekasi', 'Indonesia', NULL, NULL, 0, 1, 1, 1, '2017-08-08 08:40:59', '2017-08-08 08:40:59'),
(64, 'sangatlah berhagara', '2017-08-25 07:00:00', '2017-08-13 07:00:00', 'bekasi', 'indonesia', NULL, NULL, 0, 1, 2, 2, '2017-08-08 08:43:09', '2017-08-08 08:43:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategoris`
--

CREATE TABLE `kategoris` (
  `id` int(11) NOT NULL,
  `nama_kategori` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kategoris`
--

INSERT INTO `kategoris` (`id`, `nama_kategori`, `createdAt`, `updatedAt`) VALUES
(1, 'Kegiatan kemahasiswaan', '2017-08-02 19:28:45', '2017-08-02 19:28:45'),
(2, 'Himpunan/Organisasi Profesi Kemahasiswaan', '2017-08-02 19:28:45', '2017-08-02 19:28:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswas`
--

CREATE TABLE `mahasiswas` (
  `id` int(11) NOT NULL,
  `nama_mahasiswa` varchar(255) DEFAULT NULL,
  `nim_mahasiswa` varchar(255) DEFAULT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `password_user` varchar(255) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `fk_departemen_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mahasiswas`
--

INSERT INTO `mahasiswas` (`id`, `nama_mahasiswa`, `nim_mahasiswa`, `nama_user`, `password_user`, `email_user`, `role`, `fk_departemen_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Reza Bagus Permana', 'G64140023', 'reza_bagusp', '264c8c381bf16c982a4e59b0dd4c6f7808c51a05f64c35db42cc78a2a72875bb', 'rezabaguspermana.rbp@gmail.com', 'mahasiswa', 6, '2017-08-02 19:29:48', '2017-08-02 19:29:48'),
(2, 'Nisa ayudiati', 'G14140012', 'nisa_ayudiati', '264c8c381bf16c982a4e59b0dd4c6f7808c51a05f64c35db42cc78a2a72875bb', 'nisa_ayudiati@gmail.com', 'mahasiswa', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `skors`
--

CREATE TABLE `skors` (
  `id` int(11) NOT NULL,
  `skor` int(11) DEFAULT NULL,
  `fk_sub_kategori_id` int(11) DEFAULT NULL,
  `fk_tingkat_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `skors`
--

INSERT INTO `skors` (`id`, `skor`, `fk_sub_kategori_id`, `fk_tingkat_id`, `createdAt`, `updatedAt`) VALUES
(1, 5, 1, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(2, 4, 2, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(3, 4, 3, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(4, 3, 4, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(5, 3, 5, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(6, 2, 6, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(7, 4, 1, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(8, 3, 2, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(9, 3, 3, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(10, 2, 4, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(11, 2, 5, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(12, 2, 6, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(13, 2, 1, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(14, 2, 2, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(15, 1, 3, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(16, 1, 4, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(17, 1, 5, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(18, 1, 6, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(19, 6, 7, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(20, 5, 8, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(21, 4, 9, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(22, 3, 10, 1, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(23, 5, 7, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(24, 4, 8, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(25, 3, 9, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(26, 2, 10, 2, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(27, 4, 7, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(28, 3, 8, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(29, 2, 9, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16'),
(30, 1, 10, 3, '2017-08-02 19:29:16', '2017-08-02 19:29:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_kategoris`
--

CREATE TABLE `sub_kategoris` (
  `id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `nama_sub_kategori` varchar(255) DEFAULT NULL,
  `fk_kategori_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `sub_kategoris`
--

INSERT INTO `sub_kategoris` (`id`, `value`, `nama_sub_kategori`, `fk_kategori_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Kompetisi ilmiah/kewirausahaan/kebudayaan/seni/olah raga', 1, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(2, 2, 'Magang/kerja praktek/mengajar/asistensi di luar kegiatan kurikuler', 1, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(3, 3, 'Presentasi dalam seminar/lokakarya/konferensi ', 1, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(4, 4, 'Tampil dalam kebudayaan/seni/olah raga', 1, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(5, 5, 'Ketua panitia dalam kegiatan kemahasiswaan', 1, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(6, 6, 'Anggota panitia/peserta seminar/lokakarya/konferensi', 1, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(7, 7, 'Sebagai ketua', 2, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(8, 8, 'Sebagai wakil ketua', 2, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(9, 9, 'Sebagai ketua seksi', 2, '2017-08-02 19:28:54', '2017-08-02 19:28:54'),
(10, 10, 'anggota', 2, '2017-08-02 19:28:54', '2017-08-02 19:28:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tingkats`
--

CREATE TABLE `tingkats` (
  `id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `nama_tingkat` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tingkats`
--

INSERT INTO `tingkats` (`id`, `value`, `nama_tingkat`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Internasional', '2017-08-02 19:29:09', '2017-08-02 19:29:09'),
(2, 2, 'Nasional', '2017-08-02 19:29:09', '2017-08-02 19:29:09'),
(3, 3, 'Lokal', '2017-08-02 19:29:09', '2017-08-02 19:29:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `password_user` varchar(255) DEFAULT NULL,
  `role` enum('admin','departemen','fakultas') DEFAULT NULL,
  `fk_departemen_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `nama_user`, `email_user`, `password_user`, `role`, `fk_departemen_id`, `createdAt`, `updatedAt`) VALUES
(1, 'dept1', 'dept1@gmail.com', '6aa5febaa3a4a3f4a57955998ecb2c930be8092a82cf4ac33a20a9c2bf1a343d', 'departemen', 1, '2017-08-02 19:29:55', '2017-08-02 19:29:55'),
(2, 'dept2', 'dept2@gmail.com', 'dept2', 'departemen', 2, '2017-08-02 19:29:55', '2017-08-02 19:29:55'),
(3, 'dept3', 'dept3@gmail.com', 'dept3', 'departemen', 3, '2017-08-02 19:29:55', '2017-08-02 19:29:55'),
(6, 'admin_fmipa', NULL, 'admin_fmipa', 'departemen', 8, '2017-08-03 11:24:41', '2017-08-03 11:24:41'),
(7, 'admin_fmipa', 'admin_fmipa@gmail.com', 'admin_fmipa', 'departemen', 8, '2017-08-03 11:25:43', '2017-08-03 11:25:43'),
(8, 'admin_fmipa', 'admin_fmipa@gmail.com', '098450b6eb842a56a560c812a9998028620300aabc8d34cba19d58e253a127f9', 'departemen', 9, '2017-08-03 11:28:03', '2017-08-03 11:28:03'),
(9, 'admin', 'admin@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'asdfadsf', 'asdfasfs', 'a335a7f67e2ffb0cbf075e488cd27187484a88bc62134f2110f0cbd9908b6070', 'departemen', 1, '2017-08-08 16:05:22', '2017-08-08 16:05:22'),
(13, 'fakultas', 'fakultas@gmail.com', '432829e5d286441084f58417153302429f8431191bd685709866cc442dd93de8', 'departemen', 9, '2017-08-09 10:07:55', '2017-08-09 10:07:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departemens`
--
ALTER TABLE `departemens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ekstrakurikulers`
--
ALTER TABLE `ekstrakurikulers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mahasiswa_id` (`fk_mahasiswa_id`),
  ADD KEY `fk_tingkat_id` (`fk_tingkat_id`),
  ADD KEY `fk_sub_kategori_id` (`fk_sub_kategori_id`);

--
-- Indexes for table `kategoris`
--
ALTER TABLE `kategoris`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mahasiswas`
--
ALTER TABLE `mahasiswas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_departemen_id` (`fk_departemen_id`);

--
-- Indexes for table `skors`
--
ALTER TABLE `skors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sub_kategori_id` (`fk_sub_kategori_id`),
  ADD KEY `fk_tingkat_id` (`fk_tingkat_id`);

--
-- Indexes for table `sub_kategoris`
--
ALTER TABLE `sub_kategoris`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kategori_id` (`fk_kategori_id`);

--
-- Indexes for table `tingkats`
--
ALTER TABLE `tingkats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_departemen_id` (`fk_departemen_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departemens`
--
ALTER TABLE `departemens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `ekstrakurikulers`
--
ALTER TABLE `ekstrakurikulers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT for table `kategoris`
--
ALTER TABLE `kategoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `mahasiswas`
--
ALTER TABLE `mahasiswas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `skors`
--
ALTER TABLE `skors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `sub_kategoris`
--
ALTER TABLE `sub_kategoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `tingkats`
--
ALTER TABLE `tingkats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `ekstrakurikulers`
--
ALTER TABLE `ekstrakurikulers`
  ADD CONSTRAINT `ekstrakurikulers_ibfk_1` FOREIGN KEY (`fk_mahasiswa_id`) REFERENCES `mahasiswas` (`id`),
  ADD CONSTRAINT `ekstrakurikulers_ibfk_2` FOREIGN KEY (`fk_tingkat_id`) REFERENCES `tingkats` (`id`),
  ADD CONSTRAINT `ekstrakurikulers_ibfk_3` FOREIGN KEY (`fk_sub_kategori_id`) REFERENCES `sub_kategoris` (`id`);

--
-- Ketidakleluasaan untuk tabel `mahasiswas`
--
ALTER TABLE `mahasiswas`
  ADD CONSTRAINT `mahasiswas_ibfk_1` FOREIGN KEY (`fk_departemen_id`) REFERENCES `departemens` (`id`);

--
-- Ketidakleluasaan untuk tabel `skors`
--
ALTER TABLE `skors`
  ADD CONSTRAINT `skors_ibfk_1` FOREIGN KEY (`fk_sub_kategori_id`) REFERENCES `sub_kategoris` (`id`),
  ADD CONSTRAINT `skors_ibfk_2` FOREIGN KEY (`fk_tingkat_id`) REFERENCES `tingkats` (`id`);

--
-- Ketidakleluasaan untuk tabel `sub_kategoris`
--
ALTER TABLE `sub_kategoris`
  ADD CONSTRAINT `sub_kategoris_ibfk_1` FOREIGN KEY (`fk_kategori_id`) REFERENCES `kategoris` (`id`);

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`fk_departemen_id`) REFERENCES `departemens` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
