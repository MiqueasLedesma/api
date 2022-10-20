const { Image } = require("../server/database/db")

const arr = [
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
        pathImage: "tech-store/intel-i3-10100f-1_fyyoti",
        productId: 7
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664414379/tech-store/intel-i3-10100f-2_wjwzyp.jpg",
        pathImage: "tech-store/intel-i3-10100f-2_wjwzyp",
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


    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748241/tech-store/i7-12700-1_iwqjli.jpg",
        pathImage: "tech-store/i7-12700-1_iwqjli",
        productId: 26
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748241/tech-store/i9-9900k-1-jpg_ybqt27.jpg",
        pathImage: "tech-store/i9-9900k-1-jpg_ybqt27",
        productId: 27
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748241/tech-store/Ryzen-9-7950X-1_cahano.jpg",
        pathImage: "tech-store/Ryzen-9-7950X-1_cahano",
        productId: 28
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748241/tech-store/MSI-Radeon-RX-6700-1_n9tqrq.jpg",
        pathImage: "tech-store/keyboard-hyperx-2_v5j0fu",
        productId: 29
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748241/tech-store/MSI-Radeon-RX-6700-2_gtbfbl.jpg",
        pathImage: "tech-store/keyboard-hyperx-3_g0v70l",
        productId: 29
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748241/tech-store/Mother-MSI-H310M-1_znnp9a.jpg",
        pathImage: "tech-store/monitor-LG-34-1_z1uhu2",
        productId: 30
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748242/tech-store/Mother-MSI-H310M-2_zitkod.jpg",
        pathImage: "tech-store/monitor-LG-34-2_yb9rw3",
        productId: 30
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748242/tech-store/Mother-MSI-PRO-B660M-1_zuusek.jpg",
        pathImage: "tech-store/Mother-MSI-PRO-B660M-1_zuusek",
        productId: 31
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748242/tech-store/M.2-KINGSTON-NV1-250GB-1_fkjwm7.jpg",
        pathImage: "tech-store/M.2-KINGSTON-NV1-250GB-1_fkjwm7",
        productId: 32
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748242/tech-store/Monitor-Gamer-Gigabyte-27-1_u5frng.jpg",
        pathImage: "tech-store/Monitor-Gamer-Gigabyte-27-1_u5frng",
        productId: 33
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748242/tech-store/Mother-Gigabyte-Z590-1_i3d98t.jpg",
        pathImage: "tech-store/Mother-Gigabyte-Z590-1_i3d98t",
        productId: 34
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Mother-Gigabyte-Z590-2_jn4ptz.jpg",
        pathImage: "tech-store/Mother-Gigabyte-Z590-2_jn4ptz",
        productId: 34
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Mother-GIGABYTE-B660M-1_ahjaur.jpg",
        pathImage: "tech-store/Mother-GIGABYTE-B660M-1_ahjaur",
        productId: 35
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Mother-GIGABYTE-B660M-2_jvwfkv.jpg",
        pathImage: "tech-store/Mother-GIGABYTE-B660M-2_jvwfkv",
        productId: 35
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Adata-DDR4-1_avyyu0.jpg",
        pathImage: "tech-store/Adata-DDR4-1_avyyu0",
        productId: 36
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/SSD-M.2-ADATA-2TB-1_gpln31.jpg",
        pathImage: "tech-store/SSD-M.2-ADATA-2TB-1_gpln31",
        productId: 37
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/SSD-Adata-960GB_cxllkn.jpg",
        pathImage: "tech-store/SSD-Adata-960GB_cxllkn",
        productId: 38
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Teclado-HyperX-1_d37jes.jpg",
        pathImage: "tech-store/Teclado-HyperX-1_d37jes",
        productId: 39
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/LG-LCD-49-1_coh9im.jpg",
        pathImage: "tech-store/LG-LCD-49-1_coh9im",
        productId: 40
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/LG-LCD-49-2_pg1nby.jpg",
        pathImage: "tech-store/LG-LCD-49-2_pg1nby",
        productId: 40
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Monitor-LG-24_uv6fc0.jpg",
        pathImage: "tech-store/Monitor-LG-24_uv6fc0",
        productId: 41
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748243/tech-store/Monitor-LG-24-2_mlmgjm.jpg",
        pathImage: "tech-store/Monitor-LG-24-2_mlmgjm",
        productId: 41
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748244/tech-store/Disco-WD-14TB-1_u1git9.jpg",
        pathImage: "tech-store/Disco-WD-14TB-1_u1git9",
        productId: 42
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748244/tech-store/SSD-WD-480GB-1_x5xpte.jpg",
        pathImage: "tech-store/SSD-WD-480GB-1_x5xpte",
        productId: 43
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748244/tech-store/Cooler-Cougar-FORZA-50-1_gaeskr.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-50-1_gaeskr",
        productId: 44
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1664748244/tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 45
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666240719/tech-store/lndylzyfcwn3cldw5cz7.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 46
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666241069/tech-store/wzxieuprsdgykcv5tobx.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 47
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666241251/tech-store/fk7vivyxh1fbabhkt5jc.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 48
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666241382/tech-store/t9digvulltg3bbiqa1st.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 49
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666241669/tech-store/veakflwwg3vsfkr3xz46.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 50
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666241834/tech-store/mxscxtiqjkijvtqqotdi.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 51
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666241880/tech-store/hk0igspsjijgdbywjdwd.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 52
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242024/tech-store/tvijhw4gcp4tovygz74o.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 53
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242083/tech-store/motl0y850kudydjubhyw.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 54
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242335/tech-store/rviy7bp4vyzwlzkppp16.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 55
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242484/tech-store/u9oqhnrvt95zp4hx8l5b.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 56
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242526/tech-store/gyqbmwdqxcbrsilcsnkb.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 57
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242553/tech-store/xxq7y3rytdhmscspplkz.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 58
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242660/tech-store/j5wu6vd976gvlcwbsk7y.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 59
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242677/tech-store/yykou8an4rfmkw9hqthi.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 60
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242791/tech-store/oji0nnpns7wrriuu8vas.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 61
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242853/tech-store/wrgwquqcxfy5qxb3xmdj.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 62
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242959/tech-store/vlnbvdoqd5ohtshswk2o.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 63
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666242962/tech-store/aufcur83u8kkv5yhtpoj.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 64
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243099/tech-store/ukaod3z8ipf4lauflhkb.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 65
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243134/tech-store/v14huypicf5zfkcjjyt6.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 66
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243195/tech-store/h78slylihd2dnhqa9wkz.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 67
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243407/tech-store/o68kcmws5nezxrpry6db.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 68
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243582/tech-store/p7udfufi1lg9fdcadhyt.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 69
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243651/tech-store/f1fq6tytvdabuafigehl.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 70
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666243800/tech-store/aqtkaddogaja3amurlrt.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 71
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244105/tech-store/eutoenqsplzqafhvypco.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 72
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244130/tech-store/uwq9klk42x6gfuzvt1h0.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 73
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244146/tech-store/nvtji9qlv4ryplvkje2t.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 74
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244266/tech-store/qdgngdclwqhlvxhwa51e.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 75
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244268/tech-store/pzo83uhhq92mjna8r8hm.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 76
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244268/tech-store/popvfyw6duc11tbymmqj.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 77
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244432/tech-store/xwt1e1bebxjxspxt3ydu.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 78
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244432/tech-store/xwt1e1bebxjxspxt3ydu.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 79
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244512/tech-store/mlgdjruwljzv1k2xi6hf.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 80
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244553/tech-store/qgqwsjrofglwfg8q1kfz.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 81
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244674/tech-store/d6lrenkyrhdbm8sjm5b7.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 82
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244694/tech-store/pfzge6apqcvxa9a4sa5c.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 83
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244823/tech-store/b9bg4coum7zsvz5pignf.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 84
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244905/tech-store/bwrlbkczv6fr3cpppy6n.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 85
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666244975/tech-store/hmewwexddneh4mw3tqhd.png",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 86
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666245154/tech-store/bqcm47pf3wewc1z2u1xb.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 87
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666245381/tech-store/qgihpspzpseb8ubjackp.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 88
    },
    {
        url: "https://res.cloudinary.com/de8brtp2o/image/upload/v1666245381/tech-store/qgihpspzpseb8ubjackp.jpg",
        pathImage: "tech-store/Cooler-Cougar-FORZA-75-1_gqr7pz",
        productId: 89
    },
    
];

const createImages = async () => {
    try {
        await arr.map(e => Image.findOrCreate({
            where: {
                url: e.url,
                pathImage: e.pathImage,
                productId: e.productId
            }
        }))
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = { createImages };
