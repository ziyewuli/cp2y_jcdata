export const X = {};
(function () {
  var engine = {
    //引擎ID
    id: null,
    //执行间隔
    interval: 100,
    //任务列表
    tasks: {},
    taskID: 0,
    //启动引擎
    start: function () {
      var t = this;
      if (t.id || t.tasks.length == 0) return;
      t._exec();
      t.id = setInterval(function () {
        t._exec();
      }, t.interval);
    },
    //停止引擎
    stop: function () {
      clearInterval(this.id);
      this.id = null;
    },
    //执行任务
    _exec: function () {
      var t = this;
      var taskIDs = Object.keys(t.tasks);
      if (!taskIDs.length)return;
      var now = Date.now();
      taskIDs.forEach(function (id) {
        var task = t.tasks[id];
        if (task == null) {
          return;
        }
        if (now - task.time >= task.wait) {
          var count = task.count;
          if (count > 0) {
            count--;
          }
          task.fn.call();
          if (count === -1 || count > 0) {
            // 时间重置，需要放在任务执行之后，
            // 确保每次任务执行时间的间隔一致
            task.time = Date.now();
            task.count = count;
          } else {
            task = null;
            delete t.tasks[id];
          }
        }
      });
    },
    //添加任务
    addTask: function (fn, wait, count) {
      var t = this;
      t.taskID++;
      if (wait < 100)wait = 100;
      count = count || -1;
      t.tasks[t.taskID] = {
        fn: fn,
        wait: wait,
        count: count,
        time: Date.now()
      };
      return t.taskID;
    },
    removeTask: function (id) {
      if (!id) {
        this.tasks = {};
      }
      this.tasks[id] && delete this.tasks[id]
    },
    destroy: function () {
      this.removeTask();
      this.stop();
    }
  };
  X.engine = engine;
}());

