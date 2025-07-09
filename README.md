# Jupiter

This is a frontend-only project that recreates the look and feel of the [Jupiter](https://jupiter.err.ee/) streaming service homepage using **Angular 17+**. It displays horizontal sections of content, a hero banner, and visually mimics the original site's layout.

Data is fetched from a live ERR API endpoint and rendered dynamically into responsive carousels.

## Features

- Responsive layout using CSS Flexbox and Grid
- Dynamic content loading from ERR API
- Hero banner with background image and title
- Horizontal scrolling carousels with custom navigation buttons

## Tech Stack

- **Angular 17+**
- **TypeScript**
- **RxJS** for reactive programming
- **SCSS/CSS** for styling
- Fetching data from ERR API


## Setup & Development

Clone the repository:
```bash
git clone https://github.com/palllaura/Jupiter.git
cd jupiter
```
Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## API
The data is pulled from the following endpoint:

```bash
https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee
```
<img width="1241" alt="Screenshot 2025-07-09 at 17 37 55" src="https://github.com/user-attachments/assets/c4bcc5e9-3d22-4d71-a664-4294cd42e1c1" />

