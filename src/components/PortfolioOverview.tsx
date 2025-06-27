// src/components/PortfolioOverview.tsx
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useBlockchain } from '@/contexts/BlockchainContext';
import { getAddressExplorerUrl } from '@/lib/contractService';
import { useAccount } from 'wagmi';

const PortfolioOverview = () => {
  const { contractAddress, isContractOwner, ownerAddress } = useBlockchain();
  const { address, isConnected } = useAccount();
  const [contractLink, setContractLink] = useState('');
  const [ownerLink, setOwnerLink] = useState('');

  useEffect(() => {
    if (contractAddress) {
      setContractLink(getAddressExplorerUrl(contractAddress));
    }
    if (ownerAddress) {
      setOwnerLink(getAddressExplorerUrl(ownerAddress));
    }
  }, [contractAddress, ownerAddress]);

  return (
    <Card className="bg-[#1A1A4A] border border-[#8A2BE2]/40 rounded-2xl shadow-xl card-glass">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-[#8A2BE2]">Portfolio Overview</CardTitle>
        <CardDescription className="text-gray-300">
          Here's a quick look at your investment portfolio and contract details.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-[#00FFFF]">Your Wallet</h3>
            <p className="text-white">
              {isConnected ? (
                <>
                  Connected to: <span className="font-medium font-roboto-mono text-[#00FF00]">{address?.substring(0, 6)}...{address?.substring(address?.length - 4)}</span>
                </>
              ) : (
                <span className="text-[#FF00FF]">Not connected. Connect your wallet to view portfolio details.</span>
              )}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#00FFFF]">Contract Address</h3>
              {contractAddress ? (
                <a href={contractLink} target="_blank" rel="noopener noreferrer" className="underline text-[#00FF00]">
                  <span className="font-medium font-roboto-mono">{contractAddress?.substring(0, 6)}...{contractAddress?.substring(contractAddress?.length - 4)}</span>
                </a>
              ) : (
                <span className="text-[#FF00FF]">Contract address not available.</span>
              )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-[#00FFFF]">Contract Owner</h3>
            {ownerAddress ? (
              <>
                {isContractOwner ? (
                  <p className="text-[#00FF00]">You are the owner of this contract.</p>
                ) : (
                  <a href={ownerLink} target="_blank" rel="noopener noreferrer" className="underline text-[#00FF00]">
                    <span className="font-medium font-roboto-mono">{ownerAddress?.substring(0, 6)}...{ownerAddress?.substring(ownerAddress?.length - 4)}</span>
                  </a>
                )}
              </>
            ) : (
              <span className="text-[#FF00FF]">Owner address not available.</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioOverview;
