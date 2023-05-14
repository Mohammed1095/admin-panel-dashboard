import React from 'react';
import './Home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { usersData } from '../../components/dummyData';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';

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
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
