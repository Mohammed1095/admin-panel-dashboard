import './WidgetLg.css';
import male from '../../assets/images/male-avatar.jpg';

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead className="widgetLgHeader">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody className="widgetLgTBody">
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img className="widgetLgImg" src={male} alt="" />
              <span className="widgetLgName">Memo</span>
            </td>
            <td className="widgetLgDate">15 May 2023</td>
            <td className="widgetLgAmount">$ 25.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img className="widgetLgImg" src={male} alt="" />
              <span className="widgetLgName">Mustafa</span>
            </td>
            <td className="widgetLgDate">15 May 2023</td>
            <td className="widgetLgAmount">$ 222.00</td>
            <td className="widgetLgStatus">
              <Button type="Rejected" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img className="widgetLgImg" src={male} alt="" />
              <span className="widgetLgName">Sayed</span>
            </td>
            <td className="widgetLgDate">15 May 2023</td>
            <td className="widgetLgAmount">$ 12.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img className="widgetLgImg" src={male} alt="" />
              <span className="widgetLgName">Gaafar</span>
            </td>
            <td className="widgetLgDate">15 May 2023</td>
            <td className="widgetLgAmount">$ 29.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
