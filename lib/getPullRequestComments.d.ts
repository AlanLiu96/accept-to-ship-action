import type { Octokit } from '@octokit/core';
import type { components } from '@octokit/openapi-types/types';
import type { Api } from '@octokit/plugin-rest-endpoint-methods/dist-types/types';
export declare function getPullRequestComments(owner: string, repo: string, pullRequestNumber: number, octokit: Octokit & Api): Promise<{
    url: string;
    pull_request_review_id: number | null;
    id: number;
    node_id: string;
    diff_hunk: string;
    path: string;
    position: number | null;
    original_position: number;
    commit_id: string;
    original_commit_id: string;
    in_reply_to_id?: number;
    user: components["schemas"]["nullable-simple-user"];
    body: string;
    created_at: string;
    updated_at: string;
    html_url: string;
    pull_request_url: string;
    author_association: components["schemas"]["author-association"];
    _links: {
        self: components["schemas"]["link"];
        html: components["schemas"]["link"];
        pull_request: components["schemas"]["link"];
    };
    body_text?: string;
    body_html?: string;
    reactions?: components["schemas"]["reaction-rollup"];
    side?: "LEFT" | "RIGHT";
    start_side?: "LEFT" | "RIGHT" | null;
    line?: number;
    original_line?: number;
    start_line?: number | null;
    original_start_line?: number | null;
}[]>;
