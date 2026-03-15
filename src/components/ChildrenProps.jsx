import React from "react";

function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-900/40",
    green: "border-green-500 bg-green-900/40",
    purple: "border-purple-500 bg-purple-900/40",
    red: "border-red-500 bg-red-900/40",
  };

  return (
    <div
      className={`border-l-4 p-6 rounded-xl shadow-md backdrop-blur border border-gray-700 hover:shadow-lg transition-all duration-300 ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-white">
          {title}
        </h3>
      )}

      <div className="text-gray-300 leading-relaxed">
        {children}
      </div>
      {/* <h3>I will be rendered inside the card</h3> */}
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col gap-6",
    horizontal: "flex flex-row gap-6 flex-wrap",
    grid: "grid md:grid-cols-2 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-md space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Children Prop
        </h2>

        <p className="text-gray-300 max-w-2xl leading-relaxed">
          The <strong>children prop</strong> allows components to wrap and render
          nested JSX elements. This makes components flexible and reusable.
        </p>
      </div>

      <div className="space-y-6">
        <div>

          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Card Component with Children
          </h3>

          <Container layout="grid">

            <Card title="User Profile" color="blue">
              <p>
                <strong>Name:</strong> John Doe <br />
                <strong>Email:</strong> john.doe@example.com <br />
                <strong>Bio:</strong> A passionate developer with a love for
                React and UI design.
              </p>
            </Card>

            <Card title="Statistics" color="purple">
              <p>
                <strong>Projects:</strong> 24 <br />
                <strong>Followers:</strong> 1,245 <br />
                <strong>Experience:</strong> 5+ years building modern web apps.
              </p>
            </Card>

          </Container>

        </div>
      </div>

    </section>
  );
}

export default ChildrenProps;