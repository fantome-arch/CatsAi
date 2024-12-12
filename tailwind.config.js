/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        appbg: "#f6f9fc",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        dmsans: ["DM Sans","sans-serif"], // Add Mulish from Google Fonts
        paytone: ["Paytone One","sans-serif"], // Add Mulish from Google Fonts
      },
      fontWeight: { 
        header1Weight: 600,
        subHeading1Weight: 400,
        buttonTitle:700,
        titleWeight1:700,
        generalTextWeight1:400 // Custom font weight with a value
        // Another custom font weight
      },
      fontSize: {
        xxs: "0.625rem", // Custom extra-extra-small (10px)
        "header1": ["27px", { lineHeight: "30px" }], // Custom 3xl size with specific line height
        "header2": ["20px", { lineHeight: "30px" }], // Custom 3xl size with specific line height
        "subHeading1": ["16px", { lineHeight: "22px" }], // Custom 3xl size with specific line height 
        "subHeading2": ["16px", { lineHeight: "20px" }],
        "subHeading4": ["16px", { lineHeight: "30px" }],
        "subHeading3": ["20px", { lineHeight: "47px" }],
        "generalText1": ["16px", { lineHeight: "18px" }],
        "generalText2": ["18px", { lineHeight: "18px" }],
        "generalText3": ["14px", { lineHeight: "18px" }],
        "generalText4": ["16px", { lineHeight: "25px" }],
        "generalText5": ["12px", { lineHeight: "25px" }],
        "logoText": ["24px", { lineHeight: "32px" }],
       // Custom 3xl size with specific line height 
      },
    },
  },
  plugins: [],
};
