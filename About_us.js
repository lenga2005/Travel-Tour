document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.primary-navigation-item');

    // Chuyển trang khi kích chuột vào menu
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add 'active' class to the clicked nav item
            item.classList.add('active');

            // Lấy nội dung text của item
            const page = item.textContent.toLowerCase();

            // Chuyển trang dựa trên nội dung text
            switch (page) {
                case 'home':
                    window.location.href = 'home.html'; // Thay 'home.html' bằng đường dẫn trang chủ thực tế
                    break;
                case 'about us':
                    window.location.href = 'about.html'; // Thay 'about.html' bằng đường dẫn trang about us thực tế
                    break;
                case 'tour packages':
                    window.location.href = 'tour_packages.html'; // Thay 'tour_packages.html' bằng đường dẫn trang tour packages thực tế
                    break;
                case 'contact us':
                    window.location.href = 'contact.html'; // Thay 'contact.html' bằng đường dẫn trang liên hệ thực tế
                    break;
            }
        });
    });

    // Hiển Thị Ngày Hiện Tại
    const dateElement = document.createElement('p');
    dateElement.className = 'current-date';
    dateElement.innerText = `Hôm nay là ${new Date().toLocaleDateString()}`;
    document.body.appendChild(dateElement);

    // Nút Cuộn Lên Trên Cùng
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = 'Cuộn Lên Trên';
    scrollToTopButton.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopButton);

    // Hide the button initially
    scrollToTopButton.style.display = 'none';

    // Show or hide the button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    scrollToTopButton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    // Hiển thị thông tin người dùng (example)
    const userInfoButton = document.createElement('button');
    userInfoButton.innerText = 'Thông Tin Người Dùng';
    userInfoButton.className = 'user-info-button';
    document.body.appendChild(userInfoButton);

    userInfoButton.onclick = function() {
        // Replace this with your actual user info logic
        alert("Tên: Nguyễn Văn A\nEmail: nguyen.van.a@example.com");
    };

    // Tìm kiếm (example)
    const searchButton = document.createElement('button');
    searchButton.innerText = 'Tìm Kiếm';
    searchButton.className = 'search-button';
    document.body.appendChild(searchButton);

    searchButton.onclick = function() {
        const searchTerm = prompt("Nhập từ khóa tìm kiếm:");
        if (searchTerm) {
            // Replace this with your actual search logic
            alert(`Tìm kiếm cho: ${searchTerm}`);
        }
    };
});