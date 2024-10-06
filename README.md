### ĐỌC DOCUMENTATION TRƯỚC KHI LÀM NHA BÉ

# Clone project

# cd đến thư mục App để chạy câu lệnh -> ex : cd bookseller

# Hồng đọc hết phần này trước khi nào làm nha 

## Install

-   Khi clone code về thành công. run lệnh này để tải thư viện về
-   run: npm i

# Start project

-   run : npm start

# Chú ý: không code trực tiếp trên nhánh master nha nha


## clone API về tạo 1 API có tên là book copy code ở file data chạy trong MYSQL rồi chạy app bình thương 

## Khi clone về xong. trước khi code chức năng của mình cần tạo nhánh mới và checkout về nhánh đó:

-   run: git checkout -b [tên nhánh mới] ví dụ: git checkout -b hongcode

## Khi code xong đầy đủ chức năng của mình chạy:

-   Kiểm tra trạng thái:
-   run: git status

## Add các thay đổi:

-   run: git add .

## Commit code:

-   run: git commit -m "viết commit vào đây"

## push code lên git:

-   run: git push origin [tên nhánh vừa tạo lúc đầu]

# Chú ý tiếp theo. Khi anh em code xong chức năng, push code lên nhánh mình tạo. Và nhánh main có thêm code mới thì:

## Checkout về nhánh main:

-   run: git checkout main

## Kiểm tra status:

-   run: git status // để xem mình đứng ở nhánh main chua

## pull code mới từ nhánh main về:

-   run: git pull origin main

## pull code xong thì lại tạo nhánh khác để code các chức năng tiếp
