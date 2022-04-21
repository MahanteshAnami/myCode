import DisplayCard from "./DisplayCard";

/** This component onclick of Personnel in Explorer **/
function Personnel(props) {
  return (
    <DisplayCard tabData={props.tabData} plugins={props.plugins} explorerName="Personnel" isAllPlugin={props.isAllPlugin} />
  );
}

export default Personnel;