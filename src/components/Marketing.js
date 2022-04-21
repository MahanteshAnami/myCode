import DisplayCard from "./DisplayCard";

/** This component onclick of Marketing in Explorer **/
function Marketing(props) {
  return (
    <DisplayCard tabData={props.tabData} plugins={props.plugins} explorerName="Marketing" isAllPlugin={props.isAllPlugin} />
  );
}

export default Marketing;