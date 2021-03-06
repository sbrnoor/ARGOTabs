import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AngularExtensionWrapper from './AngularExtensionWrapper'
import EliminatoriesPage from '../Eliminatories/EliminatoriesPage'

export default function TournamentBody (props) {
  const url = props.match.url

  return (
    <Switch>
      <Route path={`${url}`} exact component={AngularExtensionWrapper('/')} />
      <Route path={`${url}/clubs`} exact component={AngularExtensionWrapper('/clubs')} />
      <Route path={`${url}/teams`} exact component={AngularExtensionWrapper('/teams')} />
      <Route path={`${url}/judges`} exact component={AngularExtensionWrapper('/judges')} />
      <Route path={`${url}/rooms`} exact component={AngularExtensionWrapper('/rooms')} />
      <Route path={`${url}/team-rank`} exact component={AngularExtensionWrapper('/team-rank')} />
      <Route path={`${url}/speaker-rank`} exact component={AngularExtensionWrapper('/speaker-rank')} />
      <Route path={`${url}/rounds/:roundIndex`} exact component={AngularExtensionWrapper('/rounds/:roundIndex')} />
      <Route path={`${url}/eliminatories`} exact component={EliminatoriesPage} />
      <Route
        path={`${url}/eliminatories/:roundIndex`}
        exact
        component={AngularExtensionWrapper('/rounds/:roundIndex', { eliminatory: true })}
      />
    </Switch>
  )
}
