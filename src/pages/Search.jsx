import React, { useEffect, useState } from "react";
import { tableData } from "../data/cpp1AuxiliaryData/tableData";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  // Handle Search Bar Input Change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    setSearchQuery(query);
  };

  useEffect(() => {
    const updatedData = tableData.filter((item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(updatedData);
  }, [searchQuery]);

  return (
    <div className="py-20 mx-12">
      <div className="flex flex-wrap">
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: "300px",
            padding: "10px",
            fontSize: "14px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      </div>
      <div className="p-4">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border-b">S.no.</th>
              <th className="text-left px-4 py-2 border-b">Name</th>
              <th className="text-left px-4 py-2 border-b">Area</th>
              <th className="text-left px-4 py-2 border-b">KW</th>
              <th className="text-left px-4 py-2 border-b">FLC</th>
              <th className="text-left px-4 py-2 border-b">Make</th>
              <th className="text-left px-4 py-2 border-b">Frame</th>
              <th className="text-left px-4 py-2 border-b">DE</th>
              <th className="text-left px-4 py-2 border-b">NDE</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(
              ({ Name, Area, Make, KW, FLC, Frame, DE, NDE, id }) => (
                <tr key={id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{id}</td>
                  <td className="px-4 py-2 border-b">{Name}</td>
                  <td className="px-4 py-2 border-b">{Area}</td>
                  <td className="px-4 py-2 border-b">{KW}</td>
                  <td className="px-4 py-2 border-b">{FLC}</td>
                  <td className="px-4 py-2 border-b">{Make}</td>
                  <td className="px-4 py-2 border-b">{Frame}</td>
                  <td className="px-4 py-2 border-b">{DE}</td>
                  <td className="px-4 py-2 border-b">{NDE}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
