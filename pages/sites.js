import React from 'react';
import useSWR from 'swr';
import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import SiteTableHeader from '@/components/SiteTableHeader';
import SiteTable from '@/components/SiteTable';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/utils/auth';
const Dashboard = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
    const sites = data?.sites;

    if (!data) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        );
    }
    if (data.sites.length) {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <SiteTable sites={sites} />
            </DashboardShell>
        );
    } else {
        return (
            <DashboardShell>
                <SiteTableHeader />
                <EmptyState />
            </DashboardShell>
        )
    }
};
export default Dashboard;
