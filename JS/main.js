function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(9.98236712757987, 106.50635805974781),
        zoom: 11,
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Set picture QR code
    var icon_chuaanlinh = {
        url: 'Asset/QRcode/chuaanlinh.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_denthanphukhanh = {
        url: 'Asset/QRcode/denthanphukhanh.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_denthanxaanquy = {
        url: 'Asset/QRcode/denthanxaanquy.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_dinhdaidien = {
        url: 'Asset/QRcode/dinhdaidien.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_dinhthanhphu = {
        url: 'Asset/QRcode/dinhthanhphu.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_sukienthanhhai = {
        url: 'Asset/QRcode/sukienthanhhai.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_sukienthanhphong = {
        url: 'Asset/QRcode/sukienthanhphong.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_sukientrandanhmyhung = {
        url: 'Asset/QRcode/sukientrandanhmyhung.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_tieudoan307 = {
        url: 'Asset/QRcode/tieudoan307.png',
        scaledSize: new google.maps.Size(80, 80),
    };

    var icon_tuongdaichienthanggiathe = {
        url: 'Asset/QRcode/tuongdaichienthanggiathe.png',
        scaledSize: new google.maps.Size(80, 80),
    };


    // Setup point location
    var marker_chuaanlinh = new google.maps.Marker({
        position: new google.maps.LatLng(9.886796019483924, 106.58415852103211),
        map: map,
        icon: icon_chuaanlinh,
    });

    var marker_denthanphukhanh = new google.maps.Marker({
        position: new google.maps.LatLng(10.040581829970584, 106.44659988775408),
        map: map,
        icon: icon_denthanphukhanh,
    });

    var marker_denthanxaanquy = new google.maps.Marker({
        position: new google.maps.LatLng(9.914563780401744, 106.56111074364094),
        map: map,
        icon: icon_denthanxaanquy,
    });

    var marker_dinhdaidien = new google.maps.Marker({
        position: new google.maps.LatLng(10.013555590996319, 106.44666719750464),
        map: map,
        icon: icon_dinhdaidien,
    });

    var marker_dinhthanhphu = new google.maps.Marker({
        position: new google.maps.LatLng(9.946959131593227, 106.51700023133716),
        map: map,
        icon: icon_dinhthanhphu,
    });

    var marker_sukienthanhhai = new google.maps.Marker({
        position: new google.maps.LatLng(),
        map: map,
        icon: icon_sukienthanhhai,
    });

    var marker_sukienthanhphong = new google.maps.Marker({
        position: new google.maps.LatLng(),
        map: map,
        icon: icon_sukienthanhphong,
    });

    var marker_sukientrandanhmyhung = new google.maps.Marker({
        position: new google.maps.LatLng(9.970436339573025, 106.50984699999984),
        map: map,
        icon: icon_sukientrandanhmyhung,
    });

    var marker_tieudoan307 = new google.maps.Marker({
        position: new google.maps.LatLng(10.023103172161255, 106.44613844131531),
        map: map,
        icon: icon_tieudoan307,
    });

    var marker_tuongdaichienthanggiathe = new google.maps.Marker({
        position: new google.maps.LatLng(9.889797446056772, 106.59578262923668),
        map: map,
        icon: icon_tuongdaichienthanggiathe,
    });


    // Setup infowindows
    /*google.maps.event.addListener(marker_chuaanlinh, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_chuaanlinh.html", true);
        xhr.send();
    });*/
    marker_chuaanlinh.addListener('click', function() {
        document.getElementById("info-container").style.left = "0";
        loadInfoWindow("../HTML/infowindow_chuaanlinh.html");
    });

    /*google.maps.event.addListener(marker_denthanphukhanh, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_denthanphukhanh.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_denthanxaanquy, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_denthanhxaanquy.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_dinhdaidien, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_dinhdaidien.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_dinhthanhphu, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_dinhthanhphu.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_sukienthanhhai, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_sukienthanhhai.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_sukienthanhphong, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_sukienthanhphong.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_sukientrandanhmyhung, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_sukientrandanhmyhung.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_tieudoan307, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_tieudoan307.html", true);
        xhr.send();
    });

    google.maps.event.addListener(marker_tuongdaichienthanggiathe, 'click', function() {
        document.getElementById("info-container").style.left = "0";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById("info-container").innerHTML = xhr.responseText;
            }
        };
        
        xhr.open("GET", "../HTML/infowindow_tuongdaichienthanggiathe.html", true);
        xhr.send();
    });*/


    google.maps.event.addListener(map, 'click', function() {
        document.getElementById("info-container").style.left = "-300px";
    });
}

/*function closeInfoWindow() {
    document.getElementById("info-container").style.left = "-300px";
}

google.maps.event.addDomListener(window, "load", initialize);*/
function loadInfoWindow(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("info-container").innerHTML = xhr.responseText;
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();
}

function closeInfoWindow() {
    document.getElementById("info-container").style.left = "-300px";
}

google.maps.event.addDomListener(window, "load", initialize);