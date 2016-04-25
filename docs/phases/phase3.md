# Phase 3: Visitors and Likes (2 days)

## Rails
### Models
* Visitor
* Likes

### Controllers
* Api::VisitorController (create, index)
* Api::LikesController (create, index)

### Views
* visitors/index.json.jbuilder
* likes/index.json.jbuilder

## Flux
### Views (React Components)
* VisitedIndex
  - TrainerIndexItem
* LikesIndex
  - TrainerIndexItem
* SearchIndex

### Stores
* Visitor
* Like

### Actions
* ApiActions.receiveTrainersVisitors -> triggered by ApiUtil
* VisitorActions.fetchAllVisitors -> triggers ApiUtil
* VisitorActions.createVisitor
* ApiActions.receiveTrainersLikes -> triggered by ApiUtil
* LikeActions.fetchAllLikes -> triggers ApiUtil
* LikeActions.createLike

### ApiUtil
* ApiUtil.fetchTrainersVisitors
* ApiUtil.createVisitor
* ApiUtil.fetchTrainersLikes
* ApiUtil.createLike

## Gems/Libraries
