// Khởi tạo Google Maps API
const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 21.027763, lng: 105.834167}, // Tọa độ TP. Hồ Chí Minh
    zoom: 12,
});

// Thêm marker vào bản đồ
const marker = new google.maps.Marker({
    position: {lat: 21.027763, lng: 105.834167},
    map: map,
    title: "TP. Hồ Chí Minh",
});

// Hiển thị thông tin khi click vào marker
marker.addListener("click", function() {
    alert("Bạn đang ở TP. Hồ Chí Minh!");
});
