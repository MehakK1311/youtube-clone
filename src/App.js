import { BrowserRouter, Route, Routes } from "react-router-dom";
// import axios from "axios";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import SearchResults from "./pages/SearchResults";
import VideoDetails from "./pages/VideoDetails";

const App = () => {
  // const URL = "https://internship-service.onrender.com/videos";

  // axios
  //   .get(URL)
  //   .then(function (response) {
  //     console.log(response.data.data.posts);
  //   })
  //   .catch((e) => console.log(e));

  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
