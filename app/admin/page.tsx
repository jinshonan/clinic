import Image from "next/image";
import Link from "next/link";

import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { StatCard } from "@/components/StatCard";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        {/* no need for the logo */}
        <Link href="/" className="cursor-pointer">
            <div>🐼クリンニック</div>
          {/* <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          /> */}
        </Link>

        <p className="text-16-semibold">管理者ダッシュボード</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">こんにちは 👋</h1>
          <p className="text-dark-700">
            新しい予定の管理から一日を始める
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="予定済み"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="保留中"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="キャンセル済み"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;