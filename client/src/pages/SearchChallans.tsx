import ChallanRowItem from "@/components/search-challans/ChallanRowItem";
import SearchChallanHeader from "@/components/search-challans/SearchChallanHeader";

function SearchChallans() {
  return (
    <div>
      <div className="min-h-screen px-2 space-y-12">
        <SearchChallanHeader />
        <ChallanRowItem/>
      </div>
    </div>
  );
}

export default SearchChallans;
