import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  // translate it into Japanese
  const getStatusText = (status: Status) => {
    switch (status) {
      case "scheduled":
        return "予定済み";
      case "pending":
        return "保留中";
      case "cancelled":
        return "キャンセル済み";
      default:
        return status;
    }
  };

  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {getStatusText(status)}
      </p>
    </div>
  );
};