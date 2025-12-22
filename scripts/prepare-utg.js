// // scripts/prepare-utg.js
// const fs = require("fs");
// const path = require("path");

// function convertComponentsToText(dir) {
//   const files = fs.readdirSync(dir);

//   files.forEach((file) => {
//     const fullPath = path.join(dir, file);
//     const stats = fs.statSync(fullPath);

//     if (stats.isDirectory()) {
//       convertComponentsToText(fullPath); // recurse
//     } else if (file.endsWith(".jsx") || file.endsWith(".tsx")) {
//       const content = fs.readFileSync(fullPath, "utf-8");

//       // Option 1: Save a simplified text version
//       const textContent = content
//         .replace(/import .* from .*/g, "") // remove imports
//         .replace(/export /g, "")           // remove exports
//         .replace(/<.*?>/g, "");           // remove JSX tags

//       const txtPath = fullPath + ".txt";  // e.g., Card.jsx.txt
//       fs.writeFileSync(txtPath, textContent, "utf-8");
//     }
//   });
// }

// // Run on src folder
// convertComponentsToText(path.join(__dirname, "../src"));
// console.log("UTG-prep: Component files converted to text placeholders.");

// scripts/prepare-utg.js
const fs = require("fs");
const path = require("path");

function convertComponentsToText(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    // Skip node_modules and hidden folders
    if (fullPath.includes("node_modules") || file.startsWith(".")) return;

    if (stats.isDirectory()) {
      convertComponentsToText(fullPath); // recurse into folders
    } else if (
      (file.endsWith(".jsx") || file.endsWith(".tsx")) &&
      !file.endsWith(".test.jsx") &&
      !file.endsWith(".spec.jsx") &&
      !file.endsWith(".test.tsx") &&
      !file.endsWith(".spec.tsx")
    ) {
      const content = fs.readFileSync(fullPath, "utf-8");

      // Simplified text version for UTG
      const textContent = content
        .replace(/import .* from .*/g, "") // remove imports
        .replace(/export /g, "")           // remove exports
        .replace(/<.*?>/g, "");           // remove JSX tags

      const txtPath = fullPath + ".txt";  // e.g., Card.jsx.txt
      fs.writeFileSync(txtPath, textContent, "utf-8");
      console.log(`UTG-prep: Created ${txtPath}`);
    }
  });
}

// Entry point: src folder
const srcPath = path.join(__dirname, "../src");
if (!fs.existsSync(srcPath)) {
  console.error("UTG-prep: src folder not found. Make sure this script is run in React repo root.");
  process.exit(1);
}

convertComponentsToText(srcPath);
console.log("UTG-prep: All component files converted to text placeholders.");
