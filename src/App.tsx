import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="0wcqs3tz5" data-path="src/App.tsx">
    <TooltipProvider data-id="51oqer94q" data-path="src/App.tsx">
      <Toaster data-id="mddhduefv" data-path="src/App.tsx" />
      <BrowserRouter data-id="7f34ij6q0" data-path="src/App.tsx">
        <Routes data-id="rgjaupk30" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="h7iwbdfq0" data-path="src/App.tsx" />} data-id="17zgajzw4" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="7vacfnplq" data-path="src/App.tsx" />} data-id="yqh4cyudw" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;