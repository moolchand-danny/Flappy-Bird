var imgURL = "ftp://192.168.1.120:3721/WhatsApp/Media/WhatsApp%20Images/";

var imgNames = [
"IMG-20180812-WA0001.jpg",
"IMG-20180812-WA0000.jpg",
"IMG-20180808-WA0002.jpg",
"IMG-20180808-WA0001.jpg",
"IMG-20180808-WA0000.jpg",
"IMG-20180806-WA0000.jpg",
"IMG-20180805-WA0000.jpg",
"IMG-20180804-WA0001.jpg",
"IMG-20180804-WA0000.jpg",
"IMG-20180802-WA0001.jpg",
"IMG-20180802-WA0000.jpg",
"IMG-20180801-WA0000.jpg",
"IMG-20180731-WA0000.jpg",
"IMG-20180726-WA0000.jpg",
"IMG-20180725-WA0000.jpg",
"IMG-20180724-WA0001.jpg",
"IMG-20180724-WA0000.jpg",
"IMG-20180723-WA0000.jpg",
"IMG-20180716-WA0000.jpg",
"IMG-20180712-WA0000.jpg",
"IMG-20180711-WA0000.jpg",
"IMG-20180706-WA0000.jpg",
"IMG-20180703-WA0000.jpg",
"IMG-20180629-WA0000.jpg",
"IMG-20180626-WA0001.jpg",
"IMG-20180626-WA0000.jpg",
"IMG-20180625-WA0000.jpg",
"IMG-20180622-WA0001.jpg",
"IMG-20180622-WA0000.jpg",
"IMG-20180620-WA0000.jpg",
"IMG-20180513-WA0000.jpg",
"IMG-20180512-WA0000.jpg",
"IMG-20180402-WA0000.jpg",
"IMG-20180330-WA0000.jpg",
"IMG-20180327-WA0000.jpg",
"IMG-20180308-WA0000.jpg",
"IMG-20180302-WA0000.jpg",
"IMG-20180228-WA0000.jpg",
"IMG-20180226-WA0000.jpg",
"IMG-20180224-WA0000.jpg",
"IMG-20180217-WA0003.jpg",
"IMG-20180217-WA0002.jpg",
"IMG-20180217-WA0001.jpg",
"IMG-20180217-WA0000.jpg",
"IMG-20180216-WA0000.jpg",
"IMG-20180215-WA0000.jpg",
"IMG-20180214-WA0003.jpg",
"IMG-20180214-WA0002.jpg",
"IMG-20180214-WA0001.jpg",
"IMG-20180214-WA0000.jpg",
"IMG-20180213-WA0001.jpg",
"IMG-20180213-WA0000.jpg",
"IMG-20180207-WA0001.jpg",
"IMG-20180206-WA0003.jpg",
"IMG-20180131-WA0002.jpg",
"IMG-20180131-WA0000.jpg",
"IMG-20180128-WA0005.jpg",
"IMG-20180128-WA0004.jpg",
"IMG-20180128-WA0001.jpg",
"IMG-20180128-WA0000.jpg",
"IMG-20180126-WA0002.jpg",
"IMG-20180126-WA0000.jpg",
"IMG-20180122-WA0007.jpg",
"IMG-20180122-WA0006.jpg",
"IMG-20180122-WA0005.jpg",
"IMG-20180122-WA0004.jpg",
"IMG-20180122-WA0003.jpg",
"IMG-20180122-WA0002.jpg",
"IMG-20180122-WA0001.jpg",
"IMG-20180114-WA0000.jpg",
"IMG-20180109-WA0000.jpg",
"IMG-20180102-WA0000.jpg",
"IMG-20180101-WA0001.jpg",
"IMG-20180101-WA0000.jpg",
"IMG-20171231-WA0000.jpg",
"IMG-20171226-WA0001.jpg",
"IMG-20171226-WA0000.jpg",
"IMG-20171225-WA0003.jpg",
"IMG-20171225-WA0002.jpg",
"IMG-20171225-WA0001.jpg",
"IMG-20171225-WA0000.jpg",
"IMG-20171213-WA0002.jpg",
"IMG-20171213-WA0001.jpg",
"IMG-20171213-WA0000.jpg",
"IMG-20171202-WA0024.jpg",
"IMG-20171202-WA0023.jpg",
"IMG-20171202-WA0022.jpg",
"IMG-20171202-WA0021.jpg",
"IMG-20171202-WA0020.jpg",
"IMG-20171202-WA0019.jpg",
"IMG-20171202-WA0018.jpg",
"IMG-20171202-WA0017.jpg",
"IMG-20171202-WA0016.jpg",
"IMG-20171202-WA0015.jpg",
"IMG-20171202-WA0014.jpg",
"IMG-20171202-WA0013.jpg",
"IMG-20171202-WA0012.jpg",
"IMG-20171202-WA0011.jpg",
"IMG-20171202-WA0010.jpg",
"IMG-20171202-WA0009.jpg",
"IMG-20171202-WA0008.jpg",
"IMG-20171202-WA0007.jpg",
"IMG-20171202-WA0006.jpg",
"IMG-20171202-WA0005.jpg",
"IMG-20171202-WA0004.jpg",
"IMG-20171202-WA0003.jpg",
"IMG-20171202-WA0002.jpg",
"IMG-20171202-WA0001.jpg",
"IMG-20171202-WA0000.jpg",
"IMG-20171107-WA0000.jpg",
"IMG-20171026-WA0002.jpg",
"IMG-20171026-WA0001.jpg",
"IMG-20171026-WA0000.jpg",
"IMG-20171019-WA0006.jpg",
"IMG-20171019-WA0005.jpg",
"IMG-20171019-WA0004.jpg",
"IMG-20171019-WA0003.jpg",
"IMG-20171019-WA0002.jpg",
"IMG-20171019-WA0000.jpg",
"IMG-20171018-WA0002.jpg",
"IMG-20171018-WA0001.jpg",
"IMG-20171018-WA0000.jpg",
"IMG-20170921-WA0000.jpg",
"IMG-20170919-WA0007.jpg",
"IMG-20170919-WA0006.jpg",
"IMG-20170919-WA0005.jpg",
"IMG-20170919-WA0004.jpg",
"IMG-20170919-WA0003.jpg",
"IMG-20170919-WA0002.jpg",
"IMG-20170919-WA0001.jpg",
"IMG-20170919-WA0000.jpg",
"IMG-20170916-WA0002.jpg",
"IMG-20170916-WA0001.jpg",
"IMG-20170916-WA0000.jpg",
"IMG-20170823-WA0000.jpg",
"IMG-20170818-WA0000.jpg",
"IMG-20170816-WA0000.jpg",
"IMG-20170815-WA0000.jpg",
"IMG-20170812-WA0001.jpg",
"IMG-20170812-WA0000.jpg",
"IMG-20170807-WA0000.jpg",
"IMG-20170805-WA0001.jpg",
"IMG-20170805-WA0000.jpg",
"IMG-20170804-WA0001.jpg",
"IMG-20170804-WA0000.jpg",
"IMG-20170803-WA0002.jpg",
"IMG-20170803-WA0001.jpg",
"IMG-20170803-WA0000.jpg",
"IMG-20170801-WA0000.jpg",
"IMG-20170731-WA0003.jpg",
"IMG-20170731-WA0002.jpg",
"IMG-20170731-WA0001.jpg",
"IMG-20170731-WA0000.jpg",
"IMG-20170730-WA0006.jpg",
"IMG-20170730-WA0005.jpg",
"IMG-20170730-WA0004.jpg",
"IMG-20170730-WA0003.jpg",
"IMG-20170730-WA0002.jpg",
"IMG-20170730-WA0001.jpg",
"IMG-20170730-WA0000.jpg",
"IMG-20170728-WA0000.jpg",
"IMG-20170718-WA0001.jpg",
"IMG-20170718-WA0000.jpg",
"IMG-20170713-WA0000.jpg",
"IMG-20170628-WA0003.jpg",
"IMG-20170628-WA0002.jpg",
"IMG-20170628-WA0001.jpg",
"IMG-20170628-WA0000.jpg",
"IMG-20170621-WA0000.jpg",
"IMG-20170610-WA0001.jpg",
"IMG-20170610-WA0000.jpg",
"IMG-20170607-WA0001.jpg",
"IMG-20170607-WA0000.jpg",
"IMG-20170606-WA0000.jpg",
"IMG-20170603-WA0002.jpg",
"IMG-20170603-WA0001.jpg",
"IMG-20170603-WA0000.jpg",
"IMG-20170531-WA0001.jpg",
"IMG-20170531-WA0000.jpg",
"IMG-20170527-WA0001.jpg",
"IMG-20170527-WA0000.jpg",
"IMG-20170412-WA0007.jpg",
"IMG-20170412-WA0006.jpg",
"IMG-20170412-WA0005.jpg",
"IMG-20170412-WA0004.jpg",
"IMG-20170412-WA0003.jpg",
"IMG-20170412-WA0002.jpg",
"IMG-20170412-WA0001.jpg",
"IMG-20170412-WA0000.jpg",
"IMG-20170405-WA0000.jpg",
"IMG-20170401-WA0000.jpg",
"IMG-20170312-WA0001.jpg",
"IMG-20170312-WA0000.jpg",
"IMG-20170309-WA0001.jpg",
"IMG-20170309-WA0000.jpg",
"IMG-20170307-WA0000.jpg",
"IMG-20170301-WA0001.jpg",
"IMG-20170301-WA0000.jpg",
"IMG-20170228-WA0000.jpg",
"IMG-20170227-WA0001.jpg",
"IMG-20170227-WA0000.jpg",
"IMG-20170224-WA0000.jpg",
"IMG-20170212-WA0002.jpg",
"IMG-20170212-WA0001.jpg",
"IMG-20170212-WA0000.jpg",
"IMG-20170209-WA0000.jpg",
"IMG-20170202-WA0000.jpg",
"IMG-20170101-WA0005.jpg",
"IMG-20170101-WA0004.jpg",
"IMG-20170101-WA0003.jpg",
"IMG-20170101-WA0002.jpg",
"IMG-20170101-WA0001.jpg",
"IMG-20170101-WA0000.jpg",
"IMG-20161231-WA0001.jpg",
"IMG-20161231-WA0000.jpg",
"IMG-20161227-WA0005.jpg",
"IMG-20161227-WA0004.jpg",
"IMG-20161227-WA0003.jpg",
"IMG-20161227-WA0002.jpg",
"IMG-20161227-WA0001.jpg",
"IMG-20161227-WA0000.jpg",
"IMG-20161226-WA0000.jpg",
"IMG-20161225-WA0000.jpg",
"IMG-20161120-WA0000.jpg",
"IMG-20161114-WA0000.jpg",
"IMG-20161030-WA0001.jpg",
"IMG-20161030-WA0000.jpg",
"IMG-20161029-WA0000.jpg",
"IMG-20160918-WA0000.jpg",
"IMG-20160829-WA0000.jpg",
"IMG-20160828-WA0007.jpg",
"IMG-20160828-WA0006.jpg",
"IMG-20160828-WA0005.jpg",
"IMG-20160828-WA0004.jpg",
"IMG-20160828-WA0003.jpg",
"IMG-20160828-WA0002.jpg",
"IMG-20160828-WA0001.jpg",
"IMG-20160828-WA0000.jpg",
"IMG-20160724-WA0000.jpg",
"IMG-20160718-WA0002.jpg",
"IMG-20160718-WA0001.jpg",
"IMG-20160718-WA0000.jpg",
"IMG-20160717-WA0000.jpg",
"IMG-20160716-WA0000.jpg",
"IMG-20160715-WA0001.jpg",
"IMG-20160715-WA0000.jpg",
"IMG-20160714-WA0005.jpg",
"IMG-20160714-WA0004.jpg",
"IMG-20160714-WA0003.jpg",
"IMG-20160714-WA0002.jpg",
"IMG-20160714-WA0001.jpg",
"IMG-20160714-WA0000.jpg",
"IMG-20160628-WA0000.jpg",
"IMG-20160627-WA0000.jpg",
"IMG-20160624-WA0001.jpg",
"IMG-20160624-WA0000.jpg",
"IMG-20160619-WA0000.jpg",
"IMG-20160421-WA0000.jpg",
"IMG-20160410-WA0001.jpg",
"IMG-20160410-WA0000.jpg",
"IMG-20160408-WA0000.jpg",
"IMG-20160407-WA0001.jpg",
"IMG-20160407-WA0000.jpg",
"IMG-20160403-WA0002.jpg",
"IMG-20160403-WA0001.jpg",
"IMG-20160403-WA0000.jpg",
"IMG-20160325-WA0000.jpg",
"IMG-20160323-WA0000.jpg",
"IMG-20160319-WA0004.jpg",
"IMG-20160319-WA0003.jpg",
"IMG-20160319-WA0002.jpg",
"IMG-20160319-WA0001.jpg",
"IMG-20160319-WA0000.jpg",
"IMG-20160313-WA0000.jpg",
"IMG-20160226-WA0001.jpg",
"IMG-20160226-WA0000.jpg",
"IMG-20160223-WA0000.jpg",
"IMG-20160101-WA0001.jpg",
"IMG-20160101-WA0000.jpg",
"IMG-20151225-WA0005.jpg",
"IMG-20151225-WA0004.jpg",
"IMG-20151225-WA0003.jpg",
"IMG-20151225-WA0002.jpg",
"IMG-20151225-WA0001.jpg",
"IMG-20151225-WA0000.jpg",
"IMG-20151117-WA0000.jpg",
"IMG-20150809-WA0002.jpg"
]



for(var i = 0; i < 20; i++) {

    console.log(imgURL + imgNames[i]);

    // window.open(imgURL + imgNames[i]);

    FileSaver.saveAs(imgURL + imgNames[i]);

}