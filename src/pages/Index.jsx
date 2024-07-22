import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome to Your App</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;