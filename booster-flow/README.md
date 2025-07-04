# Booster Purchase Flow – Animall 

A modern, mobile-first web flow built with **Next.js** (App Router) and **Tailwind CSS**. This project simulates a 3-step booster purchase experience inspired by Animall, with clean UI, responsive design, and modular code.

## 🚀 Features

- **Booster Listing:**  
  Choose from three dummy booster plans, each showing duration, price, and a brief benefit.

- **Coupon Code Input:**  
  Enter a coupon code (`SAVE50` for 50% off). Invalid codes show an error.

- **Confirmation:**  
  See a summary of your selected plan, the discount, and confirm your purchase.

- **Success Screen:**  
  Celebrate your purchase with a modern, themed success message.

- **Mobile-First & Responsive:**  
  Fully responsive layouts with modern gradients, card styles, and smooth transitions.

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **Tailwind CSS**

## 🏗️ Project Structure
Src have 3 folder [confirm, coupon, success] and layout and page.tsx

page.tsx in src folder is main landing page and folders like [confirm, coupon, success]  are the sub pages which will be displayed according to the usage.



## 🔄 Data Flow

- Plan details are passed between pages via URL query parameters for simplicity.
- For larger apps, consider using React Context or localStorage for state management.

## 🧑‍💻 Getting Started

1. **Clone the repository:**
git clone https://github.com/ravvviii/Animall.git



2. **Install dependencies:**
npm install




3. **Run the development server:**

npm run dev





4. **Open in your browser:**  
Visit [http://localhost:3000](http://localhost:3000)

## 📝 Usage

1. Select a booster plan.
2. Enter a coupon code (`SAVE50` for 50% discount).
3. Review and confirm your purchase.
4. See the success screen!




