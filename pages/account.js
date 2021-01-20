import { useState } from 'react';
import { Button } from '@chakra-ui/core';
import { useAuth } from '@/utils/auth';
import { goToBillingPortal } from '@/lib/db';

const Account = () => {
    const { user, signout } = useAuth();
    const [isBillingLoading, setBillingLoading] = useState(false);
    return (
        <Button
            onClick={() => {
                setBillingLoading(true);
                goToBillingPortal();
            }}
            isLoading={isBillingLoading}
        >
            Manage Billing
        </Button>
    );
};
export default Account;
