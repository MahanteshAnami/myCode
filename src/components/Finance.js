import DisplayCard from "./DisplayCard";

/** This component onclick of Finance in Explorer **/
function Finance(props) {
  return (
    <DisplayCard tabData={props.tabData} plugins={props.plugins} explorerName="Finance" isAllPlugin={props.isAllPlugin} />
  );
}

export default Finance;