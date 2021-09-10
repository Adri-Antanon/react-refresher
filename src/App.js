import { Route, Switch } from "react-router-dom";

import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from "./pages";
import { Layout } from "./components/layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
