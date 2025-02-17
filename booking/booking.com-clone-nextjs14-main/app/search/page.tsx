import { fetchResults } from "@/lib/fetchResults";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};

async function SearchPage({ searchParams }: Props) {
  console.log("Search params:", JSON.stringify(searchParams, null, 2));

  // Ensure searchParams.url exists and is a valid string
  if (!searchParams.url?.toString()) {
    console.log("Missing or invalid URL in searchParams");
    return notFound();
  }

  // Fetch results from API
  const results = await fetchResults(searchParams);
  console.log("API Response:", JSON.stringify(results, null, 2));

  // Handle missing or empty results
  if (!results || !results.content || !Array.isArray(results.content.listings)) {
    return <div className="text-center py-10 text-lg font-semibold">No results found...</div>;
  }

  return (
    <section className="mx-auto max-w-7xl p-6 lg:px-8">
      <h1 className="text-4xl font-bold pb-3">Your Trip Results</h1>

      <h2 className="pb-3">
        Dates of trip:
        <span className="italic ml-2">
          {searchParams.checkin} to {searchParams.checkout}
        </span>
      </h2>

      <hr className="mb-5" />

      <h3 className="font-semibold text-xl">
        {results.content.total_listings || 0} listings found
      </h3>

      <div className="space-y-4 mt-5">
        {results.content.listings.length > 0 ? (
          results.content.listings.map((item, i) => (
            <div key={i} className="flex justify-between space-x-4 p-5 border rounded-lg">
              {/* Property Image */}
              <img src={item.url} alt="Property" className="h-44 w-44 rounded-lg object-cover" />

              {/* Property Details */}
              <div className="flex flex-1 justify-between">
                <div>
                  <Link href={item.link} className="font-bold text-blue-500 hover:underline">
                    {item.title}
                  </Link>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>

                {/* Rating & Price Section */}
                <div className="flex flex-col justify-between text-right">
                  <div className="flex items-center space-x-2 justify-end">
                    <div>
                      <p className="font-bold">{item.rating_word || "No rating"}</p>
                      <p className="text-xs text-gray-500">{item.rating_count || "N/A"}</p>
                    </div>
                    <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-blue-900 rounded-lg">
                      {item.rating || "N/A"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">{item.booking_metadata || ""}</p>
                    <p className="text-2xl font-bold text-blue-600">{item.price || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-lg font-semibold">No listings available.</div>
        )}
      </div>
    </section>
  );
}

export default SearchPage;
