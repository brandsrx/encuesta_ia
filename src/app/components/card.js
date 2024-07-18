import Head from 'next/head';

export default function Card({title,lista=[]}) {
  return (
  
    <div className="bg-white text-gray-900 rounded-lg p-4">
      <h3 className="bg-black text-white p-2 rounded-t-lg">{title}</h3>
      <div className="h-48 flex items-center justify-center">
        <ul>
        {lista.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}
