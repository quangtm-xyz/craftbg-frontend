# Schema Markup Documentation

## 📋 Tổng quan

Dự án CraftBG đã được tích hợp đầy đủ Schema Markup để tối ưu hóa SEO và hiển thị Rich Snippets trên Google.

## 🎯 Các loại Schema đã triển khai

### 1. **WebPage Schema**
- **Mục đích**: Định nghĩa thông tin cơ bản về trang web
- **Vị trí**: `src/app/[lang]/layout.tsx`
- **Lợi ích**: Giúp Google hiểu cấu trúc trang web

### 2. **Organization Schema**
- **Mục đích**: Thông tin về tổ chức/công ty
- **Vị trí**: `src/app/[lang]/layout.tsx`
- **Lợi ích**: Hiển thị thông tin công ty trong Knowledge Graph
- **Bao gồm**:
  - Logo
  - Thông tin liên hệ
  - Social media links
  - Ngôn ngữ hỗ trợ

### 3. **SoftwareApplication Schema**
- **Mục đích**: Mô tả ứng dụng web
- **Vị trí**: `src/app/[lang]/layout.tsx`
- **Lợi ích**: Hiển thị rating, giá, và tính năng trong kết quả tìm kiếm
- **Bao gồm**:
  - Rating: 4.8/5 (15,420 reviews)
  - Giá: Free ($0)
  - Danh sách tính năng
  - Yêu cầu hệ thống

### 4. **HowTo Schema**
- **Mục đích**: Hướng dẫn từng bước sử dụng công cụ
- **Vị trí**: `src/app/[lang]/layout.tsx`
- **Lợi ích**: Hiển thị step-by-step guide trong Google Search
- **Bao gồm**:
  - 4 bước chi tiết
  - Thời gian hoàn thành: 30 giây
  - Chi phí: $0

### 5. **FAQPage Schema**
- **Mục đích**: Câu hỏi thường gặp
- **Vị trí**: 
  - `src/app/[lang]/layout.tsx` (static)
  - `src/components/FAQ.tsx` (dynamic với i18n)
- **Lợi ích**: Hiển thị FAQ dropdown trong Google Search
- **Bao gồm**: 12 câu hỏi phổ biến

### 6. **BreadcrumbList Schema**
- **Mục đích**: Điều hướng breadcrumb
- **Vị trí**: `src/app/[lang]/layout.tsx`
- **Lợi ích**: Hiển thị breadcrumb navigation trong search results

### 7. **Product Schema**
- **Mục đích**: Thông tin sản phẩm
- **Vị trí**: `src/lib/schemas.ts` (sẵn sàng sử dụng)
- **Lợi ích**: Rich snippets với rating và giá

### 8. **Article Schema**
- **Mục đích**: Bài viết blog
- **Vị trí**: `src/lib/schemas.ts` (helper function)
- **Sử dụng**: Cho các trang blog

## 🔍 Cách kiểm tra Schema Markup

### 1. **Google Rich Results Test**
```
https://search.google.com/test/rich-results
```
- Nhập URL: `https://craftbg.com`
- Kiểm tra các loại rich results được hỗ trợ

### 2. **Schema Markup Validator**
```
https://validator.schema.org/
```
- Paste toàn bộ HTML hoặc JSON-LD
- Kiểm tra lỗi cú pháp

### 3. **Google Search Console**
```
https://search.google.com/search-console
```
- Vào **Enhancements** → **FAQ**, **HowTo**, **Breadcrumbs**
- Xem số lượng trang có schema hợp lệ

### 4. **Kiểm tra trực tiếp trên trang**
Mở DevTools (F12) → Console, chạy:
```javascript
// Lấy tất cả schema markup
const schemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
schemas.forEach((s, i) => {
  console.log(`Schema ${i + 1}:`, JSON.parse(s.textContent))
})
```

## 📊 Structured Data Testing

### Test với curl
```bash
curl -s https://craftbg.com | grep -o '<script type="application/ld+json">.*</script>' | wc -l
```
Kết quả mong đợi: **6 schemas**

### Test với Node.js
```javascript
const fetch = require('node-fetch')
const cheerio = require('cheerio')

async function checkSchemas() {
  const html = await fetch('https://craftbg.com').then(r => r.text())
  const $ = cheerio.load(html)
  const schemas = $('script[type="application/ld+json"]')
  
  console.log(`Found ${schemas.length} schemas:`)
  schemas.each((i, el) => {
    const data = JSON.parse($(el).html())
    console.log(`${i + 1}. ${data['@type']}`)
  })
}

checkSchemas()
```

## 🚀 Cách sử dụng schemas.ts

### Import schemas
```typescript
import { 
  OrganizationSchema, 
  SoftwareApplicationSchema,
  createArticleSchema 
} from '@/lib/schemas'
```

### Sử dụng trong component
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(OrganizationSchema)
  }}
/>
```

### Tạo Article Schema cho blog
```typescript
const articleSchema = createArticleSchema(
  "How to Remove Background from Product Photos",
  "Complete guide to removing backgrounds...",
  "2024-12-11",
  "https://craftbg.com/blog/product-photos.jpg"
)
```

## 📈 Kết quả mong đợi trên Google

### Rich Snippets có thể xuất hiện:
1. ⭐ **Star Rating** (4.8/5 stars)
2. 💰 **Price** (Free)
3. ❓ **FAQ Accordion** (12 questions)
4. 📋 **HowTo Steps** (4 steps)
5. 🍞 **Breadcrumbs** (Home > Background Remover)
6. 🏢 **Organization Info** (Logo, contact)

## 🔧 Bảo trì và cập nhật

### Khi thêm tính năng mới:
1. Cập nhật `featureList` trong `SoftwareApplicationSchema`
2. Thêm FAQ mới vào `FAQPageSchema`
3. Cập nhật `aggregateRating` nếu có review mới

### Khi thêm trang mới:
1. Cập nhật `BreadcrumbListSchema`
2. Tạo schema riêng cho trang đó (Article, Product, etc.)

### Khi thay đổi thông tin công ty:
1. Cập nhật `OrganizationSchema`
2. Cập nhật social media links
3. Cập nhật contact information

## ⚠️ Lưu ý quan trọng

1. **Không duplicate schemas**: Mỗi loại schema chỉ nên xuất hiện 1 lần trên mỗi trang
2. **URL phải chính xác**: Tất cả URL trong schema phải là absolute URLs
3. **Images phải tồn tại**: Các URL hình ảnh trong schema phải trỏ đến file thực tế
4. **Rating phải thật**: Không fake rating, Google có thể phạt
5. **Cập nhật thường xuyên**: Schema cần phản ánh đúng nội dung hiện tại

## 🎨 Best Practices

1. ✅ Sử dụng JSON-LD format (đang dùng)
2. ✅ Đặt schema trong `<head>` hoặc đầu `<body>`
3. ✅ Validate trước khi deploy
4. ✅ Test trên nhiều loại schema validator
5. ✅ Monitor trong Google Search Console
6. ✅ Cập nhật khi có thay đổi nội dung

## 📚 Tài liệu tham khảo

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [JSON-LD Specification](https://json-ld.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)

## 🐛 Troubleshooting

### Schema không hiển thị trong Google
- Đợi 1-2 tuần để Google index
- Kiểm tra trong Search Console
- Validate schema với Rich Results Test

### Lỗi validation
- Kiểm tra JSON syntax
- Đảm bảo tất cả required fields có mặt
- Kiểm tra format của dates, URLs

### Schema bị duplicate
- Kiểm tra không có 2 schema cùng loại
- Xóa schema cũ trong index.html nếu đã có trong layout.tsx

## 📞 Support

Nếu cần hỗ trợ về Schema Markup:
- Email: support@craftbg.com
- Documentation: `/docs/schema-markup.md`
