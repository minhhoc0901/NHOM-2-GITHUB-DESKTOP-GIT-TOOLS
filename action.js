// API Base URL - json-server default port
const API_URL = 'http://localhost:3000';

/**
 * Lấy danh sách tất cả sách
 * @returns {Promise<Array>} Mảng chứa danh sách sách
 */
async function getAllBooks() {
    try {
        const response = await fetch(`${API_URL}/books`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const books = await response.json();
        return books;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
}

/**
 * Xóa một cuốn sách theo ID
 * @param {number|string} id - ID của sách cần xóa
 * @returns {Promise<Object>} Kết quả xóa
 */
async function deleteBook(id) {
    try {
        const response = await fetch(`${API_URL}/books/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return { success: true, message: 'Xóa sách thành công' };
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
}



async function AddBook(event) {
    event.preventDefault();
    const form = document.getElementById("addBookForm");
    const book = {
        title: form.title.value,
        author: form.author.value,
        description: form.description.value,
        price: Number(form.price.value),
        category: form.category.value,
        image: "",
    };

    if (form.image.files.length > 0) {
        book.image = `../images/${form.image.files[0].name}`;
    }

    try {
        const res = await fetch(`${API_URL}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        });

        if (!res.ok) {
            throw new Error("Thêm sách thất bại");
        }

        const data = await res.json();
        console.log("Book mới:", data);

        alert("Thêm sách thành công!");
        form.reset();

        // Ẩn modal
        const modal = bootstrap.Modal.getInstance(
            document.getElementById("addBookModal"),
        );
        modal.hide();
    } catch (err) {
        alert("Có lỗi xảy ra");
        console.error(err);
    }
}