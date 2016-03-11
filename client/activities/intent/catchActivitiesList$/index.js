import {
  pipe,
  map
} from "ramda"

import {onlyActivitiesListResponse$$} from "~/client/activities/model"
import {selectResponse$} from "~/client/application/model"
import {asPayload} from "~/client/application/model"
import {asActivities} from "~/client/activities/model"

export default pipe(
  onlyActivitiesListResponse$$,
  selectResponse$,
  map(asPayload),
  map(asActivities)
)
