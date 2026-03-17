// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Python Learning Hub</title>
        <meta name="description" content="Learn Python with interactive tutorials and resources." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          Welcome to the <a href="https://pythonlearninghub.com" className="text-indigo-600 hover:underline">Python Learning Hub!</a>
        </h1>
        <p className="mt-3 text-2xl">
          Master Python coding through our interactive lessons and resources.
        </p>

        <div className="flex flex-wrap justify-around w-full max-w-4xl mt-6 sm:w-auto">
          <Link href="/tutorials" className="p-6 mt-6 text-left border rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100">
            <h3 className="text-2xl font-bold">Tutorials &rarr;</h3>
            <p className="mt-4 text-xl">
              Explore a variety of interactive tutorials designed for all skill levels.
            </p>
          </Link>

          <Link href="/resources" className="p-6 mt-6 text-left border rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100">
            <h3 className="text-2xl font-bold">Resources &rarr;</h3>
            <p className="mt-4 text-xl">
              Access a collection of helpful resources including documentation and tools.
            </p>
          </Link>

          <Link href="/community" className="p-6 mt-6 text-left border rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100">
            <h3 className="text-2xl font-bold">Join the Community &rarr;</h3>
            <p className="mt-4 text-xl">
              Connect with fellow learners and share your journey.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}