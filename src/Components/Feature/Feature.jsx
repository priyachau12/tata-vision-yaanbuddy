import React from "react";
import botpng from "../../../public/floating-robot.png";
import lenspng from "../../../public/googleLens.gif";
import feed from "../../../public/feedback.jpeg";

const Feature = () => {
  return (
    <div>
      <section class="py-32 bg-gray-100">
        <div class="container mx-auto text-center">
          <h2 class="text-sm text-blue-600 font-semibold">Core Features</h2>
          <h3 class="mt-2 text-3xl font-bold text-gray-900">
            Our Awesome Features
          </h3>
          <p class="mt-4 text-gray-600">
            We offer a range of features, each designed to deliver exceptional
            value. While there are many variations of passages, most have
            undergone alterations in some form.
          </p>
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="pt-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center align-middle pt-4">
                <img
                  class="w-full h-48 object-contain"
                  src={botpng}
                  alt="Feature 1"
                />
              </div>
              <h4 class="mt-1 text-lg font-semibold text-gray-900">
                YaanBuddy!
              </h4>
              <p class="mt-1 text-gray-600">
                Here is our digital agent to assist with all your queries and
                help you make the best decision.
              </p>
              <a
                href="#"
                class="inline-block mt-4 text-blue-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center align-middle pt-4">
                <img
                  class="w-full h-40 object-contain "
                  src={lenspng}
                  alt="Feature 2"
                />
              </div>
              <h4 class="mt-4 text-lg font-semibold text-gray-900">
                TATA Lens
              </h4>
              <p class="mt-2 text-gray-600">
                TATA Lens: Scan and detect models in your images to assist with
                your queries.
              </p>
              <a
                href="#"
                class="inline-block mt-4 text-blue-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div class="p-2 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center  pt-4 h-52 w-50 ">
                <img
                  class="w-52 h-50 object-contain "
                  src={feed}
                  alt="Feature 2"
                />
              </div>
              <h4 class="mt-4 text-lg font-semibold text-gray-900">
                Feedback Analysis
              </h4>
              <p class="mt-2 text-gray-600">
                This is an excellent option to Rectify our flaws and leads to
                perfection by Tata.
              </p>
              <a
                href="/chatbot"
                class="inline-block mt-2 text-blue-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
