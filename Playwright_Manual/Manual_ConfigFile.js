// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'Playwright_Manual', // Folder containing your manual test files
  timeout: 30 * 1000,           // Global timeout for each test
  retries: 0,                   // Number of retries on failure
  use: {
    headless: false,            // Run in headed mode
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
});


