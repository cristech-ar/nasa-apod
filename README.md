# <img src="https://github.com/user-attachments/assets/fcd943a5-8828-4399-a37a-6371d7483d9a" alt="NASA" width="100" /> NASA APOD Viewer

https://nasa-apod.crisdev.tech

![desktop_1](https://github.com/user-attachments/assets/9a39a2c9-9255-453a-a16d-102bfcc3cdc7)


A **React** web application built with **TypeScript** and **Vite** to explore the wonders of the universe! This app consumes the **NASA API** to display the **Astronomical Picture of the Day (APOD)** along with its description. 🚀✨

---

## 🛠️ Features

- 🌠 **Daily Astronomical Image**: Explore the universe with NASA's curated image of the day, select the day on calendar.
- 📜 **Image Descriptions**: Learn more about each day's picture with its detailed description.
- ⚡ **Modern Development Stack**: Built with React, TypeScript, and Vite for blazing-fast performance.
- 🐳 **Docker Support**: Ready for deployment with an included Dockerfile.

---

## 🚀 Getting Started

Follow these steps to set up the application in development mode or build a Docker image for deployment.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 20 or higher)
- **npm** (Node Package Manager)
- **Docker** (for containerization)

---

## 🖥️ Running in Development Mode

1. Clone the repository:
   ```bash
   git clone https://github.com/cristech-ar/nasa-apod
2. Open the project directory
   ```bash
   cd nasa-apod-viewer
4. Install dependencies:
   ```bash
   npm install
5. Start the development server:
   ```bash
   npm run dev
6. Open your browser and navigate to:
   ```arduino
   http://localhost:3000
Vite will host the application at this address by default.

🐳 Building and Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t nasa-apod .

2. Run the Docker container:
   ```bash
   docker run -d -p 5500:5500 --name nasa-apod-container nasa-apod

3. Access the application in your browser:
     ```arduino
   http://localhost:5500

🔧 Configuration

This app requires an API key from NASA. To configure it:

    Get your API key from the NASA API Portal.
    Create a .env file in the project root:

    VITE_NASA_API_KEY=your_api_key_here

🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements or report bugs.
📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
🌟 Acknowledgments

    NASA: For providing free and incredible data through their APIs.
    Vite: For making development fast and efficient.
    React: For powering the UI.

Enjoy exploring the universe! 🌌✨

Developed By Cris Dev (https://crisdev.tech)
