export const data = {
  bride: {
    L: {
      id: 1,
      name: "Anggoro Catur Achmad Wicaksono",
      child: "Putra ke 4",
      father: "Alm. Priyo Tri Bintoro",
      mother: "Sad Dini Budi Astuti",
      image: "./src/assets/images/cowo.png",
    },
    P: {
      id: 2,
      name: "Rika Purnama Sari",
      child: "Putri ke 1",
      father: "Walim Suryaninto",
      mother: "Sumyati",
      image: "./src/assets/images/cewe.png",
    },

    couple: "./src/assets/images/couple.png",
  },

  time: {
    marriage: {
      year: "2025",
      month: "April",
      date: "20",
      day: "Minggu",
      hours: {
        start: "08.00",
        finish: "10.00",
      },
    },
    reception: {
      year: "2025",
      month: "April",
      date: "20",
      day: "Minggu",
      hours: {
        start: "10.00",
        finish: "Selesai",
      },
    },
    address: "Kp. Ciketing Rt001/001 Kel. sumur batu Kec.Bantar Gebang Bekasi",
  },

  link: {
    calendar: "https://calendar.app.google/XwzECSsbgsEey3M9A",
    map: "https://goo.gl/maps/VomAZGBt7DQiCpLv9",
  },

  galeri: [
    {
      id: 1,
      image: "./src/assets/images/1.png",
    },
    {
      id: 2,
      image: "./src/assets/images/2.png",
    },
    {
      id: 3,
      image: "./src/assets/images/3.png",
    },
    {
      id: 4,
      image: "./src/assets/images/4.png",
    },
    {
      id: 5,
      image: "./src/assets/images/5.png",
    },
  ],

  bank: [
    {
      id: 1,
      name: "Anggoro",
      icon: "./src/assets/images/bca.png",
      rekening: "8850987433",
    },
    {
      id: 2,
      name: "Rika",
      icon: "./src/assets/images/bca.png",
      rekening: "5681360701",
    },
  ],

  audio: "./src/assets/audio/wedding.mp3",

  api: "https://script.google.com/macros/s/AKfycbyIfr0a-f3kFNAzWYKwGfS-L4fk5_EwwnKl6F5XKxwJxpTifimS7G-SpQWAXUMDo7yM/exec",
  //   api: "https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec",

  navbar: [
    {
      id: 1,
      teks: "Home",
      icon: "bx bxs-home-heart",
      path: "#home",
    },
    {
      id: 2,
      teks: "Mempelai",
      icon: "bx bxs-group",
      path: "#bride",
    },
    {
      id: 3,
      teks: "Tanggal",
      icon: "bx bxs-calendar-check",
      path: "#time",
    },
    {
      id: 4,
      teks: "Galeri",
      icon: "bx bxs-photo-album",
      path: "#galeri",
    },
    {
      id: 5,
      teks: "Ucapan",
      icon: "bx bxs-message-rounded-dots",
      path: "#wishas",
    },
  ],
};
