
## Estimation

![Estimation](/assets/estimation-xkcd.png)

Good user stories are _estimable_ (the "E" of INVEST) and a good Product Backlog is _estimated_ (the "E" of DEEP). _Estimation_ is the process where the Developers consider the efforts required to implement a certain user story in the Product Backlog. The purpose of estimation is not to create financial budgets for the project, but to help the _Product Owner to prioritize the user stories_ in the Product Backlog and _facilitate discussion about the user stories among the Developers_.

The Product Owner isn't commonly a technical person, so they won't be able to come up with estimates for the user stories. That's the job of the Developers. The estimates provided by the Developers have high value for the Product Owner in the prioritization of the user stories. For example if the implementation of a certain user story requires huge amount of effort, it might make sense to lower its priority.

User stories aren't commonly estimated by considering the working hours required to implement a user story. That's because such estimate is very hard to come up with and thus it is very unreliable. Instead we consider the _relative effort_ required compared to some other user story.

For example let's consider these three user stories from the previous Sprint:

1. {{site.sprint_1_user_story_1}}
2. {{site.sprint_1_user_story_2}}
3. {{site.sprint_1_user_story_3}}

Some team member could estimate that the implementation of the _first user story_ requires the double amount of effort compared to the implementation of the _second user story_. Also, some could estimate that the implementation of the _first_ and the _third user story_ require somewhat the same amount of effort.

In Scrum, the user story estimation is commonly provided in _story points_. A story point isn't based on time (working hours) required for the implementation. The Scrum Team will define themselves what amount of effort one story point represents so that their estimations are "calibrated".

We could say, for example that the _second user story_ from the previous Sprint is worth _2 story points_. In our estimations we would then compare other user stories to this user story. This would mean that the estimate suggested above would estimate that the _first_ and the _third user stories_ are worth _4 story points_ (double the amount effort). Estimates from a different team members _could be different_ (and probably are) but at least they are comparing the effort with the same user story.

During estimation the Developers usually have a different view of how many story points a certain user story is worth. However, in the end they need to come up with an single estimate for each user story that _everyone agrees on_. There are different techniques to facilitate the estimation so that the agreement can be eventually accomplished. One such technique is the _planning poker_.

### Planning poker

[Planning poker](https://en.wikipedia.org/wiki/Planning_poker) is a (fun) technique to facilitate estimation of user stories. We first need to decide which are the number of story points we use for the estimation. The [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence) is a common choice: 1, 2, 3, 5 or 8 story points. Then we need to make sure that everyone knows the amount of effort required for a certain amount of story points. Let's say that the user story "{{site.sprint_1_user_story_1}}" is worth _2 story points_ and we should compare the effort of other user stories to that.

Here's a table describing the worth of the available story points:

| The required effort                                             | Story points    |
| --------------------------------------------------------------- | --------------- |
| _Half the effort_ compared to the reference user story          | 1 story point   |
| _Somewhat the same effort_ compared to the reference user story | 2 story points  |
| _A bit more effort_ compared to the reference user story        | 3 story points  |
| _Double the effort_ compared to the reference user story        | 5 story points  |
| _Four times the effort_ compared to the reference user story    | 8 story points  |

As mentioned, the reference user story is the first user story of the previous Sprint:

> {{site.sprint_1_user_story_1}}

{: .note }

> The Fibonacci sequence is commonly used instead of a linear sequence (1, 2, 3, 4...) because _larger user stories are more difficult to estimate_. The Fibonacci sequence starts to grow quickly after 8, so we don't need to be very accurate while estimating large user stories. On the other hand, if we have a user story worth more than 8 story points, we should really consider splitting it into smaller user stories.

Once we have "calibrated" the worth of a story point we can start the actual planning poker event. For each user story under estimation we should perform the following steps:

1. Discuss the technical requirements (tasks) for the user story. Make sure that everyone is on the same page what is required to implement the user story.
2. Everyone will consider _by themself_ (no dicussion) how many story points the user story is worth. The estimate needs to be 1, 2, 3, 5 or 8 story points. Compare the effort to the user story "{{site.sprint_1_user_story_1}}" which is worth 2 story points
3. Everyone will write down their story point estimate.
4. Once everyone is ready, everyone will show their estimate at the same time
5. If there's more than one point difference in the least and most amount of story points in the suggested estimates, discuss the implementation further to find out why there is such difference in the estimates. Then, repeat the steps 1 - 5 until you have an agreement.
6. Once the team has agreed on the user story estimate for the user story, the estimate should be added to the Product Backlog. We can for example add a [label](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) with the story points for the user story related issue.

{: .note }

> In a traditional planning poker session, each team member will have a card for different story points (for example card for 1, 2, 3, 5 and 8 story points). Team members are sitting in a round table revealing their cards. Because the session is a bit like a poker game, the "planning poker" name is suitable.
