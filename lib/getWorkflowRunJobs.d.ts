import type { Octokit } from '@octokit/core';
import type { Api } from '@octokit/plugin-rest-endpoint-methods/dist-types/types';
export declare function getWorkflowRunJobs(owner: string, repo: string, octokit: Octokit & Api): Promise<{
    id: number;
    run_id: number;
    run_url: string;
    run_attempt?: number | undefined;
    node_id: string;
    head_sha: string;
    url: string;
    html_url: string | null;
    status: "completed" | "queued" | "in_progress";
    conclusion: string | null;
    started_at: string;
    completed_at: string | null;
    name: string;
    steps?: {
        status: "completed" | "queued" | "in_progress";
        conclusion: string | null;
        name: string;
        number: number;
        started_at?: string | null | undefined;
        completed_at?: string | null | undefined;
    }[] | undefined;
    check_run_url: string;
    labels: string[];
    runner_id: number | null;
    runner_name: string | null;
    runner_group_id: number | null;
    runner_group_name: string | null;
}[]>;
