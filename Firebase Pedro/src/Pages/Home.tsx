import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import LogOut from "../Components/LogOut";
import { useShowData } from "../Context/ShowData";

export function Home() {
  const { userInfo } = useShowData();

  return (
    <main className="flex flex-col justify-center items-center py-[7rem] gap-y-10">
      <div className="w-[32rem]">
        {userInfo.map((user: any, index) => (
          <div key={index}>
            <Typography variant="h3">{user.name}</Typography>
            <Typography>
              <span className="font-medium">Email:</span> {user.email}
              <br />
              <span className="font-medium">Age:</span> {user.age}
            </Typography>
          </div>
        ))}
      </div>
      <div className="w-[32rem]">
        <LogOut />
      </div>
      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                What is HTML ?
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" className="font-normal text-gray-600">
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web browser
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                What is CSS ?
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" className="font-normal text-gray-600">
                Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML or XML. CSS is a cornerstone technology of
                the World Wide Web, alongside HTML and JavaScript.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                JavaScript
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant="small" className="font-normal text-gray-600">
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2023, 98.7% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </main>
  );
}
