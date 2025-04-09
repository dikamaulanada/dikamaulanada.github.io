const correctCode = "BESOK SENIN"; // Ubah ini jika ingin ganti kode akses
let allCourses = [];

window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedCode = localStorage.getItem("savedCode");

    // Cek apakah user masih login dan kode belum berubah
    if (isLoggedIn === "true" && savedCode === correctCode) {
        document.getElementById("authBox").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
        showCategory('all');
    } else {
        // Logout otomatis jika kode berubah
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("savedCode");
    }
    
    // Setup scroll arrows
    setupScrollArrows();
};

function setupScrollArrows() {
    const menuScroll = document.getElementById('menuScroll');
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    
    scrollLeft.addEventListener('click', () => {
        menuScroll.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    scrollRight.addEventListener('click', () => {
        menuScroll.scrollBy({ left: 200, behavior: 'smooth' });
    });
    
    // Hide/show arrows based on scroll position
    menuScroll.addEventListener('scroll', () => {
        scrollLeft.style.display = menuScroll.scrollLeft > 0 ? 'flex' : 'none';
        scrollRight.style.display = menuScroll.scrollLeft < (menuScroll.scrollWidth - menuScroll.clientWidth) ? 'flex' : 'none';
    });
    
    // Initial check
    menuScroll.dispatchEvent(new Event('scroll'));
}

function validateCode() {
    const input = document.getElementById("accessCode").value;
    if (input === correctCode) {
        // Simpan login dan kode ke localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("savedCode", correctCode);

        // Animasi keluar untuk auth box
        document.getElementById("authBox").style.animation = "fadeInUp 0.5s ease reverse forwards";
        
        // Tampilkan konten setelah animasi selesai
        setTimeout(() => {
            document.getElementById("authBox").style.display = "none";
            document.getElementById("mainContent").classList.remove("hidden");
            showCategory('all');
        }, 500);
    } else {
        // Animasi shake untuk feedback error
        const authBox = document.getElementById("authBox");
        authBox.style.animation = "shake 0.5s";
        setTimeout(() => {
            authBox.style.animation = "";
        }, 500);
        
        // Highlight input
        document.getElementById("accessCode").style.borderColor = "red";
        setTimeout(() => {
            document.getElementById("accessCode").style.borderColor = "";
        }, 1000);
    }
}

const data = {
    investing: [
        { 
            title: "Crypto Investing", 
            image: "crypto-investing.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkR5FlKi_LUpeByO_XYUg2HG",
            category: "investing"
        },
        { 
            title: "Crypto Investing Strategy", 
            image: "crypto-investing-strategy.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkS4_pIcxNHO-xTHYJroSVmq",
            category: "investing"
        },
        { 
            title: "Crypto Investing Principles", 
            image: "sd.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkRYwMEgIbFQgRvUAxT29H2C",
            category: "investing"
        },
        { 
            title: "Crypto Investing Tools", 
            image: "crypto-investing-tools.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQqOhQqJzgNOfABfqDDkSnu",
            category: "investing"
        },
        { 
            title: "Crypto Investing Guide", 
            image: "crypto-investing-guide.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQSQv_b0lmx-MpAehS_i943",
            category: "investing"
        },
        { 
            title: "Crypto Investing Alpha", 
            image: "crypto-investing-alpha.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQ0AmpJ6ZQAONsFC9P4ICPo",
            category: "investing"
        },
        { 
            title: "Crypto Self Custody", 
            image: "crypto-self-custody.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQ2ZvwjsNJqzHxPMzOHsqeY",
            category: "investing"
        }
    ],

    blockchain: [
        { 
            title: "Smart Contract Development", 
            image: "smart-contract-development.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQoSi4_cEe8sWlBdGM5BOJx",
            category: "blockchain"
        },
        { 
            title: "Blockchain Interoperability", 
            image: "blockchain-interoperability.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSvkLu0dbp4IeId43vvNahl",
            category: "blockchain"
        },
        { 
            title: "Smart Contract Security", 
            image: "ss9.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQ9BATsPJRWyNRu5acx_8hl",
            category: "blockchain"
        },
        { 
            title: "Cryptocurrency Security", 
            image: "cryptocurrency-security.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkT5CyMokqqvnfbz7cCANEIf",
            category: "blockchain"
        },
        { 
            title: "Crypto Self Custody", 
            image: "crypto-self-custody.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTgLp87pWVbSdF-qh1pNrZc",
            category: "blockchain"
        },
        { 
            title: "Cryptocurrency Fundamentals", 
            image: "cryptocurrency-fundamentals.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSX4m6Ai7I6-G-ZVwJ34Jbk",
            category: "blockchain"
        },
        { 
            title: "Monero Anonymity", 
            image: "monero-anonymity.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQIJ4LzQgSxQEpR6xNMPUt5",
            category: "blockchain"
        },
        { 
            title: "Ethereum Programmable Money", 
            image: "ethereum-programmable-money.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkT56nVEJiQz7tRyoC6kE5Oq",
            category: "blockchain"
        },
        { 
            title: "Bitcoin Transaction in Depth", 
            image: "bitcoin-transaction-in-depth.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTfrsBywgQoFOgTsxXVX5uX",
            category: "blockchain"
        },
        { 
            title: "Crypto Research", 
            image: "crypto-research.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQ9uaFae78dyUQIQCqBDuL0",
            category: "blockchain"
        },
        { 
            title: "Key, Wallets, & How They Work", 
            image: "key-wallets-how-they-work.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkRI2Np0SHo8E4Pr2EuOBCHR",
            category: "blockchain"
        },
        { 
            title: "Digital Money And Double Spending", 
            image: "digital-money-double-spending.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTyoODXGPPClW-b_jQkKE9X",
            category: "blockchain"
        },
        { 
            title: "Consensus Proof Of And Security Premises", 
            image: "consensus-proof-security.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQbhfROXcOUNWKSg0Xtviik",
            category: "blockchain"
        },
        { 
            title: "Blockchain Trilemma", 
            image: "blockchain-trilemma.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQn_UfP0iKtPn7noK1wX3RT",
            category: "blockchain"
        },
        { 
            title: "Bitcoin Anonymity", 
            image: "bitcoin-anonymity.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkRMN8cT3ayvHW5QSktpcZY4",
            category: "blockchain"
        },
        { 
            title: "What is a Smart Contract", 
            image: "what-is-a-smart-contract.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQX_hJaqiidqKyQ89GbbuCb",
            category: "blockchain"
        },
        { 
            title: "Type of Accounts", 
            image: "type-of-accounts.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQ2Wn9wTM-2KDfnIisgNfIo",
            category: "blockchain"
        },
        { 
            title: "UTXO Model vs Account Model", 
            image: "utxo-vs-account-model.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkS-sRyPe6KWPYsuzzdRI-wf",
            category: "blockchain"
        },
        { 
            title: "Security Issues", 
            image: "aap.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQe6TAVs9JSZA8MUablgI53",
            category: "blockchain"
        },
        { 
            title: "Layer 2 Rollups", 
            image: "layer-2-rollups.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkT5XG1DvuE7gF4wO3rDEqWl",
            category: "blockchain"
        },
        { 
            title: "Tokens", 
            image: "tokens.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQWYCkR7wKpE1Dd48V2DHff",
            category: "blockchain"
        },
        { 
            title: "Blockchain Oracles", 
            image: "blockchain-oracles.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTzy3oLzGVsxOZEs83i5FdD",
            category: "blockchain"
        },
        { 
            title: "Cross-chain Technology", 
            image: "cross-chain-technology.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTz1unLivD9WE2vVCi1iPqd",
            category: "blockchain"
        }
    ],

    sekolah: [
        { 
            title: "1. Pengantar Ilmu Ekonomi", 
            image: "100.jpg", 
            link: "https://youtu.be/r_YPjXZcQQY?si=St_RsdM_PhzLlPWG",
            category: "sekolah"
        },
        { 
            title: "2. Mekanisme Pasar", 
            image: "200.jpg", 
            link: "https://youtu.be/uXQq4lWNeiY?si=V7ZLFcY25lbhXQow",
            category: "sekolah"
        },
        { 
            title: "3. Perdagangan Internasional", 
            image: "300.jpg", 
            link: "https://youtu.be/hBBq0S2toJs?si=LyK6zbuI18Y_mlsn",
            category: "sekolah"
        },
        { 
            title: "4. Teori Biyaya Produksi", 
            image: "400.jpg", 
            link: "https://youtu.be/lShkQaDQeUM?si=zaC-AEP3p7wzZdyT",
            category: "sekolah"
        },
    ],
    
    trading: [
        { 
            title: "Crypto Spot Trading", 
            image: "crypto-trading.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSW_Ln6qn8YlhFO1YpNxlgA",
            category: "trading"
        },
        { 
            title: "Kamus Pattern Crypto", 
            image: "kamus-pattern-crypto.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQ3zJrpA2l_POSXmq4dZrTv",
            category: "trading"
        },
        { 
            title: "Crypto Technical Indicators", 
            image: "crypto-technical-indicators.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTkQfZFKlN7LTuErnCDxGSk",
            category: "trading"
        },
        { 
            title: "Crypto Fibonacci Secret", 
            image: "ww.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkR0YG-DjruO4JCXRqX49smy",
            category: "trading"
        },
        { 
            title: "Crypto Smart Money", 
            image: "crypto-smart-money.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSjFvK-EsAxVEqIM0E7cEwx",
            category: "trading"
        },
        { 
            title: "Crypto Order Flow", 
            image: "crypto-order-flow.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSLvSG3eOhFZSbg5NCJjHy4",
            category: "trading"
        },
        { 
            title: "Crypto Harmonic Trading", 
            image: "crypto-harmonic-trading.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTA7R16GuLHJCclg8YDE-F5",
            category: "trading"
        },
        { 
            title: "Narrative Research", 
            image: "narrative-research.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkRyIifhLD_aSoI8i667P-lt",
            category: "trading"
        },
        { 
            title: "Crypto Money Psychology", 
            image: "crypto-money-psychology.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkTq1Y05AAKuJHjay2Ox5-G5",
            category: "trading"
        },
        { 
            title: "Strategi Trading Crypto Untuk Dapetin 100jt Pertama", 
            image: "strategi-trading-100jt.jpg", 
            link: "https://www.youtube.com/watch?v=oYYfuxkXc8E&list=PL1hlgGm52pkSs8IIOw_RbcvStT95THLmv&index=4",
            category: "trading"
        },
        { 
            title: "Crypto WyckOff Trading", 
            image: "crypto-wyckoff-trading.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQJOkiNWJu8NtD40fUegcZe",
            category: "trading"
        },
        { 
            title: "Token Unlock Trading Strategy", 
            image: "pp.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSLNB0rb543lwOgfpr33o-l",
            category: "trading"
        },
        { 
            title: "DEX Trading Tutorial", 
            image: "dex-trading-tutorial.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSq5ArXxxCBo02EWes4Rawp",
            category: "trading"
        },
        { 
            title: "Cara Screning Altcoin Dari 0", 
            image: "aa.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkQXePTmW6W_diad21w51z3Y",
            category: "trading"
        }
    ],

    liveclass: [
        { 
            title: "The Art of Crypto Trading", 
            image: "art-of-crypto-trading.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkSc7jlBxPbLCQz15nC7TF3A",
            category: "liveclass"
        },
        { 
            title: "Crypto Market Outlook 2025 (17-Desember-2024)", 
            image: "market-outlook-2025.jpg", 
            link: "https://youtu.be/CSEGkBTAFvI",
            category: "liveclass"
        },
        { 
            title: "US Election Market Outlook (3-November-2024)", 
            image: "us-election-market.jpg", 
            link: "https://www.youtube.com/watch?v=lR9sISGi-Mk",
            category: "liveclass"
        },
        { 
            title: "Preparing For Octobull (1-Oktober-2024)", 
            image: "preparing-octobull.jpg", 
            link: "https://youtu.be/oaK71Ar3fjE",
            category: "liveclass"
        },
        { 
            title: "Crypto Trading Psychology", 
            image: "crypto-trading-psychology.jpg", 
            link: "https://youtu.be/Sz9BJzwP_98",
            category: "liveclass"
        },
        { 
            title: "Mastering Altcoins", 
            image: "mastering-altcoins.jpg", 
            link: "https://youtu.be/9Yfdc8ALR5A",
            category: "liveclass"
        },
        { 
            title: "Masterclass Session 1 – Crypto Smart Money", 
            image: "mas1.jpg", 
            link: "https://youtu.be/eqwtVcW9rI4?si=g4Ox3Q2nQCeB4mrH",
            category: "liveclass"
        },
        { 
            title: "Masterclass Session 2 – Crypto Harmonic Trading", 
            image: "mas.jpg", 
            link: "https://youtu.be/IVpagLD5fXI?si=iuR6rtFIKsRh1yxx",
            category: "liveclass"
        },
        { 
            title: "Masterclass Session 3 – Crypto Order Flow", 
            image: "flow.jpg", 
            link: "https://youtu.be/LWd2d4O0YQY?si=I6AO5TzHrhm7JUP1",
            category: "liveclass"
        },
        { 
            title: "Kuliah Crypto", 
            image: "kuliah-crypto.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkS4tAzW6rIx5yW8Pi4NZua-",
            category: "liveclass"
        },
        { 
            title: "Bonus: Sales Mastery", 
            image: "sales-mastery.jpg", 
            link: "https://www.youtube.com/playlist?list=PL1hlgGm52pkR_axjnn8ocScFYtTLDQp08",
            category: "liveclass"
        },
        { 
            title: "Big Crypto Thesis", 
            image: "big.png", 
            link: "https://youtu.be/nAvj4rgkhFU?si=aJoPPFkmRWXqMC0J",
            category: "liveclass"
        },
        { 
            title: "Akademi Crypto Grand Launching", 
            image: "lau.png", 
            link: "https://youtu.be/Vk2umj18kCw?si=W_pIct9DaheCS4-p",
            category: "liveclass"
        },
        { 
            title: "BTC to Alts Switching Timing", 
            image: "btc.jpg", 
            link: "https://youtu.be/NSDsnoD7L5c?si=c_I89sDQXIj7JEe4",
            category: "liveclass"
        },
        { 
            title: "Narratives for 2024 Bull Run", 
            image: "nar.jpg", 
            link: "https://youtu.be/D68XtnGuwVA?si=UzAe-LfU17cSMsiX",
            category: "liveclass"
        },
        { 
            title: "Strategi Jadi Miliarder Dari Crypto", 
            image: "str.jpg", 
            link: "https://youtu.be/zFz6tVbQaD0?si=VQflay_1E61CIZiH",
            category: "liveclass"
        },
        { 
            title: "Kopi Darat Akademi Crypto 9 September 2023", 
            image: "kop.jpg", 
            link: "https://youtu.be/F-Wu24Ppx8k?si=JhYM51kBr4bAWDVe",
            category: "liveclass"
        },
        { 
            title: "Cara Mencari Altcoin yang Minimal Akan Naik 10X", 
            image: "10x.jpg", 
            link: "",
            category: "liveclass"
        },
        { 
            title: "10X YOUR PORTFLIO THIS BULLRUN", 
            image: "10xy.jpg", 
            link: "https://youtu.be/xLHo4Bsc6GI?si=mGofXoazfWIRhqyD",
            category: "liveclass"
        },
        { 
            title: "Riding the Crypto Super Mega Cycle", 
            image: "rid.jpg", 
            link: "https://youtu.be/aObCLswItww?si=juIyko6h7p7Uutvl",
            category: "liveclass"
        },
        { 
            title: "Cara Menggandakan Portofolio di AI Supercycle", 
            image: "ai.jpg", 
            link: "https://youtu.be/qGz-Xvd1Ino?si=GzNXo3h6iQj6YXOy",
            category: "liveclass"
        },
        { 
            title: "2030 The Great Reset", 
            image: "the.jpg", 
            link: "https://youtu.be/Zpp4ja9DOFo?si=kSq-tRz--i-nV6e-",
            category: "liveclass"
        },
        { 
            title: "2025 Crypto Regulation", 
            image: "reg.jpg", 
            link: "https://youtu.be/WzXHL9cfSko?si=8YnocBpuPy1M3DnE",
            category: "liveclass"
        }
    ],

    margincall: [
        { 
            title: "Margin Call - 6 July 2024", 
            image: "margin-call-6july.jpg", 
            link: "https://www.youtube.com/watch?v=ZDnIJunBB-A&feature=youtu.be",
            category: "margincall"
        },
        { 
            title: "Margin Call - Soon!", 
            image: "margin-call-6july.jpg", 
            link: "#",
            category: "margincall"
        },
        { 
            title: "Margin Call - Soon!", 
            image: "margin-call-6july.jpg", 
            link: "#",
            category: "margincall"
        },
        { 
            title: "Margin Call - Soon!", 
            image: "margin-call-6july.jpg", 
            link: "#",
            category: "margincall"
        }
    ],

    ebook: [
        { 
            title: "Crypto Trading Guide", 
            image: "gd.jpg", 
            link: "https://drive.google.com/file/d/1acE6k2fKifSqi6hk_SCjVuktDCjep6aP/view?usp=drivesdk",
            category: "ebook"
        },
        { 
            title: "Crypto Investing Principles", 
            image: "pri.jpg", 
            link: "https://drive.google.com/file/d/1acnJl-Lu-HR6jTZp-h3VsMkuTzxLCg-Y/view?usp=drivesdk",
            category: "ebook"
        },
        { 
            title: "Crypto Smart Money", 
            image: "smart.jpg", 
            link: "https://drive.google.com/file/d/1cEwqBoLQzkxA_WAa0lgLW0STVuKOdBr0/view?usp=drivesdk",
            category: "ebook"
        },
        { 
            title: "Mastering Altcoins", 
            image: "masa.jpg", 
            link: "https://drive.google.com/file/d/1BPYTgwq6QxD9Ojo-PHPIBmlHSmjT-Eph/view?usp=drivesdk",
            category: "ebook"
        },
        { 
            title: "Crypto Trading Psychology", 
            image: "sys.jpg", 
            link: "https://drive.google.com/file/d/1ztF-QGPQdWPFw1jXVrgp0c8u3GN4v0hG/view?usp=sharing",
            category: "ebook"
        },
    ],

    thevoice: [
        { 
            title: "The Crypto Millionire - Timothy Ronald", 
            image: "t.jpg", 
            link: "https://t.me/+5iTzMIS7hlFjZmQ1",
            category: "thevoice"
        }
    ],

    research: [
        { 
            title: "KAITO ($KAITO) 26 FEB 2025", 
            image: "pdf1.jpg", 
            link: "https://drive.google.com/file/d/1AhHmt9PiT8j-e1V58vvsVT1gZ-3ZCzLU/view",
            category: "research"
        },
        { 
            title: "BERACHAIN ($BERA) 18 FEB 2025", 
            image: "pdf2.jpg", 
            link: "https://drive.google.com/file/d/1v1ef6e8ZP6DYg-_vklRascWQDyuLPCtD/view?usp=drive_link",
            category: "research"
        },
        { 
            title: "STROY ($IP) 17 FEB 2025", 
            image: "pdf3.jpg", 
            link: "https://drive.google.com/file/d/1B1uTa8GX9SJif7mXhc673S6vo6W-UHvd/view?usp=drive_link",
            category: "research"
        },
    ],
    
    miror: [
        { 
            title: "TRIAL 24 JAM", 
            image: "CSV.png", 
            link: "https://discord.com/invite/7wDEMKA3tq",
            category: "miror"
        },
        { 
            title: "75K (3 BULAN)", 
            image: "CSV.png", 
            link: "https://lynk.id/ebcdde/qOXd90r",
            category: "miror"
        },
        { 
            title: "98K (1 TAHUN)", 
            image: "CSV.png", 
            link: "https://lynk.id/ebcdde/437MJ2p",
            category: "miror"
        },
        { 
            title: "185K (LIFTIME)", 
            image: "CSV.png", 
            link: "https://lynk.id/ebcdde/Bb0k6vk",
            category: "miror"
        },
        { 
            title: "PEMBELIAN MELALUI WHATSAPP (HARGA SAMA)", 
            image: "WA.png", 
            link: "https://wa.me/6285229282554",
            category: "miror"
        },
    ],
};

// Combine all courses for search functionality
data.all = [
    ...data.investing,
    ...data.trading,
    ...data.blockchain,
    ...data.sekolah,
    ...data.liveclass,
    ...data.margincall,
    ...data.ebook,
    ...data.thevoice,
    ...data.research,
    ...data.miror
];

allCourses = data.all;

function showCategory(category) {
    const sectionTitle = document.getElementById('section-title');
    const coursesContainer = document.getElementById('courses');
    
    const titleMap = {
        all: 'SEMUA MODUL AKADEMI CRYPTO',
        trading: 'CRYPTO TRADING',
        investing: 'CRYPTO INVESTING',
        blockchain: 'BLOKCHAIN TECHNOLOGY',
        sekolah: 'KULIAH EKONOMI',
        liveclass: 'LIVECLASS',
        margincall: 'MARGIN CALL (PRIVATE)',
        ebook: 'EBOOK AKADEMI CRYPTO',
        thevoice: 'THE VOICE',
        research: 'PDF RESEARCH',
        miror: 'MIROR AC TERMURAH (LIFETIME)'
    };

    sectionTitle.textContent = titleMap[category] || category.toUpperCase();
    coursesContainer.innerHTML = '';

    const coursesToShow = category === 'all' ? allCourses : data[category];
    
    if (coursesToShow.length === 0) {
        coursesContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3em; opacity: 0.5; margin-bottom: 20px;"></i>
                <h3>Tidak ada modul yang ditemukan</h3>
                <p>Coba kata kunci lain atau kategori berbeda</p>
            </div>
        `;
        return;
    }

    coursesToShow.forEach(item => {
        const badgeText = titleMap[item.category] || item.category.toUpperCase();
        coursesContainer.innerHTML += `
            <div class='course' onclick="window.open('${item.link || '#'}', '_blank')">
                <div class='badge'>${badgeText}</div>
                <img src='images/${item.image}' alt='${item.title}' />
                <div class='overlay'>
                    <p>${badgeText}</p>
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
    });

    // Update active button
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.menu-btn[onclick="showCategory('${category}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Scroll menu to show active button
    if (activeBtn) {
        const menuScroll = document.getElementById('menuScroll');
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const menuWidth = menuScroll.offsetWidth;
        
        menuScroll.scrollTo({
            left: btnLeft - (menuWidth / 2) + (btnWidth / 2),
            behavior: 'smooth'
        });
    }
}

function searchCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const coursesContainer = document.getElementById('courses');
    
    if (!searchTerm) {
        showCategory('all');
        return;
    }
    
    const filteredCourses = allCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) || 
        (course.category && course.category.toLowerCase().includes(searchTerm))
    ).sort((a, b) => {
        // Sort by how early the search term appears in the title
        const aIndex = a.title.toLowerCase().indexOf(searchTerm);
        const bIndex = b.title.toLowerCase().indexOf(searchTerm);
        return aIndex - bIndex;
    });
    
    coursesContainer.innerHTML = '';
    document.getElementById('section-title').textContent = `Hasil Pencarian: "${searchTerm}"`;
    
    if (filteredCourses.length === 0) {
        coursesContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3em; opacity: 0.5; margin-bottom: 20px;"></i>
                <h3>Tidak ada modul yang ditemukan</h3>
                <p>Coba kata kunci lain atau kategori berbeda</p>
            </div>
        `;
        return;
    }
    
    filteredCourses.forEach(item => {
        const badgeText = item.category ? item.category.toUpperCase() : 'MODUL';
        coursesContainer.innerHTML += `
            <div class='course' onclick="window.open('${item.link || '#'}', '_blank')">
                <div class='badge'>${badgeText}</div>
                <img src='images/${item.image}' alt='${item.title}' />
                <div class='overlay'>
                    <p>${badgeText}</p>
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
    });
}

// Add shake animation for error feedback
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show your custom install button/prompt
    const installButton = document.createElement('button');
    installButton.textContent = 'Install App';
    installButton.style.position = 'fixed';
    installButton.style.bottom = '20px';
    installButton.style.right = '20px';
    installButton.style.zIndex = '9999';
    installButton.onclick = () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User  accepted install');
            }
            deferredPrompt = null;
        });
    };
    document.body.appendChild(installButton);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((reg) => {
        console.log('Service Worker Registered', reg);
      }).catch((err) => {
        console.log('Service Worker Failed', err);
      });
  });
}


console.log('Website Akademi Crypto Berjalan!');
