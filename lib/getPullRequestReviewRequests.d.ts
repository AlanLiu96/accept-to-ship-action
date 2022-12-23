import type { Octokit } from '@octokit/core';
import type { Api } from '@octokit/plugin-rest-endpoint-methods/dist-types/types';
export declare function getPullRequestReviewRequests(owner: string, repo: string, pullRequestNumber: number, octokit: Octokit & Api): Promise<{
    users: {
        name?: string | null | undefined;
        email?: string | null | undefined;
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string | null;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
        starred_at?: string | undefined;
    }[];
    teams: {
        id: number;
        node_id: string;
        name: string;
        slug: string;
        description: string | null;
        privacy?: string | undefined;
        permission: string;
        permissions?: {
            pull: boolean;
            triage: boolean;
            push: boolean;
            maintain: boolean;
            admin: boolean;
        } | undefined;
        url: string;
        html_url: string;
        members_url: string;
        repositories_url: string;
        parent: {
            id: number;
            node_id: string;
            url: string;
            members_url: string;
            name: string;
            description: string | null;
            permission: string;
            privacy?: string | undefined;
            html_url: string;
            repositories_url: string;
            slug: string;
            ldap_dn?: string | undefined;
        } | null;
    }[];
}>;
