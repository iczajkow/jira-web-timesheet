"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jira_client_factory_1 = require("../jira-client/jira-client-factory");
const get_worklogs_1 = require("../jira-client/get-worklogs");
const getWorklogs = ({ config, from, to }) => __awaiter(void 0, void 0, void 0, function* () {
    const jiraClient = jira_client_factory_1.jiraClientFactory(config);
    const { displayName } = (yield jiraClient.myself.getMyself());
    return yield get_worklogs_1.getWorklogs({
        from,
        to,
        jiraClient,
        userName: displayName
    });
});
exports.default = {
    getWorklogs
};