const message = "Chúc Công Chúa Nhỏ Của Seki Có Một Ngày Sinh Nhật Thật Là Vui Vẻ Và Hạnh Phúc Bên Anh. Love You Much";

let index = 0;

function typeMessage() {
    const messageElement = document.getElementById("message");
    if (index < message.length) {
        messageElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeMessage, 100); // Tốc độ chạy chữ
    }
}

window.onload = () => {
    const card = document.querySelector('.card');

    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
        if (card.classList.contains('is-flipped')) {
            setTimeout(typeMessage, 500); // Chờ hiệu ứng mở xong mới chạy chữ
        }
    });
};
