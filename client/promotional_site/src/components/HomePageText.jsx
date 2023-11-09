import './HomePageText.css'; // Import the CSS file

export default function SearchAppBar() {
  return (
    <span className="homePageText"> {/* Assign a class name for styling */}
      <p className="firstParagraph" >Access your application promotion page with one click</p>
      <p className="secondParagraph">Enter the URL of the application in Google Play and App Store see the result.</p>
    </span>
  );
}
