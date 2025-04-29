import ChallanRowItem from "@/components/operations/search-challans/ChallanRowItem";
import SearchChallanHeader from "@/components/operations/search-challans/SearchChallanHeader";

function SearchChallans() {
  return (
    <div>
      <div className="min-h-screen px-2 space-y-4">
        <SearchChallanHeader />
        <ChallanRowItem />
      </div>
    </div>
  );
}

export default SearchChallans;
