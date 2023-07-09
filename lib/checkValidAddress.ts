export default function checkValidAddress(userId: string): boolean{
    const ethAddressPattern = /^0x[a-fA-F0-9]{40}$/;
    return ethAddressPattern.test(userId);
}