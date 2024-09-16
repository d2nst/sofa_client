import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, // 포트 번호를 명시적으로 설정
  },
  plugins: [react()],
});
