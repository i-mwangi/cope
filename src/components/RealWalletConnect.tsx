import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import React from 'react';

const RealWalletConnect: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isLoading } = useConnect();
  const { disconnect } = useDisconnect();

  const injectedConnector = connectors.find(c => c.id === 'injected');

  const formatAddress = (address?: string) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  if (isConnected) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none hover:opacity-90"
        onClick={() => {
          disconnect();
          toast.success('Disconnected');
        }}
        title={address}
      >
        <span className="font-mono">{formatAddress(address)}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => injectedConnector && connect({ connector: injectedConnector })}
      disabled={isLoading || !injectedConnector}
    >
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
};

export default RealWalletConnect;
