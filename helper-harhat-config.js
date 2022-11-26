const networkConfig = {
    80001: {
        name: "mumbai",
        ethUsdPriceFeed:"0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
    31337:{
        name: "localhost"
    },
    5777:{
        name: "localganache"
    }
}

const develompentChains = ["hardhat", "localhost", "localganache"]

module.exports = {
    networkConfig,
    develompentChains,

}