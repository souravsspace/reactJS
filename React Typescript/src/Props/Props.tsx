// import EventProps from './EventProps';

import PropTypesTips from "./PropTypesTips";
import { herData } from "./HerData.value";

export default function Props() {
  // const alertMessage = (message: string) => {
  //   alert(`Hey, ${message}`);
  // };

  return (
    <div>
      <article>
        <PropTypesTips {...herData} />
        {/* <EventProps alertMessage={alertMessage} handleEvent={(e, id)=> {console.log('hey guys' + id, e)}}  /> */}
      </article>
    </div>
  );
}
