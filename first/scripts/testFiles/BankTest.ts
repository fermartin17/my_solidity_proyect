import { ethers } from "hardhat";

async function main() {
    const signer = await ethers.getSigner("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

    const Bank = await ethers.getContractFactory("Bank");

    const bank = await Bank.attach(
        "0xf5059a5D33d5853360D16C683c16e67980206f36",
    );

    let balance = await bank.connect(signer).balance();
    console.log("es 10", balance.eq(10));

    await bank.connect(signer).deposit(10);
    balance = await bank.connect(signer).balance();
    console.log("es 15", balance.eq(15));

    console.log("que pasa si no firmo");
    await bank.deposit(0);

    await bank.connect(signer).withdraw(8);
    balance = await bank.connect(signer).balance();
    console.log("es 7", balance.eq(7));

    await bank.connect(signer).withdraw(10);
    balance = await bank.connect(signer).balance();
    console.log("menos de 0", balance.eq(-4));


    console.log(`Bank deployed to ${bank.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
