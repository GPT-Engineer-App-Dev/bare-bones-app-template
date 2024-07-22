import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to Your App</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a full-width bare-bones application that you can modify and build upon.</p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>

        {/* Additional full-width section */}
        <div className="mt-8 bg-secondary text-secondary-foreground p-4">
          <h2 className="text-xl font-semibold mb-2">Full Width Section</h2>
          <p>This section demonstrates full-width content outside of a card.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground p-4">
        <p className="text-center">&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;