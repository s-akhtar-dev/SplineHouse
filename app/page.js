import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-extrabold text-white mb-6">Take a look at a 3D house!</h1>
      
      {/* Embed your Spline model */}
      <div className="w-full max-w-4xl h-[800px] shadow-lg rounded-lg overflow-hidden">
        <Spline
          scene="https://prod.spline.design/yAoeJvlqiVGeI6bW/scene.splinecode" 
        />
      </div>

      <ol className="list-inside list-decimal text-sm text-white text-center mt-6">
        <li className="mb-2">
          Get started by editing{" "}
          <code className="bg-gray-200 text-gray-800 px-1 py-0.5 rounded font-semibold">
            app/page.js
          </code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex gap-4 mt-8">
        <a
          className="rounded-full bg-white text-blue-500 px-6 py-3 hover:bg-gray-200 transition duration-300"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploy Now
        </a>
        <a
          className="rounded-full border border-gray-300 px-6 py-3 hover:bg-gray-200 transition duration-300"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Our Docs
        </a>
      </div>
    </div>
  );
}
