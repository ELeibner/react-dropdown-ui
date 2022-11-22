import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: './src/**/*.cy.ts',
  },
  video: false,
});
