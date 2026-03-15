import React from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md border border-gray-200 ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`text-3xl p-3 rounded-full ${theme.avatarBg}`}>
          {user.avatar}
        </div>

        <div>
          <h4 className="text-lg font-semibold">{user.name}</h4>
          <p className="text-sm opacity-80">{user.email}</p>
          <span
            className={`text-xs px-2 py-1 rounded ${theme.badgeBg} font-medium`}
          >
            {user.role}
          </span>
        </div>
      </div>

      {user.stats && (
        <div className="grid grid-cols-3 gap-2 text-sm mb-4">
          {Object.entries(user.stats).map(([key, value]) => (
            <div
              key={key}
              className="bg-white/40 rounded-md p-2 text-center"
            >
              <p className="font-semibold">{value}</p>
              <p className="capitalize text-xs opacity-70">{key}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={actions.primary.onClick}
          className={`px-3 py-2 rounded-md text-sm ${actions.primary.className}`}
        >
          {actions.primary.label}
        </button>

        <button
          onClick={actions.secondary.onClick}
          className={`px-3 py-2 rounded-md text-sm ${actions.secondary.className}`}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

function ComplexProps() {
  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => alert("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => alert("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white">User Profile Card</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </div>
  );
}

export default ComplexProps;