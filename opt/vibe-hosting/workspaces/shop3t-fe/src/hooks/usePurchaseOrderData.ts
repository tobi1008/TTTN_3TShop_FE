const API_BASE_URL = 'https://api-shop3t.vibe.quyenlt.com';

// Sửa đường dẫn endpoint category từ /category/ thành /api/category
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/category`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Các hàm khác trong file giữ nguyên, sửa các endpoint tương ứng từ /x/ thành /api/x nếu có