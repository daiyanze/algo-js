var Twitter = function() {
  let timestamp = 0
  this.userMap = new Map()

  const Tweet = function(id, time) {
    this.id = id
    this.time = time
    this.next = null
  }

  const User = function(userId) {
    this.id = userId
    this.followed = new Set()
    /**
     * To store Tweet pointer
     * e.g. head -> tweet 2 -> tweet 1 -> null
     */
    this.tweetHead = null

    // Follow self
    this.follow(this.id)
  }

  User.prototype.follow = function(userId) {
    this.followed.add(userId)
  }

  User.prototype.unfollow = function(userId) {
    // Self is not able to be unfollowed
    if (userId != this.id) {
      this.followed.delete(userId)
    }
  }

  User.prototype.post = function(tweetId) {
    const tweet = new Tweet(tweetId, timestamp)
    timestamp++
    // Add the new tweet as head
    tweet.next = this.tweetHead
    this.tweetHead = tweet
  }

  this.utils = {
    Tweet,
    User,
  }
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  if (!this.userMap.has(userId)) {
    this.userMap.set(userId, new this.utils.User(userId))
  }

  var user = this.userMap.get(userId)
  user.post(tweetId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  if (!this.userMap.has(userId)) return []

  const queue = new MaxPriorityQueue({ priority: a => a.time })

  // Put all of the tweets into priority queue
  this.userMap.get(userId).followed.forEach((followedUserId) => {
    const user = this.userMap.get(followedUserId)
    if (user.tweetHead) {
      queue.enqueue(user.tweetHead)
    }
  })

  const res = []
  while (queue.size()) {
    if (res.length >= 10) {
      break
    }

    const { element: tweet } = queue.dequeue()
    res.push(tweet.id)

    if (tweet.next) {
      queue.enqueue(tweet.next)
    }
  }

  return res
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  // Create follower user if not exist
  if (!this.userMap.has(followerId)) {
    var user = new this.utils.User(followerId)
    this.userMap.set(followerId, user)
  }

  // Create followee user if not exist
  if (!this.userMap.has(followeeId)) {
    var user = new this.utils.User(followeeId)
    this.userMap.set(followeeId, user)
  }

  this.userMap.get(followerId).follow(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (!this.userMap.has(followeeId)) return

  var user = this.userMap.get(followerId)
  user.unfollow(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */


module.exports = {
  func: (actions, input) => {
    const instance = new Twitter()

    const res = [null,]

    for (let i = 1; i < actions.length; i++) {
      const r = instance[actions[i]](...input[i])
      res.push(r === undefined ? null : r)
    }

    return res
  },
  argTypes: [
    'Array',
    'Array',
  ],
  returnType: 'Array',
  tests: [
    [
      ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"],
      [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]],
    ],
  ]
}
