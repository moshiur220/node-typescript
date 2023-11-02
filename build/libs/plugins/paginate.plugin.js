"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPaginatePlugin = exports.paginate = void 0;
/**
 * @typedef {Object} QueryResult
 * @property {Document[]} results - Results found
 * @property {number} page - Current page
 * @property {number} limit - Maximum number of results per page
 * @property {number} totalPages - Total number of pages
 * @property {number} totalResults - Total number of documents
 */
/**
 * Query for documents with pagination
 * @param {Object} [filter] - Mongo filter
 * @param {Object} [options] - Query options
 * @param {string} [options.sortBy] - Sorting criteria using the format: sortField:(desc|asc). Multiple sorting criteria should be separated by commas (,)
 * @param {string} [options.populate] - Populate data fields. Hierarchy of fields should be separated by (.). Multiple populating criteria should be separated by commas (,)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const paginate = (filter, options) => {
    const sort = {};
    if (options === null || options === void 0 ? void 0 : options.sortBy) {
        options.sortBy.split(",").forEach((sortOption) => {
            const [key, order] = sortOption.split(":");
            sort[key] = order === "desc" ? -1 : 1;
        });
    }
    else {
        sort.createdAt = -1;
    }
    const limit = (options === null || options === void 0 ? void 0 : options.limit) && parseInt(options.limit.toString(), 10) > 0
        ? parseInt(options.limit.toString(), 10)
        : 10;
    const page = (options === null || options === void 0 ? void 0 : options.page) && parseInt(options.page.toString(), 10) > 0
        ? parseInt(options.page.toString(), 10)
        : 1;
    const skip = (page - 1) * limit;
    const countPromise = this.countDocuments(filter).exec();
    let docsPromise = this.find(filter).sort(sort).skip(skip).limit(limit);
    if (options === null || options === void 0 ? void 0 : options.populate) {
        options.populate.split(",").forEach((populateOption) => {
            docsPromise = docsPromise.populate(populateOption
                .split(".")
                .reverse()
                .reduce((a, b) => ({ path: b, populate: a })));
        });
    }
    docsPromise = docsPromise.exec();
    return Promise.all([countPromise, docsPromise]).then((values) => {
        const [totalResults, results] = values;
        const totalPages = Math.ceil(totalResults / limit);
        const result = {
            results,
            page,
            limit,
            totalPages,
            totalResults,
        };
        return result;
    });
};
exports.paginate = paginate;
// Apply the paginate function to the Mongoose schema as a plugin
function applyPaginatePlugin(schema) {
    schema.statics.paginate = exports.paginate;
}
exports.applyPaginatePlugin = applyPaginatePlugin;
