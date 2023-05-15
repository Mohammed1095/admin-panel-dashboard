import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';
import male from '../../assets/images/male-avatar.jpg';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {/* <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={male} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul> */}
    </div>
  );
}
