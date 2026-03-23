import React from "react";

function Career() {
  return (
    <div>
      <div className="p-6 bg-blue-100 min-h-screen ">
        <div className="max-w-6xl h-auto mx-auto bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">CAREERS</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Qualifications</h2>

            <ol className="list-decimal pl-6 text-gray-700">
              <li>qualifications...</li>
              <li>qualifications...</li>
              <li>qualifications...</li>
              <li>qualifications...</li>
              <li>qualifications...</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Vacancy</h2>
            <ol className="list-decimal pl-6 text-gray-700">
              <li>Position 1</li>
              <li>Position 2</li>
              <li>Position 3</li>
            </ol>
          </section>

          {/* How to apply */}
          <section>
            <h2 className="text-xl font-semibold mb-2">How to apply</h2>
            <p className="text-gray-700">
              Details How to apply .................
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Career;
