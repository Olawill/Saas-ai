"use client";

import { useState } from "react";
import { PlusSquare, XCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { NewAgentDialog } from "./new-agent-dialog";
import { AgentSearchFilter } from "./agent-search-filter";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { DEFAULT_PAGE } from "@/constants";

export const AgentListHeader = () => {
  const [filters, setFilters] = useAgentsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAnyFilterModified = !!filters.search;

  const onClearFilters = () => {
    setFilters({
      search: "",
      page: DEFAULT_PAGE,
    });
  };

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

        <div className="flex items-center gap-x-2 p-1">
          <AgentSearchFilter />
          {isAnyFilterModified && (
            <Button
              onClick={onClearFilters}
              variant="outline"
              size="sm"
              className="cursor-pointer"
            >
              <XCircleIcon />
              Clear
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
