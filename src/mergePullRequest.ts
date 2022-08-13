import { Octokit } from "@octokit/core";
import { Api } from "@octokit/plugin-rest-endpoint-methods/dist-types/types";
import { RequestError } from "@octokit/request-error";
import { getMergeMethod } from "./getMergeMethod";

export async function checkIfPullRequestMerged(
  owner: string,
  repo: string,
  pullRequestNumber: number,
  octokit: Octokit & Api
) {
  let response: RequestError["response"];
  try {
    response = await octokit.rest.pulls.checkIfMerged({
      owner,
      repo,
      pull_number: pullRequestNumber,
    });
  } catch (error) {
    if (error instanceof RequestError) {
      response = error.response;
    }
  }

  if (response?.status === 204) {
    return true;
  } else if (response?.status === 404) {
    return false;
  } else {
    throw new Error(
      `Failed to check if pull request is merged: ${response?.status}`
    );
  }
}

export async function mergePullRequest(
  owner: string,
  repo: string,
  pullRequestNumber: number,
  mergeMethod: ReturnType<typeof getMergeMethod>,
  octokit: Octokit & Api
) {
  const response = await octokit.rest.pulls.merge({
    owner,
    repo,
    pull_number: pullRequestNumber,
    merge_method: mergeMethod,
  });
  if (response.status !== 200) {
    throw new Error(`Failed to merge pull request: ${response.status}`);
  }
}