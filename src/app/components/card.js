import Head from 'next/head';

export default function Card() {
  return (
  
    <div className="bg-white text-gray-900 rounded-lg p-4">
      <h3 className="bg-black text-white p-2 rounded-t-lg">Survey Participants</h3>
      <div className="h-48 flex items-center justify-center">
        <ul>
        <li>Total Respondents: 1,500</li>
        <li>Industries Represented: 15+</li>
        <li>Company Sizes: Small, Medium, Large</li>
        <li>Geographic Regions: North America, Europe, Asia</li>
        </ul>
      </div>
    </div>
  );
}
