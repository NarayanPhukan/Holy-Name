import React, { useState } from "react";

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("Science");

  const courses = {
    Science: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer Science",
    ],
    Commerce: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "Informatics Practices",
    ],
    Arts: [
      "History",
      "Geography",
      "Political Science",
      "Sociology",
      "Psychology",
    ],
  };
  return (
    <div>
      <section>
        <div className="bg-gray-100 p-6 md:p-12 lg:p-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
              Play School
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
                Welcome to Our Play School
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
                non eos cumque eaque, suscipit ratione ipsum mollitia facere
                tempora repellendus sunt quidem, doloribus quibusdam numquam nam
                vel voluptatum qui obcaecati tempore repellat. Aliquid, ipsa.
                Quibusdam, omnis ex, adipisci mollitia deserunt natus et optio,
                libero esse quas velit. Quasi, odit culpa?
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Come join us and see how we can help your child thrive in their
                early years!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-blue-100 p-6 md:p-12 lg:p-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
              Nursery
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
                Welcome to Our Nursery
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                nobis, maiores distinctio voluptatum labore ut culpa quis unde
                molestiae esse ducimus accusantium vero ex perspiciatis ipsum
                consequatur adipisci placeat! Alias, rem nobis ratione nam iure
                architecto qui, dolor excepturi, deleniti similique eligendi
                nesciunt commodi molestias quam! Animi accusamus ipsam quis.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Come join us and see how we can help your child thrive in their
                early years!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 p-6 md:p-12 lg:p-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
              Lower Primary School
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
                Welcome to Our Lower Primary School
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                quae ipsa provident laborum. Consequatur amet facere
                exercitationem aperiam excepturi, itaque magni at cumque sunt
                porro quia. Cupiditate, doloremque necessitatibus optio quia
                nobis maiores explicabo placeat vitae iusto assumenda recusandae
                voluptas commodi saepe distinctio amet impedit ea nam veniam
                accusantium! Sed.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Come join us and see how we can help your child thrive in their
                early years!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-blue-100 p-6 md:p-12 lg:p-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
              Primary School
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
                Welcome to Our Primary School
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minus harum doloribus enim quibusdam accusantium consequuntur
                ducimus ex ratione, repellat provident officia aliquid, beatae
                repudiandae, adipisci illum nihil praesentium laborum similique
                obcaecati reiciendis soluta. Mollitia eligendi accusantium illum
                dolorem quasi voluptates quas ullam placeat maiores officiis,
                quidem voluptate aperiam provident.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Come join us and see how we can help your child thrive in their
                early years!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gray-100 p-6 md:p-12 lg:p-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
              Secondary School
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">
                Secondary School
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aut eius, omnis magni nisi laboriosam a nesciunt
                illum exercitationem rerum voluptas, maxime porro sed ab sunt
                fuga labore, cupiditate ex architecto? Laboriosam ipsa vero
                rerum adipisci illo, velit ea, sapiente dolorum repellat
                inventore deserunt delectus error illum minima temporibus
                debitis.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                Come join us and see how we can help your child thrive in their
                early years!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* After 10th */}

        <div>
          <section className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex items-center">
            <div className="max-w-5xl mx-auto p-5 lg:p-10">
              <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-green-900">
                  Course Offerings after 10th "Higher Secondary"
                </h1>

                <div className="flex flex-col md:flex-row justify-center mb-8">
                  {Object.keys(courses).map((category) => (
                    <button
                      key={category}
                      className={`m-2 px-6 py-3 rounded-full font-semibold text-white transition duration-300 ease-in-out transform ${
                        selectedCategory === category
                          ? "bg-orange-800 hover:bg-orange-900 scale-105"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div>
                  <h2 className="text-3xl font-semibold mb-6 text-center text-green-900">
                    Subjects Offered in {selectedCategory} for (11th - 12th)
                  </h2>
                  <ul className="list-disc list-inside space-y-3 text-lg">
                    {courses[selectedCategory].map((subject, index) => (
                      <li key={index} className="text-green-700 font-medium">
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section>
        <div className="bg-gray-100 p-6 md:p-12 lg:p-10">
          <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-red-800">
              General Rules and Regulations
            </h1>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-red-700">
                Please Follow These Guidelines
              </h2>
              <p className="text-lg mb-4 leading-relaxed">
                To ensure a safe and productive learning environment, we ask all
                students, staff, and visitors to adhere to the following rules
                and regulations:
              </p>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
                <li>Rule1........................................</li>
              </ul>
              <p className="text-lg mb-4 leading-relaxed">
                By following these rules and regulations, we can create a
                positive and supportive environment for everyone. Thank you for
                your cooperation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
