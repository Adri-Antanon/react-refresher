import { Route, Switch } from "react-router-dom";

import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from "./pages";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
