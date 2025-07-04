# COPE: AI-Powered DeFi Portfolio Navigator 


## Overview

COPE is an advanced DeFi investment portfolio navigator , leveraging state-of-the-art artificial intelligence to transform how users interact with decentralized finance. The platform combines intelligent portfolio management, real-time market analysis, and on-chain insights, all powered by a hybrid AI system.

## Key Features

- **AI-Powered Portfolio Optimization**: Receive allocation suggestions based on market conditions, risk tolerance, and historical performance.
- **Natural Language Interface**: Conversational AI understands complex financial queries and provides actionable insights.
- **On-Chain Analysis**: Monitor whale transactions and market movements with predictive analytics.
- **Market Intelligence**: Analyze trends, token fundamentals, and trading opportunities using AI.
- **Yield Comparison**: Compare DeFi protocol yields and optimize returns.
- **Performance Tracking**: Visualize portfolio performance with custom charts.
- **Token Management**: Manage all tokens in a unified dashboard.
- **Persistent AI Chat**: AI chat history is saved across sessions for seamless experience.
- **Real-Time Data**: Integrates  Explorer and CoinGecko APIs for up-to-date blockchain and market data.

## AI System Architecture

COPE’s AI system uses a multi-layered approach:
- **Large Language Models (LLMs)**: Google Gemini 2.5 Pro for natural language understanding and generation, fine-tuned for DeFi and blockchain.
- **Rule-Based Systems**: For financial safety, compliance, and fallback responses.
- **Pattern Recognition**: Identifies market trends and transaction patterns.
- **On-Chain Data Analysis**: Provides blockchain intelligence and whale monitoring.

### Data Sources
- **On-Chain Data**:Explorer API, smart contract events, token transfers, whale movements, protocol metrics.
- **Market Data**: CoinGecko API for token prices, market caps, liquidity, and sentiment indicators.
- **Privacy**: Only public blockchain data is used; user portfolio data is processed locally when possible.

### Prompt Engineering
- Dynamic, context-aware prompts for financial and blockchain analysis.
- Structured, specific, and responsible prompt design for reliable AI outputs.

## Technical Stack

- **Frontend**: React (TypeScript)
- **UI**: Tailwind CSS, Shadcn UI
- **State Management**: React Query
- **Visualization**: Custom chart components
- **Build Tool**: Vite

## Getting Started

```sh
# Clone the repository
git clone 
cd cope

# Install dependencies
npm install

# Create .env file for API keys
cp .env.example .env
# Edit the .env file and add your Gemini API key

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the project root with:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_COINGECKO_API_URL=https://api.coingecko.com/api/v3
```

#### Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Generate an API key
3. Add it to your `.env` file as `VITE_GEMINI_API_KEY`

## Development

```sh
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Lint code
```

## Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` directory to your hosting provider

## Smart Contract Deployment Attestation

The portfolio allocation functionality is powered by a smart contract deployed blockchain. The contract address is specified in the `.env` file under the variable `VITE_CONTRACT_ADDRESS`.

### Verify Deployment

You can verify the deployment and interact with the contract on the blockchain explorer:


To view the contract details, replace `VITE_CONTRACT_ADDRESS` with the actual address from your `.env` file in the explorer URL.

### Proof of Deployment

The smart contract for portfolio allocation has been successfully deployed on the blockchain. You can verify the deployment using the following link:



## Usage Guidelines & Disclaimer

- Use AI insights as one of many research tools; always verify information from multiple sources.
- The AI provides analysis and suggestions, not professional financial advice.
- Cryptocurrency investments carry significant risks; past performance is not indicative of future results.
- No personally identifiable information is stored or processed.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact



## Demo

Try COPE: [cope-ivory.vercel.app](cope-ivory.vercel.app)

## Screenshots
![Image](https://github.com/user-attachments/assets/95341e19-ba74-47c5-b32b-2a7974d87802)



## Usage

1. **Connect Wallet**: Click "Connect Wallet" to link your MetaMask or other Web3 wallet
2. **Portfolio Management**: Adjust allocation sliders to rebalance your portfolio
3. **AI Chat**: Ask financial questions in natural language
4. **Whale Tracking**: Monitor significant market movements

For a detailed walkthrough, see our [User Guide](link-to-guide).

## Roadmap

- Q2 2025: 
MVP development
AI integration with Gemini 2.5 Pro
Initial user testing

- Q3 2025: 
ElizaOS Plugin Hybrid
Enhanced data visualization
Additional DeFi protocol integrations
Advanced whale tracking features

- Q4 2025: 
Mainnet deployment
Multi-chain expansion (Cross-chain)
Institutional-grade features
Advanced predictive analytics

- 2026: 
DAO governance implementation
Ecosystem of financial AI tools
Global expansion and localization
Integration with traditional finance systems

## Acknowledgments
- Google for access to the Gemini 2.5 Pro API
- The open-source community for the various libraries used in this project
