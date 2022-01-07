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

- Khi muốn tạo user không cần đăng nhập trước thì dispatch actLogout khi res.ok trả về thông tin để logout user khi được khởi tạo


# Tách ra một nhánh mới (Luôn luôn tách ra từ nhánh chính)
- git checkout -b feat/oksdk-526 

# add và tạo message cho commit
- git commit -m "message ở đây"

# Dòng lệnh để push một nhánh hoàn toàn mới lên git remote origin hiện tại
- git push origin -u feat/oksdk-526 

# Để tránh tạo commit mới -> Dùng tag --amend
- git add .
- git commit --amend (Nó sẽ hiển thị lên editor để chỉnh sửa message trước đó.)
  + Nếu không sửa: ESC -> :q -> Enter
  + Nếu sửa: ESC -> :wq -> Enter
- git push origin feat/oksdk-526 -f

# Cách kết hợp nhiều comment vào chung 1 commit

- git rebase -i HEAD~n

//Hook Component:

Menu Scroll: https://dev.to/dalalrohit/sticky-navbar-from-scratch-using-react-37d5


