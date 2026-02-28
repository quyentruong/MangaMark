# MangaMark - Project Feature Summary

## Project Overview
MangaMark is a web application that allows users to track their reading/watching progress for manga, anime, and TV shows. Users can manage their collections, track chapters/episodes, export/import data, and access their collection via a browser extension using API keys.

---

## Core Entities & Data Models

### 1. User Model
**Table**: `users`

**Fields**:
- `id` (bigint, auto-increment)
- `name` (string)
- `email` (string, unique)
- `password` (string, hashed)
- `api_key` (string, nullable) - For browser extension access
- `email_verified_at` (timestamp, nullable)
- `remember_token` (string)
- `created_at` (timestamp)
- `updated_at` (timestamp)

**Relationships**:
- Has many Mangas
- Has many Animes
- Has many TVShows

**Computed Fields** (Frontend):
- `mangas_count` - Total number of manga entries
- `animes_count` - Total number of anime entries
- `tvshows_count` - Total number of TV show entries

---

### 2. Manga Model
**Table**: `mangas`

**Fields**:
- `id` (bigint, auto-increment)
- `name` (string) - Primary name
- `other_name_1` (string, nullable) - Alternative name 1
- `other_name_2` (string, nullable) - Alternative name 2
- `other_name_3` (string, nullable) - Alternative name 3
- `user_id` (bigint, foreign key to users)
- `quantity` (float) - Current chapter number
- `created_at` (timestamp)
- `updated_at` (timestamp)

**Constraints**:
- Unique constraint on (`user_id`, `name`)
- Foreign key on `user_id` with cascade delete

---

### 3. Anime Model
**Table**: `animes`

**Fields**:
- `id` (bigint, auto-increment)
- `name` (string)
- `other_name_1` (string, nullable)
- `other_name_2` (string, nullable)
- `other_name_3` (string, nullable)
- `user_id` (bigint, foreign key to users)
- `season` (integer) - Current season number
- `quantity` (float) - Current episode number
- `created_at` (timestamp)
- `updated_at` (timestamp)

**Constraints**:
- Unique constraint on (`user_id`, `name`)
- Foreign key on `user_id` with cascade delete

---

### 4. TVShow Model
**Table**: `t_v_shows`

**Fields**:
- Same as Anime model
- `season` (integer)
- `quantity` (float) - Current episode number

**Constraints**:
- Unique constraint on (`user_id`, `name`)
- Foreign key on `user_id` with cascade delete

---

## Authentication & Authorization

### Authentication Method
- **JWT (JSON Web Tokens)** using `tymon/jwt-auth` package
- Token-based authentication for API requests
- Tokens stored client-side and sent with each request

### Email Verification (Optional)
- Configurable via `config('url.account_verify')`
- Email verification notification sent on registration
- Users must verify email before login (if enabled)

### Password Reset Flow
1. User requests password reset via email
2. System sends password reset link to email
3. User clicks link and submits new password
4. Password is reset and user can login

---

## API Endpoints

### Authentication Endpoints (Public)

#### 1. **POST** `/api/auth/login`
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response**:
```json
{
  "token": "jwt-token-string",
  "data": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "created_at": "2023-01-01T00:00:00.000000Z",
    "api_key": "generated-api-key-string",
    "mangas_count": 10,
    "animes_count": 5,
    "tvshows_count": 3
  }
}
```
**Validations**:
- Email must exist in database
- Password must match
- Email must be verified (if verification is enabled)

---

#### 2. **POST** `/api/auth/register`
**Request Body**:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "password_confirmation": "password123"
}
```
**Response**:
```json
{
  "token": "jwt-token-string",
  "data": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com"
  }
}
```
**Business Logic**:
- Password is hashed using bcrypt
- JWT token generated immediately
- Email verification notification sent (if enabled)
- If verification enabled, token only returned after verification

---

#### 3. **POST** `/api/auth/recovery`
**Purpose**: Request password reset email

**Request Body**:
```json
{
  "email": "user@example.com"
}
```
**Response**:
```json
{
  "message": "Password reset email sent.",
  "data": "reset-link-sent-response"
}
```

---

#### 4. **POST** `/api/auth/reset`
**Purpose**: Reset password using reset token

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "newpassword123",
  "password_confirmation": "newpassword123",
  "token": "reset-token-from-email"
}
```

---

#### 5. **POST** `/api/auth/verify`
**Purpose**: Verify user email address

**Request Body**:
```json
{
  "email": "user@example.com",
  "token": "verification-token"
}
```
**Business Logic**:
- Validates token matches user
- Updates `email_verified_at` to current timestamp
- Returns success message

---

### Protected Endpoints (Require JWT Token)

**Middleware**: `jwt`, `jwt.auth`

#### 6. **POST** `/api/logout`
**Purpose**: Logout user by invalidating token

**Response**:
```json
{
  "message": "Successfully logged out"
}
```

---

#### 7. **GET** `/api/profile`
**Purpose**: Get current user information

**Response**:
```json
{
  "data": {
    "id": 1,
    "name": "User Name",
    "email": "user@example.com",
    "api_key": "generated-api-key",
    "created_at": "2023-01-01T00:00:00.000000Z",
    "mangas_count": 10,
    "animes_count": 5,
    "tvshows_count": 3
  }
}
```

---

#### 8. **PUT** `/api/profile`
**Purpose**: Update user profile (name, email)

**Request Body**:
```json
{
  "name": "New Name",
  "email": "newemail@example.com"
}
```
**Validations**:
- Name is required
- Email must be valid and unique

---

#### 9. **PUT** `/api/profile/password`
**Purpose**: Update user password

**Request Body**:
```json
{
  "current_password": "oldpassword123",
  "new_password": "newpassword123",
  "new_password_confirmation": "newpassword123"
}
```
**Validations**:
- Current password must be correct
- New password minimum 8 characters
- Password confirmation must match

---

#### 10. **PUT** `/api/generateapi`
**Purpose**: Generate new API key for browser extension

**Request Body**:
```json
{
  "id": 1
}
```
**Response**:
```json
{
  "data": {
    "id": 1,
    "api_key": "newly-generated-40-character-random-string"
  }
}
```
**Business Logic**:
- Generates random 40-character string
- Updates user's api_key field

---

### Category Endpoints (Manga, Anime, TVShow)

**Pattern**: `/api/category/{type}/` where `{type}` is `manga`, `anime`, or `tvshow`

All three categories (Manga, Anime, TVShow) share identical endpoints with different paths.

---

#### 11. **GET** `/api/category/manga/`
**Purpose**: Get all manga for authenticated user

**Response**:
```json
{
  "data": [
    {
      "id": 1,
      "name": "One Piece",
      "other_name_1": "ワンピース",
      "other_name_2": null,
      "other_name_3": null,
      "user_id": 1,
      "quantity": 1050,
      "created_at": "2023-01-01T00:00:00.000000Z",
      "updated_at": "2023-01-15T10:30:00.000000Z"
    }
  ]
}
```

**Equivalent endpoints**:
- GET `/api/category/anime/`
- GET `/api/category/tvshow/`

---

#### 12. **POST** `/api/category/manga/`
**Purpose**: Create new manga entry

**Request Body**:
```json
{
  "name": "Naruto",
  "quantity": 1,
  "user_id": 1
}
```
**Response**: Returns created manga object with 201 status

**Validations**:
- `name` is required and must be unique per user
- `quantity` is required, numeric, minimum 1
- `user_id` is required

**Equivalent endpoints**:
- POST `/api/category/anime/` (includes `season` field)
- POST `/api/category/tvshow/` (includes `season` field)

---

#### 13. **PUT** `/api/category/manga/{id}`
**Purpose**: Update manga entry

**Request Body**:
```json
{
  "name": "Naruto",
  "quantity": 2,
  "action": "number",
  "user_id": 1
}
```
**Action Types**:
- `"name"` - Updating name field (validates uniqueness)
- `"number"` - Updating quantity/chapter (validates >= 1)
- `"other_name"` - Updating alternative names (minimal validation)

**Validations based on action**:
- **name**: Must be unique for user
- **number**: Must be numeric and >= 1
- **other_name**: Only user_id required

**Equivalent endpoints**:
- PUT `/api/category/anime/{id}`
- PUT `/api/category/tvshow/{id}`

---

#### 14. **DELETE** `/api/category/manga/{id}`
**Purpose**: Delete single manga entry

**Response**: 204 No Content

**Equivalent endpoints**:
- DELETE `/api/category/anime/{id}`
- DELETE `/api/category/tvshow/{id}`

---

#### 15. **GET** `/api/export/manga/{user_id}`
**Purpose**: Export all manga data to Excel file

**Response**: Binary Excel file (XLSX format)

**File Format**:
- Filename: `manga_id_{user_id}_{timestamp}.xlsx`
- Columns: name, other_name_1, other_name_2, other_name_3, quantity, created_at, updated_at
- Metadata includes: user email, export date, description

**Equivalent endpoints**:
- GET `/api/export/anime/{user_id}`
- GET `/api/export/tvshow/{user_id}`

---

#### 16. **POST** `/api/import/manga`
**Purpose**: Import manga data from Excel file

**Request Body** (multipart/form-data):
```
xlsx: [file]
id: 1
```
**Response**: 201 Created

**Business Logic**:
- Reads Excel file with heading row
- Only creates entries that don't already exist (by name)
- Preserves original created_at and updated_at timestamps
- Skips duplicates silently

**Validations**:
- `id` is required
- `xlsx` is required and must be .xlsx file

**Equivalent endpoints**:
- POST `/api/import/anime`
- POST `/api/import/tvshow`

---

#### 17. **DELETE** `/api/delete/manga/{user_id}`
**Purpose**: Delete ALL manga entries for a user

**Response**: 204 No Content

**Warning**: This is a destructive operation that deletes all manga for the user

**Equivalent endpoints**:
- DELETE `/api/delete/anime/{user_id}`
- DELETE `/api/delete/tvshow/{user_id}`

---

### Public API Endpoints (Browser Extension)

These endpoints use API key authentication instead of JWT.

---

#### 18. **GET** `/api/getinfomanga`
**Purpose**: Get manga information by name (for browser extension)

**Query Parameters**:
```
user_id: 1
manga_name: "One Piece"
api: "user-api-key-string"
```
**Response**:
```json
{
  "data": {
    "id": 1,
    "name": "One Piece",
    "other_name_1": "ワンピース",
    "other_name_2": null,
    "other_name_3": null,
    "quantity": 1050,
    "created_at": "2023-01-01T00:00:00.000000Z",
    "updated_at": "2023-01-15T10:30:00.000000Z"
  }
}
```
**Business Logic**:
- Validates API key matches user
- Searches by name OR any of the 3 alternative names
- Returns 404 if manga not found
- Returns 500 if API key incorrect

---

#### 19. **PUT** `/api/updatemanga`
**Purpose**: Update manga chapter number (for browser extension)

**Request Body**:
```json
{
  "user_id": 1,
  "manga_name": "One Piece",
  "chap_number": 1051,
  "api": "user-api-key-string"
}
```
**Response**: Returns updated manga object

**Business Logic**:
- Validates API key matches user
- Searches by name OR any alternative names
- Updates quantity field
- Auto-updates updated_at timestamp

---

## Frontend Features

### Page Structure

#### 1. **Index Page** (`/`)
**Purpose**: Main data table for managing manga/anime/tvshow

**Features**:
- **Slot Selector**: Switch between Manga, Anime, TVShow
- **Search Bar** with multiple filter modes:
  - `name=` - Search by name or alternative names
  - `chapter=` - Exact chapter/episode match
  - `chapter≥` - Chapter/episode greater than or equal
  - `chapter≤` - Chapter/episode less than or equal
  - `year=` - Filter by year (YYYY format)
  - `month=` - Filter by month (YYYY-MM format)
  - `day=` - Filter by day (YYYY-MM-DD format)

- **Data Table Columns** (Manga):
  - Name (editable inline)
  - Chapter (editable inline)
  - Last Read (timestamp, auto-formatted)
  - Actions (menu)

- **Data Table Columns** (Anime/TVShow):
  - Name (editable inline)
  - Season (editable inline)
  - Episode (editable inline)
  - Last Watched (timestamp)
  - Actions (menu)

- **Inline Editing**:
  - Click any name/chapter/episode/season field to edit
  - Changes saved immediately on blur
  - Validation errors shown inline

- **Actions Menu** (per row):
  - Increase (+1 to chapter/episode)
  - Decrease (-1 to chapter/episode, minimum 1)
  - Delete item
  - Google Name (opens Google search)
  - Copy Name (copies to clipboard)
  - Other Names (dialog with 3 alternative names)
    - Each alternative name can be copied or Googled

- **Visual Indicators**:
  - Items not updated in 30+ days shown with strikethrough
  - Title compression on smaller screens

- **Auto-refresh**: Data refreshes every 5 minutes automatically

- **Pagination**: Built-in pagination for large datasets

- **State Persistence**:
  - Selected slot (Manga/Anime/TVShow) saved to localStorage
  - Pagination/sorting options saved per slot

---

#### 2. **Profile Page** (`/profile`)
**Purpose**: Manage user account settings and data

**Sections**:

**User Information** (Read-only):
- User ID
- Number of Mangas
- Number of Animes
- Number of TV Shows
- Account created date
- Days since account creation

**Editable Fields**:
- Name
- Email

**API Key Management**:
- Display current API key (read-only)
- Generate new API key button
- Copy API key button

**Bulk Operations**:
1. **Import Data**:
   - Import Manga (XLSX file upload)
   - Import Anime (XLSX file upload)
   - Import TVShow (XLSX file upload)

2. **Export Data**:
   - Export Manga to XLSX
   - Export Anime to XLSX
   - Export TVShow to XLSX

3. **Delete Data**:
   - Delete all Manga (with confirmation)
   - Delete all Anime (with confirmation)
   - Delete all TVShow (with confirmation)

4. **Change Password**:
   - Dialog form with validation
   - Current password verification
   - New password with confirmation

---

#### 3. **FAQ Page** (`/faq`)
**Purpose**: Help documentation

**Content** (from `faq-content.js`):
- What is the purpose of this website?
- How to use search bar with filters
- How to add/edit/delete items
- How to import/export data
- Browser extension information
- API key usage
- Profile management

---

#### 4. **Guest Pages**

**Login** (`/guest/login`):
- Email field
- Password field (with show/hide toggle)
- Login button
- "Forgot password" link

**Register** (`/guest/register`):
- Name field
- Email field
- Password field (min 8 characters)
- Password confirmation field
- reCAPTCHA verification
- Create account button

**Forgot Password** (`/guest/forgot-password`):
- Email field
- Request reset link button

**Reset Password** (`/guest/reset-password`):
- New password field
- Password confirmation field
- Reset button

---

### Frontend Components

#### AddNewItem Component
**Purpose**: Dialog to add new manga/anime/tvshow

**Fields**:
- Name (required, validated)
- Season (Anime/TVShow only, numeric, min 1, default 1)
- Chapter/Episode (required, numeric, min 1, default 1)

**Validation**:
- Name cannot be empty
- Name must be unique for user
- Quantity must be numeric and >= 1

---

#### ModifyCell Component
**Purpose**: Inline editing for table cells

**Features**:
- Click to edit
- Immediate validation
- Auto-save on blur
- Different input types (text for name, number for quantity)
- Character counter
- Title compression on mobile
- Visual indicator for old reads (30+ days)

---

#### AddDecreaseNumber Component
**Purpose**: Increment/decrement chapter or episode

**Features**:
- +1 button (green icon)
- -1 button (red icon, minimum 1)
- Handles decimal chapters (rounds up for increase, down for decrease)
- Prevents going below 1

---

#### DeleteDialog Component
**Purpose**: Confirm before deleting item

**Features**:
- Confirmation dialog
- Permanent deletion warning

---

#### OtherName Component
**Purpose**: Manage 3 alternative names

**Features**:
- Dialog with 3 text fields
- Each field has:
  - Copy button (copies to clipboard)
  - Google button (opens Google search)
- Save/Cancel buttons
- Validation for each field

---

#### Export Component
**Purpose**: Export data to Excel

**Features**:
- Menu with 3 options (Manga, Anime, TVShow)
- Downloads XLSX file
- Filename includes user ID and timestamp

---

#### Import Component
**Purpose**: Import data from Excel

**Features**:
- Menu with 3 upload options
- File picker for XLSX files
- Validates file format
- Shows success/error messages
- Only imports non-duplicate entries

---

#### Delete Component
**Purpose**: Delete all data for a category

**Features**:
- Confirmation dialog
- Permanent deletion warning
- Success notification

---

#### PasswordForm Component
**Purpose**: Change user password

**Features**:
- Current password field (with verification)
- New password field (min 8 characters)
- Password confirmation field
- Show/hide toggles for all fields

---

### State Management (Vuex)

**Store Structure**:

**State**:
```javascript
{
  itemSlots: [
    { name: 'item.name', value: 'name' },
    { name: 'item.season', value: 'season' },
    { name: 'item.quantity', value: 'quantity' }
  ],
  headersSlot: {
    Manga: [...],
    Anime: [...],
    TVShow: [...]
  },
  currentHeader: {},
  snackbars: [],
  auth: {
    user: { /* user object */ }
  }
}
```

**Mutations**:
- `setArrayHeader` - Set current table headers for selected slot
- `SET_SNACKBAR` - Add notification (max 5 concurrent)
- `updateField` - Update form fields (vuex-map-fields)

**Actions**:
- `setSnackbar` - Dispatch notification with text and color

---

## Business Logic & Features

### 1. **Multiple Alternative Names**
Each manga/anime/tvshow can have up to 3 alternative names:
- Used for searching (search matches any of the 4 names)
- Used for API lookups (browser extension)
- Useful for titles with different translations

---

### 2. **Auto-update Timestamps**
- `updated_at` automatically updates on any change
- Used to track "last read/watched" date
- 30+ days shows item as "old" with strikethrough

---

### 3. **Decimal Chapter Support**
- Quantity field accepts decimals (e.g., 12.5 for chapter 12.5)
- Increment rounds up if decimal
- Decrement rounds down if decimal

---

### 4. **Data Export/Import**
**Export**:
- XLSX format with all fields
- Preserves timestamps
- Includes metadata (user email, export date)

**Import**:
- Must be XLSX format
- Duplicate checking by name
- Preserves original timestamps from file
- Skips existing entries silently

---

### 5. **Browser Extension Integration**
- Uses API key authentication (not JWT)
- Two-step verification (user_id + api_key)
- Can query manga by any of 4 names
- Can update chapter number remotely
- API key can be regenerated at any time

---

### 6. **Search & Filter System**

**Filter Modes**:
1. **name=** - Searches all 4 name fields (primary + 3 alternatives)
2. **chapter=** - Exact match on quantity
3. **chapter≥** - Greater than or equal
4. **chapter≤** - Less than or equal
5. **year=** - Filters by year portion of updated_at
6. **month=** - Filters by year-month of updated_at
7. **day=** - Filters by exact date of updated_at

**Implementation**:
- Client-side filtering using custom filter function
- Case-insensitive search
- Supports multiple space-separated keywords for name search

---

### 7. **Unique Constraints**
- Each user can only have ONE entry per name
- Prevents duplicate manga/anime/tvshow entries
- Validated both on backend and frontend

---

### 8. **Cascade Deletion**
- When user is deleted, all their manga/anime/tvshow entries are automatically deleted
- Ensures no orphaned data

---

### 9. **Password Security**
- Passwords hashed using bcrypt
- Minimum 8 characters on registration
- Current password verification required for change
- Password confirmation required

---

### 10. **Email Notifications**
- Password reset emails
- Email verification emails (if enabled)
- Custom notification templates

---

## Data Validation Rules

### User Registration
- Name: required
- Email: required, valid email format, unique
- Password: required, minimum 8 characters
- Password confirmation: must match password

### User Profile Update
- Name: required
- Email: required, valid email format, unique (excluding current user)

### Password Change
- Current password: required, must match user's current password
- New password: required, minimum 8 characters
- Password confirmation: must match new password

### Manga/Anime/TVShow Create
- Name: required, unique per user
- Quantity: required, numeric, minimum 1
- Season (Anime/TVShow): required, integer, minimum 1
- User ID: required, numeric

### Manga/Anime/TVShow Update
**Action: "name"**
- Name: required, unique per user

**Action: "number"**
- Quantity: required, numeric, minimum 1

**Action: "other_name"**
- No specific validation beyond user_id

### Import Data
- User ID: required
- XLSX file: required, must be .xlsx MIME type

### API Key Operations
- User ID: required, numeric, minimum 1
- API key: required (for getinfomanga and updatemanga)

### Browser Extension API
**getinfomanga**:
- user_id: required, numeric, minimum 1
- manga_name: required
- api: required, must match user's api_key

**updatemanga**:
- user_id: required, numeric, minimum 1
- manga_name: required
- chap_number: required, numeric, minimum 1
- api: required, must match user's api_key

---

## Error Handling

### Frontend Error Display
- **422 Validation Errors**: Shown inline on form fields
- **401 Authentication Errors**: Shown as snackbar notification
- **404 Not Found**: Shown as snackbar notification
- **500 Server Errors**: Shown as snackbar notification

### Backend Error Responses
**401 Unauthorized**:
```json
{
  "error": "Email or password is incorrect. Authentication failed."
}
```

**422 Validation Error**:
```json
{
  "error": {
    "name": ["The name has already been taken."],
    "quantity": ["The quantity must be at least 1."]
  }
}
```

**404 Not Found**:
```json
{
  "error": "User not found."
}
```

---

## Security Features

### 1. **JWT Token Security**
- Tokens expire (configurable)
- Tokens invalidated on logout
- Tokens verified on each protected endpoint

### 2. **API Key Security**
- 40-character random string
- Can be regenerated at any time
- Validated against user_id for each request

### 3. **Password Hashing**
- Bcrypt algorithm
- Password never stored in plain text
- Current password required for changes

### 4. **CORS Configuration**
- Configured via `laravel-cors` package
- Allows frontend domain access

### 5. **Email Verification** (Optional)
- Prevents unverified users from logging in
- Token-based verification
- Configurable via environment variable

### 6. **Request Validation**
- All inputs validated on backend
- Type checking (numeric, email, etc.)
- Length validation
- Uniqueness validation

### 7. **CSRF Protection**
- Laravel CSRF middleware
- Token-based for form submissions

### 8. **SQL Injection Prevention**
- Eloquent ORM used throughout
- Parameterized queries
- No raw SQL with user input

---

## Feature Workflows

### User Registration Flow
1. User fills registration form (name, email, password, confirmation)
2. Frontend validates input
3. reCAPTCHA verification
4. POST to `/api/auth/register`
5. Backend creates user with hashed password
6. JWT token generated
7. If email verification enabled:
   - Verification email sent
   - User must verify before login
8. If email verification disabled:
   - User logged in immediately
   - Token returned

---

### Login Flow
1. User enters email and password
2. POST to `/api/auth/login`
3. Backend verifies:
   - User exists
   - Email verified (if required)
   - Password matches
4. JWT token generated
5. User data and token returned to frontend
6. Token stored and used for subsequent requests

---

### Add New Item Flow
1. User clicks + button
2. Dialog opens with form
3. User fills: name, quantity (and season for anime/tvshow)
4. Frontend validates:
   - Name required
   - Quantity >= 1
   - Name unique (backend validates)
5. POST to `/api/category/{type}/`
6. Backend creates entry with current timestamp
7. Success notification shown
8. Data table refreshes
9. Dialog closes

---

### Edit Item Flow
1. User clicks on name/chapter/episode/season field
2. Edit dialog opens
3. User modifies value
4. On blur/save:
   - Frontend validates
   - Removes created_at/updated_at from request
   - Sets "action" field (name/number/other_name)
   - PUT to `/api/category/{type}/{id}`
   - Backend validates based on action type
   - Updates entry and updated_at timestamp
5. Success notification shown
6. Data table refreshes

---

### Increase/Decrease Flow
1. User opens actions menu
2. Clicks Increase or Decrease
3. Frontend:
   - Increments/decrements value
   - Prevents going below 1
   - Handles decimal rounding
4. PUT to `/api/category/{type}/{id}` with action="number"
5. Backend updates quantity
6. Success notification shown
7. Data table refreshes

---

### Delete Item Flow
1. User opens actions menu
2. Clicks Delete
3. Confirmation dialog appears
4. On confirm:
   - DELETE to `/api/category/{type}/{id}`
   - Backend deletes entry (204 response)
5. Success notification shown
6. Data table refreshes

---

### Export Data Flow
1. User clicks Export Data in profile
2. Selects category (Manga/Anime/TVShow)
3. GET to `/api/export/{type}/{user_id}`
4. Backend:
   - Queries all user entries
   - Formats as Excel with headers
   - Adds metadata
5. Binary Excel file returned
6. Frontend triggers download with timestamped filename

---

### Import Data Flow
1. User clicks Import Data in profile
2. Selects category
3. File picker opens
4. User selects XLSX file
5. POST to `/api/import/{type}` with multipart form:
   - xlsx file
   - user id
6. Backend:
   - Reads Excel file
   - For each row:
     - Check if name already exists
     - If not, create entry preserving timestamps
     - If yes, skip
7. 201 Created response
8. Success notification shown

---

### Delete All Data Flow
1. User clicks Delete Data in profile
2. Selects category
3. Confirmation dialog with warning
4. On confirm:
   - DELETE to `/api/delete/{type}/{user_id}`
   - Backend deletes ALL entries for user in that category
5. 204 No Content response
6. Success notification shown

---

### Browser Extension Flow
**Initial Setup**:
1. User generates API key in profile
2. User copies API key and user ID
3. User inputs into browser extension

**Query Manga**:
1. Extension sends GET to `/api/getinfomanga`
2. Parameters: user_id, manga_name, api
3. Backend validates API key
4. Searches by name OR alternative names
5. Returns manga data or 404

**Update Chapter**:
1. Extension sends PUT to `/api/updatemanga`
2. Parameters: user_id, manga_name, chap_number, api
3. Backend validates API key
4. Searches by name OR alternative names
5. Updates quantity field
6. Returns updated manga data

---

### Password Reset Flow
1. User clicks "Forgot password" on login
2. Enters email
3. POST to `/api/auth/recovery`
4. Backend sends password reset email with token
5. User clicks link in email
6. Reset password page opens
7. User enters new password and confirmation
8. POST to `/api/auth/reset` with token
9. Backend validates token and updates password
10. User can now login with new password

---

### Password Change Flow
1. User opens Change Password dialog in profile
2. Enters:
   - Current password
   - New password (min 8 chars)
   - Password confirmation
3. Frontend validates match
4. PUT to `/api/profile/password`
5. Backend:
   - Verifies current password
   - Validates new password
   - Updates password with new hash
6. Success notification shown
7. Dialog closes

---

## Technical Implementation Details

### Frontend Technologies
- **Framework**: Nuxt.js (Vue.js SSR framework)
- **UI Library**: Vuetify (Material Design)
- **State Management**: Vuex with vuex-map-fields
- **HTTP Client**: Axios
- **Authentication**: @nuxtjs/auth-next module
- **Date/Time**: moment.js
- **Clipboard**: vue-clipboard2
- **Icons**: Material Design Icons (mdi)
- **Fonts**: Be Vietnam font family

### Backend Technologies
- **Framework**: Laravel (PHP)
- **Authentication**: tymon/jwt-auth
- **Excel**: maatwebsite/excel
- **CORS**: barryvdh/laravel-cors
- **Database**: MySQL/PostgreSQL/SQLite compatible

### Frontend Utilities
- **Custom Filter**: Advanced search/filter logic
- **Validations**: Reusable validation rules
- **Meta**: SEO meta tag management
- **FAQ Content**: Centralized FAQ data

### Frontend Plugins
- **nuxt-client-apexcharts**: Chart library (unused in current version)
- **nuxt-client-capitalize**: String capitalization helper
- **nuxt-client-clipboard2**: Clipboard functionality
- **nuxt-client-dialog**: Confirmation dialogs

### Frontend Middleware
- Authentication middleware (Nuxt auth module)

### Backend Features
- **Database Backup**: Google Drive integration (configurable)
- **Job Queues**: Laravel queue system
- **Notifications**: Email notifications via Laravel

---

## Database Relationships Summary

```
User (1) ─── (Many) Manga
User (1) ─── (Many) Anime
User (1) ─── (Many) TVShow
```

All relationships use cascade delete:
- Deleting a user deletes all their entries

---

## URL/Route Structure

### Frontend Routes
- `/` - Index page (requires auth)
- `/profile` - Profile page (requires auth)
- `/faq` - FAQ page (public)
- `/guest/login` - Login page (guest only)
- `/guest/register` - Register page (guest only)
- `/guest/forgot-password` - Password recovery (guest only)
- `/guest/reset-password` - Password reset (guest only)

### API Routes (all prefixed with `/api`)
See "API Endpoints" section above for complete list

---

## Configuration Options

### Backend Configuration
**config/url.php** (assumed):
- `account_verify` - Enable/disable email verification

**JWT Configuration**:
- Token expiration time
- Refresh token settings
- Secret key

**Mail Configuration**:
- SMTP settings for password reset and verification emails

**Database Configuration**:
- `DB_BOOT_LIMIT` - For large datasets

### Frontend Configuration
**nuxt.config.js**:
- API base URL
- Authentication settings
- Module configurations

---

## Browser Extension Details

### Required Information
- User ID (from profile page)
- API Key (generated in profile page)

### Extension Capabilities
1. Query manga information by name
2. Update chapter number
3. Search by alternative names

### Extension Authentication
- API key-based (not JWT)
- Validates user_id + api_key pair
- Independent from web application authentication

---

## Additional Features

### Google Search Integration
- Quick Google search for manga/anime names
- Opens new tab with search query
- Available for main name and all alternative names

### Clipboard Integration
- Copy manga/anime/tvshow names
- Copy API key
- Shows success/error notifications

### Notifications System
- Snackbar notifications
- Color-coded (info, success, error, warning)
- Maximum 5 concurrent notifications
- Auto-dismiss functionality

### Responsive Design
- Mobile-optimized layouts
- Adaptive table columns
- Title compression on small screens
- Touch-friendly controls

### Dark Mode Support
- Vuetify theme system
- User preference saved
- Automatic contrast adjustments

### Auto-refresh
- Data refreshes every 5 minutes
- Manual refresh available
- Loading indicators during refresh

### Persistence
- Selected slot saved to localStorage
- Pagination state saved per slot
- User preferences preserved across sessions

---

## Migration Considerations

### Database Migration Priority
1. Users table (with api_key field)
2. Mangas, Animes, TVShows tables (with foreign keys)
3. Password resets table (for password recovery)
4. Failed jobs table (for queue system)

### Required Validations to Implement
- All request validation rules documented above
- Unique constraint on (user_id, name) for all category tables
- Email format and uniqueness validation
- Password strength validation (min 8 chars)
- Numeric field validation (quantity >= 1, season >= 1)

### Authentication to Implement
- JWT token generation and validation
- API key generation (40-character random string)
- Password hashing with bcrypt
- Email verification system (optional)
- Password reset token system

### File Operations to Implement
- Excel export with metadata
- Excel import with duplicate checking
- Timestamp preservation during import
- Binary file download handling

### Email Functionality to Implement
- Password reset emails
- Email verification emails
- Custom notification templates
- SMTP configuration

### Search/Filter Logic to Implement
- Multi-field name search (4 fields)
- Date range filtering (day, month, year)
- Comparison operators (=, ≥, ≤)
- Case-insensitive search
- Client-side filtering logic

### Business Logic to Implement
- Auto-update timestamps on edit
- Decimal chapter handling with rounding
- Cascade deletion on user delete
- Duplicate prevention during import
- API key validation for extension endpoints
- 30-day "old read" calculation

---

## Summary Statistics

**Total API Endpoints**: 19
**Database Tables**: 6 (users, mangas, animes, t_v_shows, password_resets, failed_jobs)
**Frontend Pages**: 8
**Reusable Components**: 12+
**Authentication Methods**: 2 (JWT for web, API key for extension)
**Export/Import Categories**: 3 (Manga, Anime, TVShow)
**Search Filter Modes**: 7
**Alternative Names per Entry**: 3
**Maximum Concurrent Notifications**: 5

---

## End of Summary

This document contains all the essential information needed to migrate MangaMark to a new framework. It covers data models, API endpoints, business logic, validation rules, authentication mechanisms, and feature workflows.
