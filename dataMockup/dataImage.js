const { Image } = require("../server/database/db")

const createImages = async () => {
    await Image.bulkCreate([
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664340381/tech-store/tec-1_ewrjdr.jpg",
            pathImage: "tech-store/tec-1_ewrjdr",
            productId: 1
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664340380/tech-store/tec1_xfhel4.jpg",
            pathImage: "tech-store/tec1_xfhel4",
            productId: 1
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414378/tech-store/keyboard-hyperx-1_aly5ju.jpg",
            pathImage: "tech-store/keyboard-hyperx-1_aly5ju",
            productId: 2
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/keyboard-hyperx-2_v5j0fu.jpg",
            pathImage: "tech-store/keyboard-hyperx-2_v5j0fu",
            productId: 2
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414378/tech-store/keyboard-hyperx-3_g0v70l.jpg",
            pathImage: "tech-store/keyboard-hyperx-3_g0v70l",
            productId: 2
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414378/tech-store/monitor-LG-34-1_z1uhu2.jpg",
            pathImage: "tech-store/monitor-LG-34-1_z1uhu2",
            productId: 3
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414378/tech-store/monitor-LG-34-2_yb9rw3.jpg",
            pathImage: "tech-store/monitor-LG-34-2_yb9rw3",
            productId: 3
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414378/tech-store/monitor-asus-24-1_lf0mja.jpg",
            pathImage: "tech-store/monitor-asus-24-1_lf0mja",
            productId: 4
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414378/tech-store/monitor-asus-24-2_zu0khq.jpg",
            pathImage: "tech-store/monitor-asus-24-2_zu0khq",
            productId: 4
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/monitor-asus-24-3_i0hrzc.jpg",
            pathImage: "tech-store/monitor-asus-24-3_i0hrzc",
            productId: 4
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/AMD-1600-1_t4trpt.jpg",
            pathImage: "tech-store/AMD-1600-1_t4trpt",
            productId: 5
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/AMD-1600-2_olunzt.jpg",
            pathImage: "tech-store/AMD-1600-2_olunzt",
            productId: 5
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/amd-ryzen7-5800x-1_zgelvt.jpg",
            pathImage: "tech-store/amd-ryzen7-5800x-1_zgelvt",
            productId: 6
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/amd-ryzen7-5800x-2_tsth0l.jpg",
            pathImage: "tech-store/amd-ryzen7-5800x-2_tsth0l",
            productId: 6
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/intel-i3-10100f-1_fyyoti.jpg",
            pathImage: "tech-store/intel-i3-10100f-1_fyyoti.jpg",
            productId: 7
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/intel-i3-10100f-2_wjwzyp.jpg",
            pathImage: "tech-store/intel-i3-10100f-2_wjwzyp.jpg",
            productId: 7
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/intel-i5-10400f-1_qjpgbu.jpg",
            pathImage: "tech-store/intel-i5-10400f-1_qjpgbu",
            productId: 8
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/intel-i5-10400f-2_ykvqwc.jpg",
            pathImage: "tech-store/intel-i5-10400f-2_ykvqwc",
            productId: 8
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/intel-i7-10700-1_uumtfv.jpg",
            pathImage: "tech-store/intel-i7-10700-1_uumtfv",
            productId: 9
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/intel-i7-10700-2_ejoloe.jpg",
            pathImage: "tech-store/intel-i7-10700-2_ejoloe",
            productId: 9
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/Mother-Asrock-A320M-1_xkn6zu.jpg",
            pathImage: "tech-store/Mother-Asrock-A320M-1_xkn6zu",
            productId: 10
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Mother-Asrock-A320M-2_zvmfjb.jpg",
            pathImage: "tech-store/Mother-Asrock-A320M-2_zvmfjb",
            productId: 10
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/Mother-ASUS-PRIME-A520M-1_ahbpxe.jpg",
            pathImage: "tech-store/Mother-ASUS-PRIME-A520M-1_ahbpxe",
            productId: 11
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/Mother-ASUS-PRIME-A520M-2_f0lo6z.jpg",
            pathImage: "tech-store/Mother-ASUS-PRIME-A520M-2_f0lo6z",
            productId: 11
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/Mother-ASUS-PRIME-A520M-3_r6jzyj.jpg",
            pathImage: "tech-store/Mother-ASUS-PRIME-A520M-3_r6jzyj",
            productId: 11
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664415639/tech-store/Mother-ASUS-B550-1_thezi9.jpg",
            pathImage: "tech-store/Mother-ASUS-B550-1_thezi9",
            productId: 12
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664415640/tech-store/Mother-ASUS-B550-2_yd8ype.jpg",
            pathImage: "tech-store/Mother-ASUS-B550-2_yd8ype",
            productId: 12
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414380/tech-store/Mother-Gigabyte-B560M-1_cqhozp.jpg",
            pathImage: "tech-store/Mother-Gigabyte-B560M-1_cqhozp",
            productId: 13
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Mother-Gigabyte-B560M-2_ykwtqv.jpg",
            pathImage: "tech-store/Mother-Gigabyte-B560M-2_ykwtqv",
            productId: 13
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Mother-ASUS-PRIME-B560M-1_xjqz7g.jpg",
            pathImage: "tech-store/Mother-ASUS-PRIME-B560M-1_xjqz7g",
            productId: 14
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Mother-ASUS-PRIME-B560M-2_kpskwl.jpg",
            pathImage: "tech-store/Mother-ASUS-PRIME-B560M-2_kpskwl",
            productId: 14
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Video-ASUS-GeForce-GTX-1660-TI-1_yfryn2.jpg",
            pathImage: "tech-store/Video-ASUS-GeForce-GTX-1660-TI-1_yfryn2",
            productId: 15
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Video-ASUS-GeForce-GTX-1660-TI-2_vwbetu.jpg",
            pathImage: "tech-store/Video-ASUS-GeForce-GTX-1660-TI-2_vwbetu",
            productId: 15
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414381/tech-store/Video-ASUS-GeForce-GTX-1660-TI-3_iymxif.jpg",
            pathImage: "tech-store/Video-ASUS-GeForce-GTX-1660-TI-3_iymxif",
            productId: 15
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/ASUS-GeForce-RTX-3060-1_viwnif.jpg",
            pathImage: "tech-store/ASUS-GeForce-RTX-3060-1_viwnif",
            productId: 16
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/ASUS-GeForce-RTX-3060-2_nhu4zd.jpg",
            pathImage: "tech-store/ASUS-GeForce-RTX-3060-2_nhu4zd",
            productId: 16
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/ASUS-GeForce-RTX-3060-3_xda8rw.jpg",
            pathImage: "tech-store/ASUS-GeForce-RTX-3060-3_xda8rw",
            productId: 16
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/ASUS-GeForce-RTX-3090-1_amyl6j.jpg",
            pathImage: "tech-store/ASUS-GeForce-RTX-3090-1_amyl6j",
            productId: 17
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/ASUS-GeForce-RTX-3090-2_ouup0g.jpg",
            pathImage: "tech-store/ASUS-GeForce-RTX-3090-2_ouup0g",
            productId: 17
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/ASUS-GeForce-RTX-3090-3_dvgsox.jpg",
            pathImage: "tech-store/ASUS-GeForce-RTX-3090-3_dvgsox",
            productId: 17
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/Memoria-Kingston-DDR4-16GB-1_bbwmyy.jpg",
            pathImage: "tech-store/Memoria-Kingston-DDR4-16GB-1_bbwmyy",
            productId: 18
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414382/tech-store/Memoria-Kingston-DDR4-16GB-2_ptlwk7.jpg",
            pathImage: "tech-store/Memoria-Kingston-DDR4-16GB-2_ptlwk7",
            productId: 18
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Memoria-Adata-DDR4-8GB-1_pfxuon.jpg",
            pathImage: "tech-store/Memoria-Adata-DDR4-8GB-1_pfxuon",
            productId: 19
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Disco-WD-2TB-1_rfbejh.jpg",
            pathImage: "tech-store/Disco-WD-2TB-1_rfbejh",
            productId: 20
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Disco-WD-1TB-1_znj3di.jpg",
            pathImage: "tech-store/Disco-WD-1TB-1_znj3di",
            productId: 21
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664416509/tech-store/SSD-Kingston-120GB-1_uyiqiq.jpg",
            pathImage: "tech-store/SSD-Kingston-120GB-1_uyiqiq",
            productId: 22
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Gabinete-ASUS-TUF-GT501-1_nrgi9o.jpg",
            pathImage: "tech-store/Gabinete-ASUS-TUF-GT501-1_nrgi9o",
            productId: 23
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Gabinete-ASUS-TUF-GT501-2_ep1ddh.jpg",
            pathImage: "tech-store/Gabinete-ASUS-TUF-GT501-2_ep1ddh",
            productId: 23
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Gabinete-Cougar-Conquer-1_dzbok8.jpg",
            pathImage: "tech-store/Gabinete-Cougar-Conquer-1_dzbok8",
            productId: 24
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Gabinete-Cougar-Conquer-2_o5q3kq.jpg",
            pathImage: "tech-store/Gabinete-Cougar-Conquer-2_o5q3kq",
            productId: 24
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Gabinete-Cougar-Conquer-3_reent1.jpg",
            pathImage: "tech-store/Gabinete-Cougar-Conquer-3_reent1",
            productId: 24
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414384/tech-store/Cooler-CPU-ASUS-ROG-1_avursn.jpg",
            pathImage: "tech-store/Cooler-CPU-ASUS-ROG-1_avursn",
            productId: 25
        },
        {
            url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414383/tech-store/Cooler-CPU-ASUS-ROG-2_mwccfa.jpg",
            pathImage: "tech-store/Cooler-CPU-ASUS-ROG-2_mwccfa",
            productId: 25
        },

    ])
}

module.exports = { createImages };