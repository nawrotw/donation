/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import GithubActionsReporter from 'vitest-github-actions-reporter';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    outputFile: {
      junit: "test-results.xml",
    },
    reporters: process.env.GITHUB_ACTIONS
      ? [
        "junit",
        new GithubActionsReporter({
          hideStackTrace: true,
          trimRepositoryPrefix: true,
        }),
      ]
      : "default",
  }
})
