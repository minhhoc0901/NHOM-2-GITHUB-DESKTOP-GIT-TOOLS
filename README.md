# Nhom2-BT-GITHUB-DESKTOP-GIT-TOOLS

## Danh sách thành viên & Phân công công việc
| STT | Họ tên        | GitHub         | Nhánh feature                | Chức năng (Feature)         |
|-----|--------------|----------------|------------------------------|-----------------------------|
| 1   | Minh Học     |@minhhoc0901    | feature/hoc/setup-project    | Setup Project               |
| 2   | Toàn Bân     |@ToanBan        | feature/ban/add-book         | Add Book                    |
| 3   | Mạnh Cường   |@ManhCuong3004  | feature/cuong/edit-book      | Edit Book                   |
| 4   | Thành Nam    |@NamDanney      | feature/nam/book-detail      | Book Detail                 |
| 5   | Nhữ Huy      |@vanivietquat   | feature/nhu-huy/search-book  | Search Book                 |
| 6   | Minh Huy     |@caominhhuy204  | feature/minh-huy/list-delete | List & Delete               |
| 7   | Anh Kiệt     |@KietAnh1607    | feature/kiet/sort-book       | Sort Book                   |

## Cấu trúc nhánh Repository
- **main**: Nhánh production (không commit trực tiếp, chỉ merge qua PR/MR)
- **develop**: Nhánh tích hợp (không commit trực tiếp, chỉ merge qua PR/MR)
- **feature/<tên-tính-năng>**: Mỗi thành viên 1 nhánh, ví dụ:
  - feature/hoc/setup-project
  - feature/ban/add-book
  - feature/cuong/edit-book
  - feature/nam/book-detail
  - feature/nhu-huy/search-book
  - feature/minh-huy/list-delete
  - feature/kiet/sort-book

## Quy tắc làm việc với nhánh
- Không commit trực tiếp lên `main` và `develop`.
- Chỉ merge thông qua Pull Request/Merge Request.
- Mỗi thành viên tạo nhánh feature riêng, thực hiện tối thiểu 2 commit và 1 push.
- Commit message rõ ràng, theo chuẩn `type: ...`.
- PR phải được review bởi thành viên khác trước khi merge.

## Quy trình làm việc mẫu cho Team Leader (Minh Học)
1. Tạo nhánh `feature/hoc/setup-project` từ `develop`.
2. Thực hiện tối thiểu 2 commit (VD: `init: folder structure`, `feat: install dependencies`).
3. Push lên GitHub.
4. Tạo Pull Request vào `develop`.
5. Chỉ định thành viên khác review (không tự merge).
6. Sau khi được approve, mới merge vào `develop`.

## Quy trình làm việc mẫu cho Thành viên
1. Clone repository về máy.
2. Tạo nhánh feature cá nhân từ `develop`.
3. Thực hiện tối thiểu 2 commit với message rõ ràng.
4. Push lên remote.
5. Tạo Pull Request vào `develop`.
6. Chờ review và merge.

## Quy ước Commit Message (Conventional)
Lịch sử commit phải tuân theo cấu trúc: `<type>: <mô tả ngắn>`

| Type     | Dùng khi nào                        | Ví dụ                              |
|----------|-------------------------------------|------------------------------------|
| feat     | Thêm chức năng mới                  | feat: add login feature            |
| fix      | Sửa lỗi (bug)                       | fix: fix login validation bug      |
| refactor | Tái cấu trúc code (không đổi chức năng) | refactor: restructure auth module  |
| docs     | Thêm / sửa tài liệu                 | docs: update README                |
| style    | Thay đổi giao diện / format code    | style: update UI layout            |
| chore    | Công việc phụ trợ (config, tool...) | chore: update gitignore            |
| perf     | Cải thiện hiệu năng                 | perf: optimize query performance   |
| vendor   | Cập nhật thư viện / dependencies    | vendor: upgrade axios              |

## Phân công thao tác nâng cao (P5 & P6)

- Undo commit
- Amend commit (sửa commit message)
- Revert commit
- Cherry-pick commit sang branch khác
- Squash ít nhất 2 commit
- Reset về commit trước đó (ghi chú loại reset)
- Sync branch
- Pull từ develop sau khi merge
- View Pull Request/Merge Request trong Desktop
- Thay đổi remote URL (giả lập fork)

| Thành viên    | Undo commit | Amend commit | Revert commit | Cherry-pick | Squash commit | Reset branch | Sync branch | Pull develop | View PR/MR | Remote URL |
|---------------|-------------|--------------|--------------|-------------|--------------|--------------|-------------|--------------|------------|------------|
| Minh Học      |   x         |              |              |             |              |              |   x         |              |            |            |
| Toàn Bân      |             |   x          |              |             |              |              |             |   x          |            |            |
| Mạnh Cường    |             |              |   x          |             |              |              |             |              |   x        |            |
| Thành Nam     |             |              |              |   x         |              |              |             |              |            |   x        |
| Nhữ Huy       |             |              |              |             |   x          |              |   x         |              |            |            |
| Minh Huy      |             |              |              |             |              |   x          |             |              |   x        |            |
| Anh Kiệt      |             |              |              |             |              |              |             |              |            |   x        |

### Ghi chú phân công
- PHẦN 5: Mỗi thành viên thực hiện 1 thao tác commit nâng cao và 1 thao tác remote, đảm bảo tất cả đều tham gia và không trùng lặp.
- Ảnh chụp màn hình từng thao tác, có chú thích rõ ràng, thể hiện trước/sau thao tác và lịch sử thay đổi.

### Yêu cầu báo cáo
- Phải có màn hình thể hiện được: trước & sau khi thao tác, phần lịch sử thay đổi.
- Tuyệt đối không làm giả bằng CLI, chỉ thao tác trên GitHub Desktop.


