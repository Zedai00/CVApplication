# 📝 CV Maker

A simple and customizable CV/resume builder built with React. It allows users to input general information, education background, and work experience in edit mode, and then generate a printable resume layout in display mode.

---

## 🚀 Features

- Toggle between **Edit** and **Submit** modes
- Prefill sample data for quick testing
- Print-ready layout (labels and inputs hidden on print)
- Responsive and user-friendly design
- Add or remove fields dynamically (custom fields)
- State managed centrally via `App.jsx` for data persistence

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Gen.jsx        # General info section
│   ├── Edu.jsx        # Education section
│   └── Exp.jsx        # Experience section
├── App.jsx            # Main component
├── App.css            # App-level styles
├── main.jsx           # Entry point
└── index.css          # Global styles
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/cv-maker.git
cd cv-maker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then visit `http://localhost:5173` in your browser.

> **Note**: If you're using Create React App, use `npm start` instead.

---

## 🧪 Usage

- Click **Edit** to enter your personal, educational, and work info
- Click **Submit** to see your resume layout
- Click **Prefill** to auto-fill with sample data
- Click **Print** to open the browser print dialog

---

## 🖨️ Print Output

- In **submit** mode, all input borders and labels are hidden
- The layout is styled to resemble a clean, professional CV
- Use your browser’s print function (Ctrl+P or Cmd+P) or click the "Print" button

---

## 📌 TODO / Future Improvements

- Download CV as PDF directly
- Add photo/profile section
- Save to local storage
- Export/import JSON data
- Support for multiple entries in education/experience

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ by Zed
