## Portfolio Size Configuration - Quick Test

### How It Works:
The portfolio size field is automatically connected between admin and frontend:

1. **Admin Panel** → Set size to "Large" or "Medium"
2. **Save** → Data stored in Supabase `portfolio.size` column
3. **API** → `/api/portfolio` returns all fields including `size`
4. **Frontend** → Components read `item.size` and apply dimensions:
   - `Large`: 600x400px
   - `Medium`: 400x400px

### Test Steps:

1. **Open Admin Panel**
   ```
   http://localhost:3001/admin/dashboard/portfolio
   ```

2. **Select a portfolio item** and change "Ukuran Card":
   - Try changing one to "Medium" (400x400)
   - Try changing another to "Large" (600x400)

3. **Click "Simpan Perubahan"** (Save Changes)

4. **Open Homepage**
   ```
   http://localhost:3001
   ```

5. **Scroll to Portfolio Sections**:
   - White background section (FeaturedShowcase)
   - Violet background section (Portfolio3)
   
6. **Verify**: Card sizes should match your settings!

### Current Implementation:

**FeaturedShowcase.tsx** (lines 79-83):
```tsx
const sizeClasses = item.size === "large"
    ? "w-80 md:w-[600px] h-52 md:h-[400px]"
    : "w-64 md:w-[400px] h-64 md:h-[400px]";
```

**Portfolio3.tsx** (lines 77-80):
```tsx
const sizeClasses = item.size === "large"
    ? "w-80 md:w-[600px] h-52 md:h-[400px]"
    : "w-64 md:w-[400px] h-64 md:h-[400px]";
```

### Troubleshooting:

If size doesn't change:
1. **Hard refresh** browser (Ctrl+Shift+R)
2. Check browser console for errors
3. Verify API returns `size` field:
   ```
   http://localhost:3001/api/portfolio?status=published
   ```
   Each item should have `"size": "large"` or `"size": "medium"`

### Expected Result:
✅ Large cards display wider (600px) vs Medium cards (400px square)
✅ Changes in admin reflect immediately on homepage after save + refresh
