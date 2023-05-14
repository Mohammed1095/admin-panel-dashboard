import React from 'react';
import './Home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { usersData } from '../../components/dummyData';

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="Users Analytics"
        data={usersData}
        grid
        dataKey="ActiveUsers"
      />
    </div>
  );
}
