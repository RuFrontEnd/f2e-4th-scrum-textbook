import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import * as Pages from "pages";

// TODO: 之後可擴充換頁互動
const browserRouter = [
  {
    path: "/",
    element: <Pages.Home />,
  },
  {
    path: "/introduce",
    element: <Pages.Introduce />,
  },
  {
    path: "/productTodoList",
    element: <Pages.ProductTodoList />,
  },
  {
    path: "/sprintPlanning",
    element: <Pages.SprintPlanning />,
  },
  {
    path: "/sprintBacklog",
    element: <Pages.SprintBacklog />,
  },
  {
    path: "/scrumMeeting",
    element: <Pages.ScrumMeeting />,
  },
  {
    path: "/scrumPractice",
    element: <Pages.ScrumPractice />,
  },
  {
    path: "/scrumRetroChoice",
    element: <Pages.ScrumRetroChoice />,
  },
  {
    path: "/end",
    element: <Pages.End />,
  },
];

const router = createBrowserRouter(browserRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
