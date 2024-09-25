document.getElementById('investBtn').addEventListener('click', async () => {
    const tweetUrl = document.getElementById('tweetUrl').value;
    const amount = document.getElementById('amount').value;

    if (tweetUrl && amount) {
        await investInTweet(tweetUrl, amount);
    } else {
        alert('Please enter a valid Tweet URL and amount.');
    }
});

async function investInTweet(tweetUrl, amount) {
    if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Replace with your smart contract address and ABI
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const contractABI = [
        "function invest(string memory tweetUrl) public payable"
    ];

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
        const tx = await contract.invest(tweetUrl, { value: ethers.utils.parseEther(amount) });
        await tx.wait();
        alert('Investment successful!');
    } catch (error) {
        console.error('Investment failed:', error);
        alert('Investment failed. Check console for details.');
    }
}
