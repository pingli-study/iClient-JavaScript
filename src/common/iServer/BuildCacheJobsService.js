var SuperMap = require('../SuperMap');
var ProcessingJobsServiceBase = require('./ProcessingJobsServiceBase');
var BuildCacheJobParameter = require('./BuildCacheJobParameter');

SuperMap.REST.BuildCacheJobsService = SuperMap.Class(ProcessingJobsServiceBase, {

    initialize: function (url, options) {
        url += "/mapping/buildCache";
        ProcessingJobsServiceBase.prototype.initialize.apply(this, arguments);
    },

    destroy: function () {
        ProcessingJobsServiceBase.prototype.destroy.apply(this, arguments);
    },

    getBuildCacheJobs: function () {
        return ProcessingJobsServiceBase.prototype.getJobs.apply(this, [this.url]);
    },

    getBuildCacheJob: function (id) {
        return ProcessingJobsServiceBase.prototype.getJobs.apply(this, [this.url + '/' + id]);
    },

    addBuildCacheJob: function (params) {
        ProcessingJobsServiceBase.prototype.addJob.apply(this, [this.url, params, BuildCacheJobParameter]);
    },

    CLASS_NAME: "SuperMap.REST.BuildCacheJobsService"
});

module.exports = SuperMap.REST.BuildCacheJobsService;