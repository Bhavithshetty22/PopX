export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>

      <div className="profile-section">
        <div className="profile-image-container">
          <img src="/placeholder.svg?height=96&width=96" alt="Profile" className="profile-image" />
          <div className="camera-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
              <circle cx="12" cy="13" r="3"></circle>
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <h2>Marry Doe</h2>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="bio-section">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
