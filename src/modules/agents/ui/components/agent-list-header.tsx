"use client";

import { useState } from "react";
import { PlusSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NewAgentDialog } from "./new-agent-dialog";

export const AgentListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="p-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Agents</h5>
          <Button
            className="cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            <PlusSquare />
            New Agent
          </Button>
        </div>
      </div>
    </>
  );
};
