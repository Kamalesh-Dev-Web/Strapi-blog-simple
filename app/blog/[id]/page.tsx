import Link from "next/link";

function Page() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/">{"<Back to Home>"}</Link>
    </div>
  );
}

export default Page;
