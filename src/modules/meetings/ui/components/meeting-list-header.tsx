"use client";

import { useState } from "react";
import { PlusSquare, XCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { NewMeetingDialog } from "./new-meeting-dialog";
import { MeetingSearchFilter } from "./meeting-search-filter";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

import { DEFAULT_PAGE } from "@/constants";
import { StatusFilter } from "./status-filter";
import { AgentIdFilter } from "./agent-id-filter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const MeetingListHeader = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAnyFilterModified =
    !!filters.search || !!filters.status || !!filters.agentId;

  const onClearFilters = () => {
    setFilters({
      search: "",
      page: DEFAULT_PAGE,
      agentId: "",
      status: null,
    });
  };

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="p-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Meetings</h5>
          <Button
            className="cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            <PlusSquare />
            New Meeting
          </Button>
        </div>

        <ScrollArea className="pb-2">
          <div className="flex items-center gap-x-2 p-1">
            <MeetingSearchFilter />
            <StatusFilter />
            <AgentIdFilter />
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
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
