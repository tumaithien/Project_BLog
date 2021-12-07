- Tách Project ra những thành phần nhỏ
- `shared/` Chứa những Component cơ bản nhất. Nhỏ nhất. Không chứa dữ liệu. Chia sẻ giữa nhiều thành phần lớn
- `components/` Chứa những Component dùng ở trong pages. Các component này có thể chứa dữ liệu bên trong
- `pages/` Chứa các trang lớn của Website

- Mô hình: Mỗi trang chứa nhiều `components`, mỗi `components` có thể chứa nhiều `components` nhỏ hơn

- Quy tắc: 
  - Tạo các Folders và Files để chứa từng thành phần nhỏ. Càng nhỏ càng chi tiết càng tốt
  - Không có bất kỳ giới hạn nào cho một Component (Ví dụ IconLoading.js)
  - Các File CSS cũng nên tách ra riêng ứng với từng Component (Phụ thuộc vào người làm UI)
  - Component nào có cả CSS thì tạo folder bên trong có 2 files: Js và CSS
  - Component nào đơn lẻ thì chỉ cần tạo file Javascript

- Gắn Font chữ vào `index.html`
- Import những CSS Global vào `index.js` theo đúng thứ tự
- Fix toàn bộ `warning` và đường dẫn của `images`
- Lưu ý: file Image thì nên để ở folder public

- Những Components nào cùng một chủ đề: Ghi chú lại để xây dựng 1 components nhưng dùng ở nhiều nơi khác nhau với nhiều biến thể khác nhau
  - Button
  - MainTitle
  - Input
  - ArticleItem