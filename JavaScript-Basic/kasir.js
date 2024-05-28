const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        let umur = await askQuestion('Masukkan umur Anda: ');
        umur = parseInt(umur);
        if (isNaN(umur)) {
            console.log("Umur harus berupa angka.");
            rl.close();
            return;
        }else if(umur < 17){
            console.log("Anda tidak boleh membeli tiket");
            rl.close();
            return
        }

        let tiket = await askQuestion('Masukkan jenis tiket (Reguler/VIP): ');

        if (tiket !== "Reguler" && tiket !== "VIP") {
            console.log("Jenis tiket tidak valid");
            rl.close();
            return;
        }

        let bayar = await askQuestion('Masukkan jumlah uang yang dibayarkan: ');
        bayar = parseInt(bayar);
        if (isNaN(bayar)) {
            console.log("Jumlah uang harus berupa angka.");
            rl.close();
            return;
        }

        let hargaTiket = 0;
        let kembalian = 0;

        switch (tiket) {
            case "Reguler":
                hargaTiket = 7500;
                break;
            case "VIP":
                hargaTiket = 15000;
                break;
        }

        if (bayar < hargaTiket) {
            console.log("Uang Anda tidak cukup");
        } else {
             kembalian = bayar - hargaTiket;
             console.log("Selamat datang, \nkembalian Anda = " + kembalian);
        }

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    } finally {
        rl.close();
    }
}

main();
